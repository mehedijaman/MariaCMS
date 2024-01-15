<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, reactive, watch, provide, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { formatDate } from "../../Helpers/dateHelper";
import Published from "./Published.vue";
import { Link } from "@inertiajs/vue3";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";
import Create from "./Create.vue";

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
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
const posts = props.posts;
const menu = props.menu;

// Method to add an item to the array
const addItem = (newItem) => {
    items.push(newItem);
};

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

// Method to update an item in the array based on its ID
const updateItem = (id, updatedData) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === id);
    // Update the item if found
    if (index !== -1) {
        items[index].name = updatedData.name;
        items[index].position = updatedData.position;
        items[index].status = updatedData.status;
    }
};

provide('items', items);
provide('menu', menu);


provide('addItem', addItem);
provide('removeItem', removeItem);
provide('removeBulkItems', removeBulkItems);
provide('updateItem', updateItem);
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
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button"
                                class="flex items-center justify-between w-full p-2 font-semibold rtl:text-right text-gray-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#pages" aria-expanded="false"
                                aria-controls="pages">
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
                        </div>

                        <h2 id="accordion-collapse-heading-1">
                            <button type="button"
                                class="flex items-center justify-between w-full p-2 font-semibold rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-sm focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#custom-links" aria-expanded="false"
                                aria-controls="custom-links">
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

                        <h2 id="accordion-collapse-heading-3">
                            <button type="button"
                                class="flex items-center justify-between w-full p-2 font-semibold rtl:text-right text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#categories" aria-expanded="false"
                                aria-controls="categories">
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
                        </div>
                    </div>
                </div>
                <div class="col-span-3 bg-white rounded-sm border-[1px] border-slate-400 h-fit">
                    <div class="h-12 p-3 bg-slate-300 border-b-[1px] border-slate-400">
                        <h2 class="font-semibold text-gray-700">{{ menu.name }} Items</h2>
                    </div>
                    <div class="p-4">
                        <ul>
                            <li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
