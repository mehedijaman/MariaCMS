<script setup>
import { Head } from "@inertiajs/vue3";
import BackToTop from "@/Components/Website/BackToTop.vue";
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

onMounted(() => {
    initFlowbite();
});
</script>

<template>

    <div>
        <Head :title="title" />
        <Toast :flash="$page.props.flash" />
        <div
            class="flex relative w-full min-h-screen dark:bg-slate-900 text-slate-900 dark:text-slate-200 overflow-x-hidden"
        >
            <div class="w-full">
                <TopBar v-if="$page.props.app.setting.topbar_enabled"></TopBar>
                <Banner></Banner>
                <Navbar />
                <!-- Page Content -->
                <main class="text-slate-600 dark:text-slate-200">
                    <slot />
                    <BackToTop />
                </main>
                <Footer />
            </div>
        </div>
    </div>
</template>
