<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid';

defineProps({
    categories: Object
})

</script>
<template>
    <div class="bg-inherit">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="mb-8">
                <div class="flex gap-3  justify-center mx-auto">
                    <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                    <p class="text-2xl font-semibold">Our</p>
                </div>
                <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                    FEATURED<span class="text-red-700"> CATEGORIES</span>
                </h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div v-for="category in categories" :key="category.id" class="shadow-lg rounded-sm bg-white pb-6">
                    <img class="items-center mx-auto" :src="category.media[0].original_url" :alt="category.name">
                    <h4 class="text-center text-xl font-bold py-4 border-b-2 mb-4 text-gray-800">
                        {{ category.name }}
                    </h4>
                    <button
                        class="flex gap-2 py-2 px-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                        Read More
                        <ArrowRightIcon class="w-6 h-6"></ArrowRightIcon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
