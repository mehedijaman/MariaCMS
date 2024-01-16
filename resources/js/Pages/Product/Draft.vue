<script setup>
import Delete from "@/Pages/Product/Delete.vue";
import DeleteBulk from "@/Pages/Product/DeleteBulk.vue";
import { ref, inject } from "vue";
import EmptyAnimation from "../../Components/Animations/Empty.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { Link } from '@inertiajs/vue3';

import {
    MagnifyingGlassIcon,
    PencilIcon,
} from "@heroicons/vue/24/outline";

const items = inject('draft');

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Name", value: "name", sortable: true },
    { text: "Category", value: "category.name", sortable: true },
    { text: "Slug", value: "slug", sortable: true },
    { text: "Featured", value: "is_featured", sortable: true },
    { text: "Action", value: "actions" },
];
</script>
<template>
    <div class="flex justify-between">
        <div class="flex shrink-0 rounded overflow-hidden">
            <Link :href="route('products.create')" v-if="can(['product create'])" class="text-white flex gap-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><PlusIcon class="w-4 h-auto" />
                Add New Product
            </Link>
            <DeleteBulk v-if="itemsSelected.length != 0 && can(['product delete'])" :itemsSelected="itemsSelected"
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
        <template #empty-message>
            <EmptyAnimation></EmptyAnimation>
        </template>

        <template #item-is_featured="item">
            {{ item.is_featured?'Featured':'Not Featured' }}
        </template>

        <template #item-actions="item">
            <div class="flex w-fit rounded overflow-hidden">
                <Link v-if="can(['product update'])" :href="route('products.edit', { product: item.id })" class="inline-flex items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150">
                    <PencilIcon class="w-4 h-auto" />
                </Link>
                <Delete v-if="can(['product delete'])" :title="item.name" :item="item" @open="item = item" />
            </div>
        </template>
    </EasyDataTable>
</template>
