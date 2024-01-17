<script setup>
import ProductCard from '@/Pages/Website/Product/ProductCard.vue';
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    title: String,
    products: Object,
    categories: Object,
})
</script>
<template>
    <WebsiteLayout :title="props.title">
        <section class="border-b container grid grid-cols-4 gap-4 lg:py-32 max-w-screen mx-auto py-5">
            <div class="border-b pb-5 col-span-1">
                <p class="font-medium mb-3">Categories</p>
                <div v-for="category in props.categories" :key="category.id" class="flex justify-between w-full">
                    <div class="flex items-center justify-center">
                        <input type="checkbox">

                        <Link :href="route('category.products', { slug: category.slug })" class="ml-4">
                        {{ category.name }}

                        </Link>
                    </div>
                    <div>
                        <p class="text-gray-500">({{ category.products_count }})</p>
                    </div>
                </div>
            </div>

            <div class="col-span-3">
                <p class="font-medium mb-3">Products</p>
                <div class="flex gap-4">
                    <ProductCard v-for="product in props.products.data" key="product.id" :product="product"></ProductCard>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
