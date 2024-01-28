<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {
    PhoneIcon,
    EnvelopeOpenIcon
} from "@heroicons/vue/24/outline";
import { usePage } from '@inertiajs/vue3';

const backgroundColor = usePage().props.app.setting.banner_background_color ? usePage().props.app.setting.banner_background_color : 'white';
const textColor = usePage().props.app.setting.banner_text_color ? usePage().props.app.setting.banner_text_color : 'black';
</script>
<template>

    <!-- <div v-if="$page.props.app.setting.banner_enabled && $page.props.app.setting.full_path_banner != null"
        class="max-h-[100px] bg-white dark:bg-slate-900 p-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between">
        <img class="" :src="$page.props.app.setting.full_path_banner" alt="">
    </div>
    <div v-else class="w-full dark:bg-slate-900" :style="{ backgroundColor: backgroundColor, color: textColor }">
        <div  class="max-h-[100px]  p-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
            <div class="shrink-0 flex flex-col md:flex-row items-center md:space-x-2">
                <ApplicationLogo class="block h-16" />
                <div class="flex flex-col text-center md:text-left">

                    <Link :href="route('index')" class="">
                    <span class="text-2xl font-semibold">
                        {{ $page.props.app.setting.name }}
                    </span>

                    </Link>
                    <span class="text-sm ">
                        {{ $page.props.app.setting.tagline }}
                    </span>
                </div>
            </div>

            <div class="shrink-0 flex justify-start items-center space-x-14">

                <div class="shrink-0 flex  justify-start items-center space-x-2">
                    <PhoneIcon class="w-6 h-6" />
                    <div class="flex flex-col">
                        <span class="text-md font-semibold">
                            {{ lang().label.call_us }}
                        </span>

                        <span class="text-sm ">
                            {{ $page.props.app.setting.contact_no }}
                        </span>
                    </div>
                </div>

                <div class="shrink-0 flex  justify-start items-center space-x-2">
                    <EnvelopeOpenIcon class="w-6 h-6" />
                    <div class="flex flex-col">
                        <span class="text-md font-semibold">
                            {{ lang().label.email_us }}
                        </span>

                        <span class="text-sm ">
                            {{ $page.props.app.setting.email }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
