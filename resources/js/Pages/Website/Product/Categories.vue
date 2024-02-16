<script setup>
import { Link } from '@inertiajs/vue3';

import {
    TagIcon,
    ShoppingBagIcon,
} from '@heroicons/vue/24/solid';

const props = defineProps({
    categories: Object
});
</script>
<template>
    <div class="bg-white py-4 shadow-md rounded-sm">
        <div class="">
            <h4 class="text-gray-800 font-bold text-xl py-2 border-b-2 border-gray-400 px-4 flex items-center gap-2">
                <TagIcon class="w-6 h-6 text-blue-700"></TagIcon>
                Categories
            </h4>
            <div class="px-4">
                <ul>
                    <li v-for="category in props.categories" :key="category.id" class="py-1 border-b">

                        <Link :href="route('category.products', { slug: category.slug })"
                            class="flex justify-start items-center gap-2 text-blue-700">
                        <TagIcon class="w-4 h-4 text-blue-700"></TagIcon>
                        {{ category.name }} <span class="text-gray-800 text-sm">({{ category.products_count > 0 ?
                            category.products_count : 0 }})</span>

                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div class="pt-4">
            <h4 class="text-gray-800 font-bold text-xl py-2 border-b-2 border-gray-400 px-4 flex items-center gap-2">
                <ShoppingBagIcon class="w-6 h-6 text-blue-700"></ShoppingBagIcon>
                Latest Products
            </h4>
            <div class="px-4">
                <div class="flex justify-start items-center space-x-4 border-b-2  py-2">
                    <img class="h-16 w-16 border p-2" src="/images/Picture.png" alt="">
                    <div class="">
                        <h4 class="text-lg font-semibold text-gray-700 hover:text-blue-700"><a href="">Spark of Genius</a>
                        </h4>
                        <p class="flex justify-start items-center gap-2 text-gray-400 text-sm"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            December 23, 2016</p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
