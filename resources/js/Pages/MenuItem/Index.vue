<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, reactive, watch, provide, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { formatDate } from "../../Helpers/dateHelper";
import Published from "./Published.vue";
import { Link }  from "@inertiajs/vue3";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

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
    breadcrumbs: Object,
});

const items = reactive(props.items);
const published = computed(() => items.filter(item => (item.status == true && item.deleted_at == null)));


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

provide('published', published);

provide('positions', props.positions);

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
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-2">
                <Published></Published>
            </div>
        </div>
    </AppLayout>
</template>
