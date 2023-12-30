<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';

</script>
<template>
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">

            <Link :href="route('index')" class="shrink-0 flex w-full justify-center items-center space-x-4">
            <ApplicationLogo class="block h-8 w-auto" />
            <p class="text-lg font-semibold uppercase tracking-widest">
                {{ $page.props.app.setting.name }}
            </p>

            </Link>
            <p class="my-6 text-gray-500 dark:text-gray-400"><span v-html="$page.props.app.setting.footer"></span></p>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <span class="inline-flex">
                    <a class="text-gray-500" :href="$page.props.app.setting.facebook" target="_blank">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a class="ml-4 text-gray-500" :href="$page.props.app.setting.twitter" target="_blank">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a class="ml-4 text-gray-500" :href="$page.props.app.setting.instagram" target="_blank">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-4 text-gray-500" :href="$page.props.app.setting.whatsapp" target="_blank">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                            </path>
                        </svg>
                    </a>
                </span>
            </ul>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2023-{{ new Date().getFullYear() }}. {{ $page.props.app.setting.name }}. All Rights Reserved.
            Development & Maintenance by - <a class="text-primary font-semibold" target="_blank"
                href="https://gtechservice.net">gTechService</a></span>
    </div>
</footer></template>
