<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps,reactive, provide, computed } from "vue";
import Read from "./Read.vue";
import Unread from './Unread.vue';
import Spam from './Spam.vue';
import { Link }  from "@inertiajs/vue3";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    ExclamationTriangleIcon,
    EnvelopeIcon,
    EnvelopeOpenIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    messages: Object,
    breadcrumbs: Object,
});

const items = reactive(props.messages);
const read = computed(() => items.filter(item => (item.status == true && item.deleted_at == null)));
const unread = computed(() => items.filter(item => (item.status == false && item.deleted_at == null)));
const spam = computed(() => items.filter(item => (item.status == null && item.deleted_at == null)));


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
        items[index].status = updatedData.status;
    }
};

provide('read', read);
provide('unread', unread);
provide('spam', spam);

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
        <Breadcrumb :breadcrumbs="props.breadcrumbs"/>

        <div class="py-4">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded">
                    <div class="border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                            data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="unread-tab" data-tabs-target="#unread" type="button" role="tab"
                                    aria-controls="unread" aria-selected="false">
                                    <EnvelopeIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </EnvelopeIcon  >
                                    Unread
                                </button>
                            </li>

                            <li class="me-2" role="presentation">
                                <button class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg" id="read-tab"
                                    data-tabs-target="#read" type="button" role="tab" aria-controls="read"
                                    aria-selected="false">
                                    <EnvelopeOpenIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </EnvelopeOpenIcon>
                                    Read
                                </button>
                            </li>

                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="spam-tab" data-tabs-target="#spam" type="button" role="tab" aria-controls="spam"
                                    aria-selected="false">
                                    <ExclamationTriangleIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </ExclamationTriangleIcon>
                                    Spam
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <Link
                                    :href="route('messages.trash')"
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
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unread" role="tabpanel"
                            aria-labelledby="unread-tab">
                            <Unread></Unread>
                        </div>

                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="read" role="tabpanel"
                            aria-labelledby="read-tab">
                            <Read></Read>
                        </div>

                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="spam" role="tabpanel"
                            aria-labelledby="spam-tab">
                            <Spam></Spam>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="trash" role="tabpanel"
                            aria-labelledby="trash-tab">
                            <!-- <Trash></Trash> -->
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </AppLayout>
</template>
