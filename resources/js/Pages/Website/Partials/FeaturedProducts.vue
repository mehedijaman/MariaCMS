<script setup>
import ProductCard from './ProductCard.vue';
const props = defineProps({
    'products': Object
})
</script>
<template>
    <section class="bg-white dark:bg-gray-900 p-4">
        <div class="text-center mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Featured products
            </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-4">
            <ProductCard v-for="product in props.products" :key="product.id" :product="product"></ProductCard>
        </div>
    </section>
</template>
