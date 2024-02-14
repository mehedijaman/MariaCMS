<script setup>
import Create from "@/Pages/Gallery/Create.vue";
import Edit from "@/Pages/Gallery/Edit.vue";
import Delete from "@/Pages/Gallery/Delete.vue";
import DeleteBulk from "@/Pages/Gallery/DeleteBulk.vue";
import { ref, inject } from "vue";
import EmptyAnimation from "../../Components/Animations/Empty.vue";
import { Link } from "@inertiajs/vue3";

import {
    MagnifyingGlassIcon,
    ComputerDesktopIcon,
} from "@heroicons/vue/24/outline";

const items = inject('published');

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Media", value: "media", sortable: false },
    { text: "Name", value: "name", sortable: true },
    { text: "Slug", value: "slug", sortable: true },
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

        <template #item-media="item">
            <img v-if="item.media[0]" :src="item.media[0]?.original_url" alt="Gallery" class="w-10 h-10 rounded-sm">
        </template>

        <template #expand="item">
            <div>
                <strong>Description: </strong> {{ item.description }}
            </div>
        </template>
        <template #empty-message>
            <EmptyAnimation></EmptyAnimation>
        </template>
        <template #item-actions="item">
            <div class="flex w-fit rounded overflow-hidden">

                <Link v-if="can(['gallery item create'])" :href="route('gallery.items.index', { gallery: item.id })"
                    class="inline-flex items-center px-3 py-1.5 bg-violet-500 dark:bg-violet-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-violet-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150">
                <ComputerDesktopIcon class="w-4 h-auto" />

                </Link>
                <Edit v-show="can(['gallery update'])" :title="item.name" :item="item" @open="item = item" />
                <Delete v-show="can(['gallery delete'])" :title="item.name" :item="item" @open="item = item" />
            </div>
        </template>
    </EasyDataTable>
</template>
