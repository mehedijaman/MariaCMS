<script setup>
import { Head } from "@inertiajs/vue3";
import Toast from "@/Components/Toast.vue";
import Banner from "../Components/Banner.vue";
import Navbar from "./Authenticated/Navbar.vue";
import Footer from "./Authenticated/Footer.vue";
import { ref, reactive } from "vue";

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
        <Banner />
        <div
            class="flex relative w-full min-h-screen bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-hidden text-base"
        >
            <div class="w-full">
                <Navbar></Navbar>
                <!-- Page Content -->
                <main class="pt-16">
                    <slot />
                </main>
                <Footer />
            </div>
        </div>
    </div>
</template>
