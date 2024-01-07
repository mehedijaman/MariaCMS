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
                <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                        {{ item.created_at }}
                    </p>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">

                        <Link :href="route('blog.posts', { slug: item.slug })" class="hover:underline">
                        {{ item.name }}

                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
