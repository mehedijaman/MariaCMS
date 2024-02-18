<script setup>
import { ChevronRightIcon, CubeIcon } from "@heroicons/vue/24/outline";
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";
defineProps({
    breadcrumbs: {
        type: Object,
    },
});
</script>

<template>
        <div class="max-w-7xl mx-auto sm:px-2 lg:px-4 lg:pt-2">
            <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <Link :href="route('dashboard')"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <CubeIcon class="w-3 h-3 me-2.5"></CubeIcon>
                            Dashboard
                        </Link>
                    </li>
                    <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                        <div class="flex items-center">
                            <ChevronRightIcon class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " />

                            <Link :href="breadcrumb.href"
                                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                            {{ breadcrumb.label }}

                            </Link>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
</template>
