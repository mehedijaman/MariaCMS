<script setup>
import Create from "./Create.vue";
import Edit from "./Edit.vue";
import Delete from "./Delete.vue";
import DeleteBulk from "./DeleteBulk.vue";
import { ref, inject } from "vue";
import EmptyAnimation from "@/Components/Animations/Empty.vue";

import {
    MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

const items = inject('unpublished');

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Thumbnail", value: "thumbnail", sortable: true },
    { text: "Name", value: "name", sortable: true },
    { text: "URL", value: "url", sortable: true },
    { text: "Action", value: "actions" },
];
</script>
<template>
    <div class="flex justify-between">
        <div class="flex shrink-0 rounded overflow-hidden">
            <Create v-if="can(['gallery create'])" />
            <DeleteBulk v-if="itemsSelected.length != 0 && can(['gallery delete'])" :itemsSelected="itemsSelected"
                title="Items" />
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

        <template #item-thumbnail="item">
            <img v-if="item.media[0]" :src="item.media[0]?.original_url" alt="Video Thumbnail" class="w-10 h-10 rounded-sm">
        </template>

        <template #empty-message>
            <EmptyAnimation></EmptyAnimation>
        </template>
        <template #item-actions="item">
            <div class="flex w-fit rounded overflow-hidden">
                <Edit v-show="can(['gallery update'])" :title="item.name" :item="item" @open="item = item" />
                <Delete v-show="can(['gallery delete'])" :title="item.name" :item="item" @open="item = item" />
            </div>
        </template>
    </EasyDataTable>
</template>
