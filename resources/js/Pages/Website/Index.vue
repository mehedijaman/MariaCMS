<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Hero from './Partials/Hero.vue';
import Home from "./Partials/Home.vue";
import Slider from './Partials/Slider.vue';
import FAQ from "./Partials/FAQ.vue";
import LatestPosts from "./Partials/LatestPosts.vue";
import Feature from "./Partials/Feature.vue";
import CTA from "./Partials/CTA.vue";
import News from "./Partials/News.vue";
import { Link } from "@inertiajs/vue3";
import FeaturedProducts from "./Product/FeaturedProducts.vue";
import TestimonialSection from "./Partials/TestimonialSection.vue";

const props = defineProps({
    title: String,
    data: Object
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <Slider v-if="$page.props.app.setting.slider_enabled && props.data.slider" :slides="props.data.slider.items"></Slider>
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <Hero v-if="$page.props.app.setting.hero_enabled" :hero="props.data.hero"></Hero>
            <Home v-if="$page.props.app.setting.homepage_enabled" :homepage="props.data.homepage"></Home>
            <Feature v-if="$page.props.app.setting.feature_enabled" :features="props.data.features"></Feature>
            <CTA v-if="$page.props.app.setting.cta_enabled" :cta="props.data.cta"></CTA>

            <FeaturedProducts v-if="$page.props.app.setting.featured_product_enabled" :products="props.data.featured_products"></FeaturedProducts>


            <div class="max-w-7xl mx-auto w-full shadow-md">
                <div class="grid grid-cols-2">
                    <FAQ v-if="$page.props.app.setting.faq_enabled" :faqs="props.data.faqs"></FAQ>
                    <News v-if="$page.props.app.setting.news_enabled" :news="props.data.news"></News>
                </div>
            </div>
            <LatestPosts v-if="$page.props.app.setting.blog_enabled" :posts="props.data.latest_posts"></LatestPosts>
            <TestimonialSection v-if="$page.props.app.setting.testimonial_enabled" :testimonials="props.data.testimonials"></TestimonialSection>
        </section>
    </WebsiteLayout>
</template>
