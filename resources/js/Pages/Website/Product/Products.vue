<script setup>
import ProductCard from '@/Pages/Website/Product/ProductCard.vue';
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import Categories from './Categories.vue';

const props = defineProps({
    title: String,
    products: Object,
    categories: Object,
})
</script>
<template>
    <WebsiteLayout :title="props.title">
        <div class="bg-inherit">
            <div class="max-w-7xl mx-auto px-4 py-10">
                <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                    OUR <span class="text-red-700">PRODUCTS</span>
                </h1>
                <p class="md:w-96 h-0.5 bg-red-600 justify-center mx-auto"></p>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 ">
                    <div class="col-span-1">
                        <Categories :categories="props.categories"></Categories>
                    </div>

                    <div class="col-span-1 md:col-span-3">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ProductCard v-for="product in props.products.data" key="product.id" :product="product">
                            </ProductCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </WebsiteLayout>
</template>
