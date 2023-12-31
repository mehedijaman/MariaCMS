<script setup>
import Create from "@/Pages/Message/Create.vue";
import Edit from "@/Pages/Message/Edit.vue";
import Delete from "@/Pages/Message/Delete.vue";
import DeleteBulk from "@/Pages/Message/DeleteBulk.vue";
import { ref, inject } from "vue";
import EmptyAnimation from "../../Components/Animations/Empty.vue";

import {
    MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

const items = inject('spam');

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Name", value: "name", sortable: true },
    { text: "Email", value: "email", sortable: true },
    { text: "Phone", value: "phone", sortable: true },
    { text: "Subject", value: "subject", sortable: true },
    { text: "Action", value: "actions" },
];
</script>
<template>
    <div class="flex justify-between">
        <div class="flex shrink-0 rounded overflow-hidden">
            <!-- <Create v-if="can(['message create'])" /> -->
            <DeleteBulk v-if="itemsSelected.length != 0 && can(['message delete'])" :itemsSelected="itemsSelected"
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

        <template #expand="item" v-if="can(['message read'])">
            <div>
                <strong>Message: </strong> {{ item.message }}
            </div>
        </template>
        <template #empty-message>
            <EmptyAnimation></EmptyAnimation>
        </template>
        <template #item-actions="item">
            <div class="flex w-fit rounded overflow-hidden">
                <!-- <Show v-if="can(['message read'])" :title="item.name" :item="item" @open="item = item" /> -->
                <Edit v-show="can(['message update'])" :title="item.name" :item="item" @open="item = item" />
                <Delete v-show="can(['message delete'])" :title="item.name" :item="item" @open="item = item" />
            </div>
        </template>
    </EasyDataTable>
</template>
