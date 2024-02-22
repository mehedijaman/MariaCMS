<script setup>
import { Link } from '@inertiajs/vue3';
import TestimonialCard from './TestimonialCard.vue';
const props = defineProps({
    testimonials: Object
})
</script>

<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 py-12 bg-white">
            <div class="flex gap-3  justify-center mx-auto">
                <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                <p class="text-xl text-gray-400 font-semibold">OPINIONS</p>
            </div>
            <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                CLIENT <span class="text-red-700">TESTIMONIALS</span>
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard v-for="testimonial in props.testimonials" :key="testimonial.id" :testimonial="testimonial">
                </TestimonialCard>
            </div>
            <div class="text-center pt-4">

                <Link :href="route('testimonials.view')"
                    class="px-4 py-2 font-semibold bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                Show all Testimonials

                </Link>
            </div>
        </div>
    </div>
</template>
