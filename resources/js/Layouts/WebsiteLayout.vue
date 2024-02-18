<script setup>
import { Head } from "@inertiajs/vue3";
import BackToTop from "@/Components/Website/BackToTop.vue";
import ChatButton from "@/Components/Website/ChatButton.vue";
import Toast from "@/Components/Toast.vue";
import TopBar from "@/Layouts/Website/TopBar.vue";
import Banner from "@/Layouts/Website/Banner.vue";
import Navbar from "@/Layouts/Website/Navbar.vue";
import Footer from "@/Layouts/Website/Footer.vue";
defineProps({
    title: String,
});

import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import Chips from "./Website/Chips.vue";

onMounted(() => {
    initFlowbite();
});
</script>

<template>
    <Head :title="title" />
    <Toast :flash="$page.props.flash" />
    <Chips></Chips>
    <TopBar v-if="$page.props.app.setting.is_topbar"></TopBar>
    <Banner></Banner>
    <Navbar />
    <div class="bg-gray-100 min-h-screen w-full dark:bg-slate-900 dark:text-slate-200 overflow-x-hidden">
        <slot></slot>
    </div>
    <ChatButton v-if="$page.props.app.setting.is_chat"></ChatButton>
    <BackToTop></BackToTop>
    <Footer></Footer>
</template>
