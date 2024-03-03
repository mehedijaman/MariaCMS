<script setup>
import { onMounted } from "vue";
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import Hero from './Partials/Hero.vue';
import Home from "./Partials/Home.vue";
import Slider from './Partials/Slider.vue';
import FAQ from "./Partials/FAQ.vue";
import LatestPosts from "./Partials/LatestPosts.vue";
import Feature from "./Partials/Feature.vue";
import CTA from "./Partials/CTA.vue";
import NewsAndEvents from "./Partials/NewsAndEvents.vue";
import FeaturedCategories from "./Partials/FeaturedCategories.vue";
import TestimonialSection from "./Partials/TestimonialSection.vue";
import OurClients from "./Partials/OurClients.vue";
import Videos from "./Partials/Videos.vue";

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
        <Slider v-if="$page.props.app.setting.is_slider && props.data.slider" :slides="props.data.slider.items" />
        <Hero v-if="$page.props.app.setting.is_hero" :hero="props.data.hero" />
        <Home v-if="$page.props.app.setting.is_homepage" :homepage="props.data.homepage" />
        <FeaturedCategories v-if="$page.props.app.setting.is_product_category && props.data.product_categories" :categories="props.data.product_categories" />
        <FAQ v-if="$page.props.app.setting.is_faq && props.data.faqs" :faqs="props.data.faqs" />
        <LatestPosts v-if="$page.props.app.setting.is_blog" :posts="props.data.latest_posts" />
        <NewsAndEvents v-if="$page.props.app.setting.is_news ||  $page.props.app.setting.is_event" :news="props.data.news" :events="props.data.events" />
        <TestimonialSection v-if="$page.props.app.setting.is_testimonial && props.data.testimonials" :testimonials="props.data.testimonials" />
        <CTA v-if="$page.props.app.setting.is_cta" :cta="props.data.cta" />
        <Feature v-if="$page.props.app.setting.is_feature && props.data.features" :features="props.data.features" />
        <OurClients v-if="$page.props.app.setting.is_clients && props.data.clients" :clients="props.data.clients" />
        <Videos v-if="$page.props.app.setting.is_video && props.data.videos" :videos="props.data.videos" />
    </WebsiteLayout>
</template>
