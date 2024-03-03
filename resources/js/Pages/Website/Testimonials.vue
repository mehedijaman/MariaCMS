<script setup>
import TestimonialCard from './Partials/TestimonialCard.vue';
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";

const props = defineProps({
    testimonials: Object,
    title: String,
})
</script>

<template>
    <WebsiteLayout :title="title">
        <section class="min-h-[calc(100vh)] bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="grid grid-cols-1 text-center gap-4 m-auto px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-7xl pt-20 pb-16 bg-white">
                    <div class="mb-20 text-center">
                        <div class="flex gap-3  justify-center mx-auto">
                            <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                            <p class="text-2xl font-semibold">What our clients say</p>
                        </div>
                        <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                            Testimonials
                        </h1>
                        <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Unveiling the authentic voices of satisfaction and success as shared by those who have
                            experienced our exceptional service firsthand.
                        </p>
                    </div>

                    <div class="lg:grid grid-cols-3 gap-6 px-6 py-6">
                        <TestimonialCard v-for="testimonial in props.testimonials" :key="testimonial.id"
                            :testimonial="testimonial">
                        </TestimonialCard>
                    </div>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
