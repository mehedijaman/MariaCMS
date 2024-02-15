<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    news: Object,
    events: Object,
})

import {
    ArrowRightIcon
} from '@heroicons/vue/24/solid'
</script>
<template>
    <!-- <div class="bg-white dark:bg-slate-800 p-4 mt-2">
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
    </div> -->

    <div clsss="bg-inherit">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-if="$page.props.app.setting.is_event">
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        LATEST <span class="text-red-600">EVENTS</span>
                    </h1>
                    <div class="flex flex-col gap-1">
                        <div  v-for="item in events" :key="item.id" class="flex justify-start items-center bg-gray-50 rounded-sm border-y-2 border-gray-400">
                            <div class=" px-4 text-gray-500 text-center py-2">
                                <p class="font-semibold text-base">Feb</p>
                                <p class="text-yellow-300 text-2xl font-bold">05</p>
                                <p class="font-semibold  text-base">2024</p>
                            </div>
                            <div class="px-2 ">
                                <h5 class="text-gray-600 font-semibold md:text-base">
                                    {{ item.name }}
                                </h5>
                                <p class="text-sm font-light text-gray-500 md:py-1">Organizer: <span>Lorem ipsum
                                        dolor
                                        sit
                                        amet.</span></p>
                                <p class="flex justify-start items-center text-gray-400 font-light text-sm"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    103 BIDC Road Khalishpur, Khulna</p>
                            </div>
                        </div>
                        <button
                            class="flex gap-2 items-center py-2 px-4 mt-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-white">
                            View All
                            <ArrowRightIcon class="w-6 h-5"></ArrowRightIcon>
                        </button>
                    </div>
                </div>

                <div v-if="$page.props.app.setting.is_news">
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        LATEST <span class="text-red-600">NEWS</span>
                    </h1>
                    <div class="flex flex-col gap-1">
                        <div v-for="item in news" :key="item.id"
                            class="flex justify-start items-center bg-gray-50 shadow-md rounded-sm border-2 border-gray-400">
                            <div class=" px-6 text-gray-500 bg-[#253b80] text-center py-2">
                                <p class="font-semibold text-gray-300 text-base">Feb</p>
                                <p class="text-yellow-300 text-2xl font-bold">05</p>
                                <p class="font-semibold text-gray-300  text-base">2024</p>
                            </div>
                            <div class="px-2">
                                <h5 class="text-gray-600 font-semibold text-base">
                                    {{ item.name }}
                                </h5>
                            </div>
                        </div>
                        <Link href="/"
                            class="flex gap-2 items-center py-2 px-4 mt-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-white">
                            View All
                            <ArrowRightIcon class="w-6 h-5"></ArrowRightIcon>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
