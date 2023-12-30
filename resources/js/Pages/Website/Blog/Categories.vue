<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    categories: Object
});
</script>
<template>
    <ul v-for="category in props.categories" :key="category.id" class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <Link :href="route('blog.category.posts', {slug: category.slug})">{{ category.name }} </Link>
        </li>
    </ul>
</template>
