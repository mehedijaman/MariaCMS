<script setup>
import { Link } from '@inertiajs/vue3';
import TestimonialCard from './TestimonialCard.vue';
const props = defineProps({
    testimonials: Object
})
</script>

<template>
    <section  class="bg-white dark:bg-gray-900 my-4 shadow-md">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Testimonials</h2>
                <!-- <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Unveiling the
                                authentic
                                voices of satisfaction and success as shared by those who have experienced our exceptional
                                service
                                firsthand.</p> -->
            </div>
            <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                <TestimonialCard v-for="testimonial in props.testimonials" :key="testimonial.id"
                    :testimonial="testimonial">
                </TestimonialCard>
            </div>
            <div class="text-center">

                <Link :href="route('testimonials.view')"
                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Show all Testimonials

                </Link>
            </div>
        </div>
    </section>
</template>
