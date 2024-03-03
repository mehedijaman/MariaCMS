<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps,reactive, provide, computed } from "vue";
import Published from "./Published.vue";
import Unpublished from './Unpublished.vue';
import Draft from './Draft.vue';
import { Link }  from "@inertiajs/vue3";
import Breadcrumb from "@/Layouts/Authenticated/Breadcrumb.vue";

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    slider:Object,
    slider_items: Object,
    breadcrumbs: Object,
});

const items = reactive(props.slider_items);
const published = computed(() => items.filter(item => (item.status == true && item.deleted_at == null)));
const unpublished = computed(() => items.filter(item => (item.status == false && item.deleted_at == null)));
const draft = computed(() => items.filter(item => (item.status == null && item.deleted_at == null)));


const updateItems = (updatedItems) => {
    items.length = 0;
    updatedItems.forEach(item => items.push(item));
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

provide('slider', props.slider);
provide('published', published);
provide('unpublished', unpublished);
provide('draft', draft);

provide('updateItems', updateItems);
provide('removeItem', removeItem);
provide('removeBulkItems', removeBulkItems);
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs"/>

        <div class="py-4">
            <div class="max-w-7xl mx-auto sm:px-4 lg:px-4 space-y-4">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded">
                    <div class="border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                            data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg" id="published-tab"
                                    data-tabs-target="#published" type="button" role="tab" aria-controls="published"
                                    aria-selected="false">
                                    <BookOpenIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BookOpenIcon>
                                    Published
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="unpublished-tab" data-tabs-target="#unpublished" type="button" role="tab"
                                    aria-controls="unpublished" aria-selected="false">
                                    <BookmarkSlashIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BookmarkSlashIcon>
                                    Unpublished
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="draft-tab" data-tabs-target="#draft" type="button" role="tab" aria-controls="draft"
                                    aria-selected="false">
                                    <BriefcaseIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BriefcaseIcon>
                                    Draft
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <Link
                                    :href="route('slider.items.trash', {slider: props.slider.id})"
                                    class="inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600  hover:border-gray-300 dark:hover:text-gray-300"
                                    type="button">
                                    <TrashIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </TrashIcon>
                                    Trash
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="published" role="tabpanel"
                            aria-labelledby="published-tab">
                            <Published></Published>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unpublished" role="tabpanel"
                            aria-labelledby="unpublished-tab">
                            <Unpublished></Unpublished>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="draft" role="tabpanel"
                            aria-labelledby="draft-tab">
                            <Draft></Draft>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
