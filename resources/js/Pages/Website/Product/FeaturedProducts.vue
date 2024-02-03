<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';
import ProductCard from './ProductCard.vue';
import { Link } from '@inertiajs/vue3';
import { ShoppingCartIcon } from '@heroicons/vue/20/solid';
const props = defineProps({
    'products': Object
})
</script>
<template>
    <section class="bg-white dark:bg-gray-900 py-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col gap-8">
        <div class="text-center">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                <ShoppingBagIcon class="inline-block h-8 w-8"></ShoppingBagIcon>
                Featured products
            </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-4">
            <ProductCard v-for="product in props.products" :key="product.id" :product="product"></ProductCard>
        </div>

        <div class="text-center">
            <Link :href="route('products')"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            View Products

            </Link>
        </div>
    </section>
</template>
