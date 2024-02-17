<script setup>
import { Link } from '@inertiajs/vue3';
import { cart } from '@/data/cart';

import {
    ShoppingCartIcon
} from '@heroicons/vue/20/solid';

const props = defineProps({
    'product': Object
})
</script>
<template>
    <div class="w-full bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">

        <Link :href="route('products', { slug: props.product.slug })">
        <img class="w-full h-40"
            :src="props.product.media[0] ? props.product.media[0].original_url : props.product.placeholder_url"
            alt="product image" />

        </Link>
        <div class="px-5 pb-5">

            <Link :href="route('products', { slug: props.product.slug })">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ props.product.name }}
            </h5>

            </Link>
            <span
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {{ product.category.name }}
            </span>
            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">
                    ${{ props.product.price }} <span class="text-sm">/{{ props.product.unit }}</span>
                </span>
                <button
                    @click="cart.add(product)"
                    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">

                    <ShoppingCartIcon class="w-6 h-6"></ShoppingCartIcon>
                </button>
            </div>
            <span class="text-xs">Minimum Order: {{ props.product.min_order }} {{ props.product.unit }}</span>
        </div>
    </div>
</template>
