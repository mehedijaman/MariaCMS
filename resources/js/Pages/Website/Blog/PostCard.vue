<script setup>
import { Link } from '@inertiajs/vue3';
import {
    ArrowRightIcon
} from '@heroicons/vue/20/solid';

const props = defineProps({
    post: Object
});

</script>
<template>
    <article class="p-6 mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-5 text-gray-500">
           <div class="flex items-center space-x-2">
            <span v-for="category in props.post.categories" :key="category.id" class="bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <Link :href="route('blog.category.posts', {slug: category.slug})">{{ category.name }}</Link>
            </span>
           </div>

            <span class="text-sm">{{ props.post.created_at }}</span>
        </div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

            <Link :href="route('blog.posts', { slug: props.post.slug })">
            {{ props.post.name }}

            </Link>
        </h2>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
            {{ props.post.excerpt }}
        </p>
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <img class="w-7 h-7 rounded-full"
                    :src="props.post.author.profile_photo_url"
                    alt="Bonnie Green avatar" />
                <span class="font-medium dark:text-white">
                    {{ props.post.author.name }}
                </span>
            </div>

            <Link :href="route('blog.posts', { slug: props.post.slug })"
                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            Read more
            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>

            </Link>
        </div>
    </article>
</template>
