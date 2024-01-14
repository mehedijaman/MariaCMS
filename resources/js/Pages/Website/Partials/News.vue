<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    news: Object,
})
</script>
<template>
    <div class="bg-white dark:bg-slate-800 p-4 mt-2">
        <h3 class="p-4 text-2xl font-semibold">Latest News</h3>
        <div class="flow-root max-w-3xl mx-auto">
            <div v-for="item in news" :key="item.id" class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                <div class="flex flex-col gap-2 py-4 sm:gap-2  sm:items-left">

                    <h3 class="text-md font-semibold text-gray-900 dark:text-white">
                        <Link :href="route('blog.posts', { slug: item.slug })" class="hover:underline">
                        {{ item.name }}
                        </Link>
                    </h3>
                    <p class=" text-sm font-normal text-gray-500 sm:text-left dark:text-gray-400">
                        {{ item.created_at }}
                    </p>
                    <p>{{ item.excerpt }} </p>
                </div>

            </div>
        </div>
    </div>
</template>
