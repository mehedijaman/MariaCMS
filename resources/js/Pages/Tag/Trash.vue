<script setup>
import DeleteForce from "./DeleteForce.vue";
import DeleteForceBulk from "./DeleteForceBulk.vue";
import DeleteForceAll from "./DeleteForceAll.vue";
import Restore from "./Restore.vue";
import RestoreBulk from "./RestoreBulk.vue";
import RestoreAll from "./RestoreAll.vue";
import { ref, reactive, defineProps, provide, computed } from "vue";
import { formatDate } from "../../Helpers/dateHelper";
import EmptyAnimation from "../../Components/Animations/Empty.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/vue3";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

import {
    MagnifyingGlassIcon,
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
    BackwardIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    tags: Object,
    breadcrumbs: Object,
});
const items = reactive(props.tags);

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Name", value: "name", sortable: true },
    { text: "Slug", value: "slug", sortable: true },
    { text: "Action", value: "actions" },
];

// Method to remove an item from the array based on its ID
const removeItem = (itemId) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === itemId);

    // Remove the item if found
    if (index !== -1) {
        items.splice(index, 1);
    }
};

const removeBulkItems = (itemIds) => {
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


const removeAllItems = () => {
    // Remove all items from the items array
    items.splice(0, items.length);
};

provide('removeItem', removeItem);
provide('removeBulkItems', removeBulkItems);
provide('removeAllItems', removeAllItems);
</script>
<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs"/>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2">
                    <div class="flex justify-between">
                        <div class="flex shrink-0 rounded overflow-hidden">
                            <Link
                                class="inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8"
                                :href="route('tags.index')">
                                <BackwardIcon class="w-5 h-5 ">
                                </BackwardIcon>
                                Back
                            </Link>
                            <RestoreAll></RestoreAll>
                            <DeleteForceAll></DeleteForceAll>
                            <RestoreBulk v-if="itemsSelected.length != 0 && can(['category delete'])"
                                :itemsSelected="itemsSelected" title="Items" />
                            <DeleteForceBulk v-if="itemsSelected.length != 0 && can(['category delete'])"
                                :itemsSelected="itemsSelected" title="Items" />
                        </div>
                        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2">
                            <div class="relative ">
                                <div
                                    class="absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                    <MagnifyingGlassIcon class="w-5 h-5 text-gray-500 dark:text-gray-400">
                                    </MagnifyingGlassIcon>
                                </div>
                                <input type="text" v-model="searchValue"
                                    class="block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for items">
                            </div>
                        </div>
                    </div>
                    <EasyDataTable class="mt-2" :rows-per-page="rowsPerPage" show-index alternating border-cell
                        buttons-pagination :headers="headers" :items="items" :search-field="searchField"
                        :search-value="searchValue" v-model:items-selected="itemsSelected">

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
                                <Restore v-show="can(['category update'])" :title="item.name" :item="item"
                                    @open="item = item" />
                                <DeleteForce v-show="can(['category delete'])" :title="item.name" :item="item"
                                    @open="item = item" />
                            </div>
                        </template>
                    </EasyDataTable>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
