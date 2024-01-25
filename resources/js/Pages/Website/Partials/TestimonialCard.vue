<script setup>
import {StarIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    testimonial: Object
})
</script>
<template>
    <section
        class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
        <div class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            <div class="flex gap-2 justify-center">
                <StarIcon v-for="index in Array.from({ length: props.testimonial.rating })" :key="index" class="w-6 h-6 text-yellow-400"></StarIcon>
            </div>
            {{ props.testimonial.description }}
        </div>
        <div class="flex justify-center items-center space-x-3">
            <img v-if="props.testimonial.media[0]" class="w-9 h-9 rounded-full"
                :src="props.testimonial.media[0].original_url" alt="profile picture">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>{{ props.testimonial.name }}</div>
                <div class="text-sm font-light text-gray-500 dark:text-gray-400">{{ props.testimonial.designation }} at {{
                    props.testimonial.company }}</div>
            </div>
        </div>
    </section>
</template>
