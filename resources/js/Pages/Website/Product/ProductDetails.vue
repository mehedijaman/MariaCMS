<script setup>
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import { ref } from "vue";
import { cart } from '@/data/cart';

const props = defineProps({
    product: Object
})

const activeImageURL = ref(props.product.media[0].original_url);
</script>
<template>
    <WebsiteLayout :title="props.product.name">
        <div class="pb-10 bg-white">

            <div class="bg-gray-100 h-16"></div>
            <div class="lg:grid grid-cols-4 gap-6 px-4 py-8">
                <div class="">
                    <div class="border p-2 rounded-lg">
                        <img class="h-full w-full max-w-full object-cover" :src="activeImageURL" alt="" />
                    </div>
                    <div class="flex gap-2 pt-4">
                        <button @click="activeImageURL = image.original_url" v-for="image in props.product.media"
                            :key="index" type="button"
                            class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                            <img class="w-16 md:w-20 h-auto cursor-pointer border-2 rounded-md  p-2"
                                :src="image.original_url" alt="" />
                        </button>
                    </div>
                </div>
                <div class="col-span-2 ">
                    <h1 class="text-xl py-3 font-bold text-gray-900">{{ props.product.name }}</h1>
                    <div class="bg-gray-100  pt-4 pb-6 rounded-md px-4">
                        <div class="flex justify-between py-3">

                            <div class="">
                                <button class="flex gap-2 font-semibold text-blue-700 hover:text-green-500">
                                     Price
                                </button>
                            </div>
                        </div>
                        <div class="md:flex gap-6 bg-white rounded-md py-4 px-2 font-bold text-red-600 md:text-xl">
                            <h2 class="">{{ props.product.price }} <sub class="text-gray-600 font-semibold">/{{
                                props.product.unit }}</sub></h2>
                            <h2 class="border-l pl-8"><sub class="text-gray-900 font-semibold">{{ props.product.min_order }}
                                    {{ props.product.unit }}<span
                                        class="text-gray-600 font-semibold">(Min.Order)</span></sub></h2>
                        </div>
                    </div>
                </div>
                <div class="pt-4">
                    <button @click="cart.add(props.product)"
                        class="flex gap-2 w-full mx-auto justify-center py-2 rounded-md px-8 border bg-blue-100 text-blue-800 ">
                        Add to Cart
                    </button>
                    <div class="border px-4 py-4 bg-gray-50 mt-4">
                        <div class="flex justify-between">
                            <img class="w-20" src="" alt="">
                            <h6>{{ $page.props.app.setting.name }}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-8">
                <h2 class="text-gray-900 font-bold text-xl pb-4 border-b-2">Description</h2>
                <p class="text-gray-600 p-5 leading-7 text-justify">
                    <span v-html="props.product.description"></span>
                </p>

            </div>
        </div>
    </WebsiteLayout>
</template>
