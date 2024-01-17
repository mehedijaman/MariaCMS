<script setup>
import { Link } from '@inertiajs/vue3';

import {
    ArrowRightIcon
} from '@heroicons/vue/20/solid';

const props = defineProps({
    'product': Object
})
</script>
<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link :href="route('products', {slug: props.product.slug})">
            <img class="rounded-t-lg w-full h-36" :src="props.product.media[0]?props.product.media[0].original_url:props.product.placeholder_url" alt="" />
        </Link>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ props.product.name }}
                </h5>
            </a>
            <Link :href="route('products', {slug: props.product.slug})"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Details
                <ArrowRightIcon class="rtl:rotate-180 w-3.5 h-3.5 ms-2"></ArrowRightIcon>
            </Link>
        </div>
    </div>
</template>
