<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    slides: Object
})


</script>
<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden md:h-96 z-0">
            <div v-for="slide in props.slides" :key="slide.id" class="hidden duration-700 ease-in-out" data-carousel-item>
                <img :src="slide.media[0].original_url"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-0 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button v-for="slide in props.slides" type="button" class="w-3 h-3 rounded-full" aria-current="true"
                aria-label="Slide 1" data-carousel-slide-to="0"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 start-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <ChevronLeftIcon class="w-5 h-5 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"></ChevronLeftIcon>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 end-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <ChevronRightIcon class="w-5 h-5 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"></ChevronRightIcon>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>
