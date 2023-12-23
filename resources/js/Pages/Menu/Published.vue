<script setup>
import Create from "@/Pages/Menu/Create.vue";
import Edit from "@/Pages/Menu/Edit.vue";
import Delete from "@/Pages/Menu/Delete.vue";
import DeleteBulk from "@/Pages/Menu/DeleteBulk.vue";
import { ref, reactive, defineEmits } from "vue";
import { formatDate } from "../../Helpers/dateHelper";
import EmptyAnimation from "../../Components/Animations/Empty.vue";

import {
    MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";


const props = defineProps({
    items: Object,
});


const items = reactive(props.items);
const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');


const headers = [
    { text: "Name", value: "name", sortable: true },
    { text: "Position", value: "position", sortable: true },
    { text: "Created", value: "created_at", sortable: true, format: val => formatDate(new Date(val)) },
    { text: "Updated", value: "updated_at", sortable: true, format: val => formatDate(new Date(val)) },
    { text: "Action", value: "actions" },
];

const removeItem = (itemId) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === itemId);

    // Remove the item if found
    if (index !== -1) {
        items.splice(index, 1);
    }
};

const removeBulkItem = (itemIds) => {
    // Iterate over the array of item IDs
    itemIds.forEach(itemId => {
        // Find the index of the item in the items array
        const index = items.findIndex(item => item.id === itemId);

        // Remove the item if found
        if (index !== -1) {
            items.splice(index, 1);
        }
    });
};

const updateItem = (updatedItem) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === updatedItem.id);
    // Update the item if found
    if (index !== -1) {
        items[index].name = updatedItem.data.name;
        items[index].position = updatedItem.data.position;
        items[index].status = updatedItem.data.status;
    }
};

const emits = defineEmits([
    'removeItem',
    'removeBulkItem',
    'updateItem',
]);
</script>
<template>
    <div class="flex justify-between">
        <div class="flex shrink-0 rounded overflow-hidden">
            <Create v-if="can(['menu create'])" />
            <DeleteBulk v-if="itemsSelected.length != 0 && can(['menu delete'])" :itemsSelected="itemsSelected"
                title="Items" @removeBulkItem="removeBulkItem" />
        </div>
        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2">
            <div class="relative ">
                <div class="absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <MagnifyingGlassIcon class="w-5 h-5 text-gray-500 dark:text-gray-400"></MagnifyingGlassIcon>
                </div>
                <input type="text" v-model="searchValue"
                    class="block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items">
            </div>
        </div>
    </div>
    <EasyDataTable class="mt-2" :rows-per-page="rowsPerPage" show-index alternating border-cell buttons-pagination
        :headers="headers" :items="items" :search-field="searchField" :search-value="searchValue"
        v-model:items-selected="itemsSelected">

        <template #expand="item">
            <div>
                <strong>Items: </strong> {{ item.items }}
            </div>
        </template>
        <template #empty-message>
            <EmptyAnimation></EmptyAnimation>
        </template>
        <template #item-actions="item">
            <div class="flex w-fit rounded overflow-hidden">
                <Edit v-show="can(['menu update'])" :title="item.name" :item="item" @open="item = item"
                    @updateItem="updateItem" />
                <Delete v-show="can(['menu delete'])" :title="item.name" :item="item" @open="item = item"
                    @removeItem="removeItem" />
            </div>
        </template>
    </EasyDataTable>
</template>
