<script setup>
import { Link } from '@inertiajs/vue3';
import TestimonialCard from './TestimonialCard.vue';
const props = defineProps({
    testimonials: Object
})
</script>

<template>
    <div class="mx-auto max-w-7xl mt-8 pt-20 pb-16 bg-white">
        <h1 class="text-4xl font-bold text-gray-900 text-center pb-6">Testimonials</h1>
        <div class="lg:grid grid-cols-3 gap-6 px-6 py-6">
            <TestimonialCard v-for="testimonial in props.testimonials" :key="testimonial.id" :testimonial="testimonial">
            </TestimonialCard>
        </div>
        <div class="text-center pt-5">
            <Link :href="route('testimonials.view')"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            View All
            </Link>
        </div>
    </div>
</template>
