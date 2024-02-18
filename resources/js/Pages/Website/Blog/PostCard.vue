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
    <div class="bg-white pb-4 rounded-sm shadow-lg mb-2">
        <img class="w-full h-48" :src="props.post.media[0]?props.post.media[0].original_url:''" :alt="props.post.name">
        <div class="px-4">
            <div class="flex gap-2 py-3">
                <span v-for="category in props.post.categories" :key="category.id"
                    class="bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">

                    <Link :href="route('blog.category.posts', { slug: category.slug })">{{ category.name }}

                    </Link>
                </span>
            </div>
            <h2 class="text-base font-bold py-3">
                {{ props.post.name }}
            </h2>
            <h6 class="flex justify-start items-center space-x-2 text-sm text-gray-500 pb-1"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <span>{{ props.post.created_at }}</span>
            </h6>
            <h6 class="flex justify-start items-center space-x-2 text-sm text-gray-500">
                <img class="w-4 h-4" :src="props.post.author.profile_photo_url" :alt="props.post.author.name">
                <span>{{ props.post.author.name }}</span>
            </h6>
            <p class="py-4 text-gray-600 text-justify text-sm">
                {{ props.post.excerpt }}
            </p>

            <Link :href="route('blog.posts', { slug: props.post.slug })"
            class="flex gap-2 py-1.5 px-3 border bg-yellow-400 rounded-md hover:bg-yellow-500 text-gray-200">
            Read More
            <ArrowRightIcon class="w-8 h-6"></ArrowRightIcon>

            </Link>
        </div>
    </div>
</template>
