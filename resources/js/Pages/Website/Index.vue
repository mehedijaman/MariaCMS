<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Hero from './Partials/Hero.vue';
import Home from "./Partials/Home.vue";
import Slider from './Partials/Slider.vue';
import FAQ from "./Partials/FAQ.vue";
import TestimonialCard from "./Partials/TestimonialCard.vue";
import LatestPosts from "./Partials/LatestPosts.vue";
import Feature from "./Partials/Feature.vue";
import CTA from "./Partials/CTA.vue";
import News from "./Partials/News.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    title: String,
    faqs: Object,
    slider: Object,
    homepage: Object,
    latest_posts: Object,
    testimonials: Object
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <Slider v-if="$page.props.app.setting.slider_enabled" :slides="props.slider.items"></Slider>
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <Hero v-if="$page.props.app.setting.hero_enabled"></Hero>
            <Home v-if="props.homepage" :homepage="props.homepage"></Home>
            <Feature v-if="$page.props.app.setting.feature_enabled"></Feature>
            <CTA v-if="$page.props.app.setting.cta_enabled"></CTA>
            <div class="max-w-7xl mx-auto w-full">
                <div class="grid grid-cols-2">
                    <FAQ v-if="$page.props.app.setting.faq_enabled" :faqs="props.faqs"></FAQ>
                    <News v-if="$page.props.app.setting.news_enabled" :news="props.news"></News>
                </div>

                <section v-if="$page.props.app.setting.testimonial_enabled" class="bg-white dark:bg-gray-900 my-4">
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
                        <div class="text-center">

                            <Link :href="route('testimonials.view')"
                                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Show
                            more...

                            </Link>
                        </div>
                    </div>
                </section>
                <LatestPosts v-if="$page.props.app.setting.blog_enabled" :posts="props.latest_posts"></LatestPosts>
            </div>
    </section>
</WebsiteLayout></template>
