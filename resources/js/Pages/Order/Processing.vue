<script setup>
// import Create from "@/Pages/Order/Create.vue";
import Edit from "@/Pages/Order/Edit.vue";
import Delete from "@/Pages/Order/Delete.vue";
import DeleteBulk from "@/Pages/Order/DeleteBulk.vue";
import { ref, inject } from "vue";
import { formatDate } from "../../Helpers/dateHelper";
import EmptyAnimation from "../../Components/Animations/Empty.vue";

import {
    MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

const items = inject('processing');

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Name", value: "name", sortable: true },
    { text: "Email", value: "email", sortable: true },
    { text: "Phone", value: "phone", sortable: true },
    { text: "City", value: "city", sortable: true },
    { text: "State", value: "state", sortable: true },
    { text: "Country", value: "country", sortable: true },
    { text: "Action", value: "actions" },
];
</script>
<template>
    <div class="flex justify-between">
        <div class="flex shrink-0 rounded overflow-hidden">
            <DeleteBulk v-if="itemsSelected.length != 0 && can(['order delete'])" :itemsSelected="itemsSelected"
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

        <template #expand="item">
            <div>
                <strong>Address: </strong> {{ item.address }}
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-sm py-4">
                <table class="w-full text-sm text-left rtl:text-right dark:text-blue-100">
                    <thead class="text-xs  uppercase border border-slate-400 dark:text-white">
                        <tr>
                            <th scope="col" class="px-4 py-2 border-r border-slate-400">
                                Product name
                            </th>
                            <th scope="col" class="px-4 py-2 border-r border-slate-400">
                                Quantity
                            </th>
                            <th scope="col" class="px-4 py-2 border-r border-slate-400">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in item.order_products" :key="index" class="border border-slate-400 hover:bg-slate-300">
                            <th scope="row" class="px-4 py-1 font-medium  whitespace-nowrap dark:text-blue-100 border-r border-slate-400">
                                {{ item.product.name }}
                            </th>
                            <td class="px-4 py-1 border-r border-slate-400">
                                {{ item.quantity }}
                            </td>
                            <td class="px-4 py-1 border-r border-slate-400">
                                {{ item.price }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>

        <template #item-actions="item">
            <div class="flex w-fit rounded overflow-hidden">
                <Edit v-show="can(['order update'])" :title="item.name" :item="item" @open="item = item" />
                <Delete v-show="can(['order delete'])" :title="item.name" :item="item" @open="item = item" />
            </div>
        </template>
    </EasyDataTable>
</template>
