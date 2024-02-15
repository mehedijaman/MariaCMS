<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    hero: Object
})
</script>
<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="flex gap-3  justify-center mb-6">
                <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                <p class="text-2xl font-semibold">About</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-1 md:col-span-2">
                    <h3
                        class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white">
                        {{ props.hero?.title }}
                    </h3>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8  dark:text-gray-400">
                        {{ props.hero?.description }}
                    </p>
                    <a v-if="props.hero?.button_text" :href="props.hero?.button_url" :target="props.hero?.button_target" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        {{ props.hero?.button_text }}
                    </a>
                </div>
                <img :src="props.hero?props.hero.full_path_image:'https://picsum.photos/seed/picsum/580/520'" class="col-span-1 rounded-sm shadow-lg w-auto h-auto" alt="Hero Image">

            </div>
        </div>
    </div>
</template>
