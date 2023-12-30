<script setup>
import { Link } from '@inertiajs/vue3';
import {
    ChevronRightIcon
} from '@heroicons/vue/20/solid'
const props = defineProps({
    categories: Object
});
</script>
<template>
    <ul v-for="category in props.categories" :key="category.id" class="w-full text-sm font-medium text-gray-900 bg-white border-bottom-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-sm">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex gap-2 items-center">
            <ChevronRightIcon class="h-4 w-4"></ChevronRightIcon>
            <Link :href="route('blog.category.posts', {slug: category.slug})">{{ category.name }} </Link>
        </li>
    </ul>
</template>
