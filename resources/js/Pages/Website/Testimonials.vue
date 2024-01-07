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
                class="grid grid-cols-1 text-center gap-4 py-8 m-auto px-4 sm:px-6 lg:px-8">
                <section class="bg-white dark:bg-gray-900 my-4">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                        <div class="mx-auto max-w-screen-sm">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Testimonials</h2>
                            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Unveiling the
                                authentic
                                voices of satisfaction and success as shared by those who have experienced our exceptional
                                service
                                firsthand.</p>
                        </div>
                        <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                            <TestimonialCard v-for="testimonial in props.testimonials" :key="testimonial.id"
                                :testimonial="testimonial">
                            </TestimonialCard>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
