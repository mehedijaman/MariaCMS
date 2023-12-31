<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
</script>
<template>
    <div class="min-h-[100px] bg-white dark:bg-slate-900 p-5 max-w-7xl mx-auto">
        <div>
            <Link :href="route('index')" class="shrink-0 flex w-full justify-start items-center space-x-4">
            <ApplicationLogo class="block h-20 w-auto" />
            <span class="text-3xl font-semibold">
                {{ $page.props.app.setting.name }}
            </span>
            </Link>
            <span class="text-sm tracking-widest ml-24">
                {{ $page.props.app.setting.tagline }}
            </span>
        </div>
        <!-- <img class="" src="https://website.iiustb.ac.bd/public/assets/frontend/images/main_logo_full.png" alt=""> -->
    </div>
</template>
