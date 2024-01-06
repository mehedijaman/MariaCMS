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
    <div
        class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <span
            class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-md dark:bg-gray-800 dark:border-gray-600">
            Categories
        </span>

        <Link v-for="category in props.categories" :key="category.id"
            :href="route('blog.category.posts', { slug: category.slug })"
            class="w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white flex gap-2 items-center">
        <ChevronRightIcon class="h-4 w-4"></ChevronRightIcon>
        {{ category.name }}
        </Link>
    </div>
</template>
