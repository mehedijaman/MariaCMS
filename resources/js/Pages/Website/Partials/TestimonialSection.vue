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
    </div>
</template>
