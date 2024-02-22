<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    testimonial: Object
})
</script>
<template>
    <div
        class="flex flex-col rounded-sm p-8 justify-center items-center text-center bg-gray-50 border-b border-gray-200 border-r text-gray-500 shadow-md mb-4">
        <img v-if="props.testimonial.media[0]" class="w-32 h-32 rounded-full " :src="props.testimonial.media[0].original_url" :alt="props.testimonial.name">
        <div class="flex items-center mx-auto py-4 pb-4">
            <StarIcon v-for="index in Array.from({ length: props.testimonial.rating })" :key="index"
                class="w-8 h-8 text-yellow-300 ms-1"></StarIcon>
        </div>
        <p class="text-justify text-gray-500 h-auto text-sm">
            {{ props.testimonial.description }}
        </p>
        <h6 class="pt-6 pb-2 text-gray-700 font-bold">{{ props.testimonial.name }}</h6>
        <p class="text-sm font-light text-gray-500">{{ props.testimonial.designation }} at {{
            props.testimonial.company }}</p>
    </div>
</template>
