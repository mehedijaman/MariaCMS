<script setup>
import { onMounted } from "vue";
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
import FeaturedCategories from "./Partials/FeaturedCategories.vue";
import TestimonialSection from "./Partials/TestimonialSection.vue";

const props = defineProps({
    title: String,
    data: Object
});

onMounted(() => {
    initFlowbite();
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <Slider v-if="$page.props.app.setting.is_slider && props.data.slider" :slides="props.data.slider.items"></Slider>
        <Hero v-if="$page.props.app.setting.is_hero" :hero="props.data.hero"></Hero>
        <Home v-if="$page.props.app.setting.is_hombepage" :homepage="props.data.homepage"></Home>
        <CTA v-if="$page.props.app.setting.is_cta" :cta="props.data.cta"></CTA>
        <FeaturedCategories v-if="$page.props.app.setting.is_featured_product" :products="props.data.featured_products"></FeaturedCategories>
        <FAQ v-if="$page.props.app.setting.is_faq" :faqs="props.data.faqs"></FAQ>
        <LatestPosts v-if="$page.props.app.setting.is_blog" :posts="props.data.latest_posts"></LatestPosts>
        <News v-if="$page.props.app.setting.is_news" :news="props.data.news"></News>
        <TestimonialSection v-if="$page.props.app.setting.is_testimonial" :testimonials="props.data.testimonials"></TestimonialSection>
        <Feature v-if="$page.props.app.setting.is_feature" :features="props.data.features"></Feature>
    </WebsiteLayout>
</template>
