<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import {
    PhoneIcon,
    EnvelopeOpenIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
} from "@heroicons/vue/24/solid";
import { usePage } from '@inertiajs/vue3';

const backgroundColor = usePage().props.app.setting.banner_background_color ? usePage().props.app.setting.banner_background_color : 'white';
const textColor = usePage().props.app.setting.banner_text_color ? usePage().props.app.setting.banner_text_color : 'black';
</script>
<template>
    <div v-if="$page.props.app.setting.is_banner && $page.props.app.setting.full_path_banner != null"
        class="max-h-[100px] bg-white dark:bg-slate-900 p-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between">
        <img class="" :src="$page.props.app.setting.full_path_banner" alt="">
    </div>
    <section v-else class=" bg-[#294A70]">
        <div class="mx-auto max-w-7xl p-4 md:py-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-3 md:col-span-2 flex flex-col md:flex-row gap-4 items-center">
                    <ApplicationLogo v-if="$page.props.app.setting.is_logo" class="block h-16" />
                    <div class="text-slate-200 flex flex-col text-center md:text-left">

                        <Link v-if="$page.props.app.setting.is_name" :href="route('index')"
                            class="text-xl md:text-3xl font-bold">{{ $page.props.app.setting.name }}

                        </Link>
                        <p v-if="$page.props.app.setting.is_tagline" class="text-xs md:text-sm">
                            {{ $page.props.app.setting.tagline }}
                        </p>
                    </div>
                </div>
                <!-- <div class="flex flex-col md:flex-row gap-2 md:gap-4 px-2 text-slate-200">
                    <div v-if="$page.props.app.setting.is_phone" class="flex justify-start items-center gap-2">
                        <DevicePhoneMobileIcon class="w-4 md:w-6 h-4 md:h-6" />
                        <div class="flex md:flex-col gap-2 md:gap-0 items-center md:items-start">
                            <h6 class="text-md font-semibold">{{ lang().label.call_us }}</h6>
                            <span class="text-sm">{{ $page.props.app.setting.contact_no }}</span>
                        </div>
                    </div>
                    <div v-if="$page.props.app.setting.is_email" class="flex justify-start items-center gap-2">
                        <EnvelopeOpenIcon class="w-4 md:w-6 h-4 md:h-6" />
                        <div class="flex md:flex-col gap-2 md:gap-0 items-center md:items-start">
                            <h6 class="text-md font-semibold">{{ lang().label.email_us }}</h6>
                            <span>{{ $page.props.app.setting.email }}</span>
                        </div>
                    </div>
                </div> -->
                <div class="col-span-1">
                    <form v-if="$page.props.app.setting.is_search">
                        <div class="flex pt-3">
                            <div class="relative w-full">
                                <input type="search" id="location-search"
                                    class="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-full rounded-s-full border border-gray-3000"
                                    placeholder="Search..." required>
                                <button type="submit"
                                    class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-full border border-blue-700 hover:bg-blue-800 ">
                                    <MagnifyingGlassIcon class="w-5 h-5"></MagnifyingGlassIcon>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
