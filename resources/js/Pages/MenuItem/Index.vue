<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, reactive, watch, provide, computed } from "vue";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";
import Create from "./Create.vue";
import Delete from "./Delete.vue";
import Edit from "./Edit.vue";

import { Sortable } from "sortablejs-vue3";
const options = computed(() => {
    return {
        draggable: ".draggable",
        animation: 150,
        ghostClass: "ghost",
        dragClass: "drag",
        group: "testgroup",
        scroll: true,
        forceFallback: true,
        bubbleScroll: true,
    };
});

import {
    ChevronRightIcon,
} from "@heroicons/vue/24/outline";



const props = defineProps({
    title: String,
    menu: Object,
    items: Object,
    pages: Object,
    categories: Object,
    posts: Object,
    breadcrumbs: Object,
});

const items = reactive(props.items);
const pages = props.pages;
const categories = props.categories;
const menu = props.menu;

// Method to update an item in the array based on its ID
const updateItems = (updatedItems) => {
    items.length = 0;
    updatedItems.forEach(item => items.push(item));
};

provide('items', items);
provide('menu', menu);
provide('updateItems', updateItems);
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>

        <Breadcrumb :breadcrumbs="props.breadcrumbs" />

        <div class="py-4">
            <div class="max-w-7xl sm:px-6 lg:px-4 grid grid-cols-5 gap-2">
                <div class="col-span-2 bg-white rounded-sm p-2 h-fit">
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button"
                                class="flex items-center justify-between w-full p-2 font-semibold rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-sm focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#custom-links" aria-expanded="true" aria-controls="custom-links">
                                <span>Custom Links</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="custom-links" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <Create v-if="can(['menu create'])" />
                            </div>
                        </div>

                        <!-- <h2 id="accordion-collapse-heading-2">
                            <button type="button"
                                class="flex items-center justify-between w-full p-2 font-semibold rtl:text-right text-gray-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#pages" aria-expanded="false" aria-controls="pages">
                                <span>Pages</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="pages" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <ul>
                                    <li v-for="(page, index) in pages" :key="index">{{ page.name }}</li>
                                </ul>
                            </div>
                        </div> -->

                        <!-- <h2 id="accordion-collapse-heading-3">
                            <button type="button"
                                class="flex items-center justify-between w-full p-2 font-semibold rtl:text-right text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#categories" aria-expanded="false" aria-controls="categories">
                                <span>Categories</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="categories" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                <ul>
                                    <li v-for="(category, index) in categories" :key="index">{{ category.name }}</li>
                                </ul>
                            </div>
                        </div> -->
                    </div>
                </div>

                <!-- Items -->
                <div class="col-span-3 bg-white rounded-sm border-[1px] border-slate-400 h-fit">
                    <div class="h-12 p-3 bg-slate-300 border-b-[1px] border-slate-400">
                        <h2 class="font-semibold text-gray-700">{{ menu.name }} Items</h2>
                    </div>
                    <div class="p-4">
                        <Sortable :list="items" :itemKey="items.id" :options="options" @end="(event) => console.log(event)">
                            <template #item="{ element, index }" tag="ul">
                                <div class="draggable" :key="element.id">
                                    <li
                                        class="p-2 bg-slate-100 rounded-sm border-slate-300 hover:border-slate-800 border-[1px] list-none mb-2 cursor-grabbing flex justify-between items-center">
                                        <div>
                                            <ChevronRightIcon class="inline w-4 h-4"></ChevronRightIcon>
                                            {{ element.name }}
                                        </div>
                                        <div class="flex w-fit rounded overflow-hidden">
                                            <Edit v-if="can(['menu item update'])" :title="element.name" :item="element"
                                                @open="element = element" />
                                            <Delete v-if="can(['menu item delete'])" :title="element.name" :item="element"
                                                @open="element = element" />
                                        </div>
                                    </li>
                                </div>
                            </template>
                        </Sortable>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
