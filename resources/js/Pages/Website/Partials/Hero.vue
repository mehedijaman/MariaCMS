<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    hero: Object
})
</script>
<template>
    <section class="bg-white shadow-lg dark:bg-gray-900 w-full mx-auto max-w-screen-xl px-4 sm:py-8 lg:px-6 my-4">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h3
                    class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white">
                    {{ props.hero.title }}
                </h3>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8  dark:text-gray-400">
                    {{ props.hero.description }}
                </p>
                <a :href="props.hero.button_url" :target="props.hero.button_target" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {{ props.hero.button_text }}
                </a>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex ">
                <img :src="props.hero.full_path_image" class="shadow-lg" alt="Hero Image">
            </div>
        </div>
    </section>
</template>
