<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import FormSection from "@/Components/FormSection.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import DangerButton from '@/Components/DangerButton.vue';
import TextInput from "@/Components/TextInput.vue";
import SelectInput from "@/Components/SelectInput.vue";
import { useForm } from "@inertiajs/vue3";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import Breadcrumb from "../Layouts/Authenticated/Breadcrumb.vue";

import {
    InformationCircleIcon,
    PhoneIcon,
    ClipboardDocumentListIcon,
    HomeIcon,
    PaintBrushIcon
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    pages: Object,
    setting: Object,
    categories: Object,
    sliders: Object,
    breadcrumbs: Object,
});

const form = useForm({
    logo: null,
    favicon: null,
    banner: null,
    name: props.setting?.name,
    short_name: props.setting?.short_name,
    tagline: props.setting?.tagline,
    description: props.setting?.description,
    header_message: props.setting?.header_message,
    footer_message: props.setting?.footer_message,

    is_topbar: props.setting.is_topbar ? true : false,
    is_header_message: props.setting.is_header_message ? true : false,
    is_footer_message: props.setting.is_footer_message ? true : false,
    is_search: props.setting.is_search ? true : false,
    is_language: props.setting.is_language ? true : false,
    is_dark_mode: props.setting.is_dark_mode ? true : false,
    is_banner: props.setting.is_banner ? true : false,
    is_logo: props.setting.is_logo ? true : false,
    is_name: props.setting.is_name ? true : false,
    is_tagline: props.setting.is_tagline ? true : false,
    is_phone: props.setting.is_phone ? true : false,
    is_email: props.setting.is_email ? true : false,
    is_slider: props.setting.is_slider ? true : false,
    is_hero: props.setting.is_hero ? true : false,
    is_homepage: props.setting.is_homepage ? true : false,
    is_news: props.setting.is_news ? true : false,
    is_event: props.setting.is_event ? true : false,
    is_faq: props.setting.is_faq ? true : false,
    is_feature: props.setting.is_feature ? true : false,
    is_cta: props.setting.is_cta ? true : false,
    is_blog: props.setting.is_blog ? true : false,
    is_testimonial: props.setting.is_testimonial ? true : false,
    is_product: props.setting.is_product ? true : false,
    is_product_category: props.setting.is_product_category ? true : false,
    is_clients: props.setting.is_clients ? true : false,
    is_chat: props.setting.is_chat ? true : false,
    is_video: props.setting.is_video ? true : false,

    homepage: props.setting?.homepage,
    home_slider: props.setting?.home_slider,
    news_category: props.setting?.news_category,
    event_category: props.setting?.event_category,
    additional_css: props.setting?.additional_css,

    topbar_background_color: props.setting?.topbar_background_color,
    topbar_text_color: props.setting?.topbar_text_color,
    banner_background_color: props.setting?.banner_background_color,
    banner_text_color: props.setting?.banner_text_color,
    navbar_background_color: props.setting?.navbar_background_color,
    navbar_text_color: props.setting?.navbar_text_color,
    body_background_color: props.setting?.body_background_color,
    body_text_color: props.setting?.body_text_color,
    footer_background_color: props.setting?.footer_background_color,
    footer_text_color: props.setting?.footer_text_color,

    address: props.setting?.address,
    google_map: props.setting?.google_map,
    contact_no: props.setting?.contact_no,
    email: props.setting?.email,
    facebook: props.setting?.facebook,
    twitter: props.setting?.twitter,
    instagram: props.setting?.instagram,
    youtube: props.setting?.youtube,
    whatsapp: props.setting?.whatsapp,
    _method: "PUT",
});
const update = () => {
    form.post(route("setting.update", props.setting?.id), {
        preserveScroll: true,
        onSuccess: () => null,
        onError: () => null,
        onFinish: () => null,
    });
};

const fileChange = (value) => {
    if (value.source === "favicon") {
        form.favicon = value.file;
    } else if (value.source === "logo") {
        form.logo = value.file;
    } else if (value.source === "banner") {
        form.banner = value.file;
    }
};

function resetColors() {
    form.topbar_background_color = '#49688E';
    form.topbar_text_color = '#E2E8F0';
    form.banner_background_color = '#294A70';
    form.banner_text_color = '#E2E8F0';
    form.navbar_background_color = '#FFFFFF';
    form.navbar_text_color = '#F3F4F6';
    form.body_background_color = '#F3F4F6';
    form.body_text_color = '#191514';
    form.footer_background_color = '#294A70';
    form.footer_text_color = '#191514';
}
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs" />
        <div>
            <div class="max-w-7xl mx-auto py-4 sm:px-6 lg:px-4">
                <div class="border-b-2 border-slate-300 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-sm" id="default-tab"
                        data-tabs-toggle="#default-tab-content" role="tablist">
                        <li class="me-2" role="presentation">
                            <button class="p-4 border-b-2 rounded-t-lg flex" id="site-settings-tab"
                                data-tabs-target="#site-settings" type="button" role="tab" aria-controls="site-settings"
                                aria-selected="false">
                                <InformationCircleIcon class="w-5 h-5 me-2 text-gray-400"></InformationCircleIcon>
                                Site Settings
                            </button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button class="p-4 border-b-2 rounded-t-lg flex" id="homepage-settings-tab"
                                data-tabs-target="#homepage-settings" type="button" role="tab" aria-controls="site-settings"
                                aria-selected="false">
                                <HomeIcon class="w-5 h-5 me-2 text-gray-400"></HomeIcon>
                                Homepage Settings
                            </button>
                        </li>

                        <li class="me-2" role="presentation">
                            <button
                                class="flex p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                                aria-controls="dashboard" aria-selected="false">
                                <PhoneIcon class="w-5 h-5 me-2 text-gray-400"></PhoneIcon>
                                Contact Info
                            </button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button
                                class="flex p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="color-setting-tab" data-tabs-target="#color-setting" type="button" role="tab"
                                aria-controls="color-setting" aria-selected="false">
                                <PaintBrushIcon class="w-5 h-5 me-2 text-gray-400"></PaintBrushIcon>
                                Color Setting
                            </button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button
                                class="flex p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                                aria-controls="settings" aria-selected="false">
                                <ClipboardDocumentListIcon class="w-5 h-5 me-2 text-gray-400"></ClipboardDocumentListIcon>
                                Additional CSS
                            </button>
                        </li>
                    </ul>
                </div>
                <div id="default-tab-content">
                    <div class="hidden rounded-sm bg-gray-50 dark:bg-gray-800" id="site-settings" role="tabpanel"
                        aria-labelledby="site-settings-tab">
                        <FormSection>
                            <template #form class="grid grid-cols-6 gap-6 ">
                                <div class="col-span-6 grid grid-cols-6 gap-4">
                                    <div class="col-span-6 flex justify-center gap-6">
                                        <div>
                                            <InputLabel for="favicon" value="Favicon" />
                                            <ImageInput source="favicon" v-model="form.favicon"
                                                :image="props.setting.full_path_favicon"
                                                tooltip="Click to select/change favicon" class="mt-1 block w-24 h-24"
                                                @fileChange="fileChange" />
                                            <InputError :message="form.errors.favicon" class="mt-2" />
                                        </div>

                                        <div>
                                            <InputLabel for="logo" value="Logo" />
                                            <ImageInput source="logo" v-model="form.logo"
                                                :image="props.setting.full_path_logo" tooltip="Click to select/change logo"
                                                class="mt-1 block w-24 h-24" @fileChange="fileChange" />
                                            <InputError :message="form.errors.logo" class="mt-2" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6 w-full">
                                    <InputLabel for="banner" value="Banner" />
                                    <ImageInput source="banner" v-model="form.banner"
                                        :image="props.setting.full_path_banner" tooltip="Click to select/change banner"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-36"
                                        @fileChange="fileChange" />
                                    <InputError :message="form.errors.banner" class="mt-2" />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="name" :value="lang().label.name" />
                                    <TextInput id="name" v-model="form.name" type="text"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :placeholder="lang().placeholder.name" :error="form.errors.name" />
                                    <InputError :message="form.errors.name" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="short_name" :value="lang().label.short_name" />
                                    <TextInput id="short_name" v-model="form.short_name" type="text"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :placeholder="lang().placeholder.short_name" :error="form.errors.short_name" />
                                    <InputError :message="form.errors.short_name" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="tagline" :value="lang().label.tagline" />
                                    <TextInput id="tagline" v-model="form.tagline" type="text"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :placeholder="lang().placeholder.tagline" :error="form.errors.tagline" />
                                    <InputError :message="form.errors.tagline" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-6">
                                    <InputLabel for="description" :value="lang().label.description" />
                                    <TextAreaInput id="description" rows="4" v-model="form.description"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :placeholder="lang().placeholder.description" :error="form.errors.description" />
                                    <InputError :message="form.errors.description" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="header_message" :value="lang().label.header" />
                                    <TextAreaInput id="header_message" v-model="form.header_message" type="text"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :placeholder="lang().placeholder.header_message" :error="form.errors.header_message" />
                                    <InputError :message="form.errors.header_message" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="footer_message" :value="lang().label.footer" />
                                    <TextAreaInput id="footer_message" v-model="form.footer_message" type="text"
                                        class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        :placeholder="lang().placeholder.footer_message" :error="form.errors.footer_message" />
                                    <InputError :message="form.errors.footer_message" class="mt-2" />
                                </div>
                            </template>
                            <template #actions>
                                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                    {{ lang().label.saved }}
                                </ActionMessage>

                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                    @click="update">
                                    {{ lang().button.save }}
                                    {{ form.processing ? "..." : "" }}
                                </PrimaryButton>
                            </template>
                        </FormSection>
                    </div>
                    <div class="hidden rounded-sm bg-gray-50 dark:bg-gray-800" id="homepage-settings" role="tabpanel"
                        aria-labelledby="homapage-settings-tab">
                        <FormSection>
                            <template #form class="grid grid-cols-6 gap-6 ">
                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_homepage" class="sr-only peer"
                                                id="is_homepage">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                            <InputLabel for="homepage" :value="lang().label.homepage" />

                                        </label>
                                        <select v-model="form.homepage" id="homepage" name="homepage"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option :value="null">Default</option>
                                            <option v-for="page in props.pages" :key="page.id" :value="page.id">
                                                {{ page.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <InputError :message="form.errors.homepage" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_slider" class="sr-only peer"
                                                id="is_slider">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>

                                            <InputLabel for="home_slider" :value="lang().label.slider" />
                                        </label>
                                        <select v-model="form.home_slider" id="home_slider" name="home_slider"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option :value="null">Default</option>
                                            <option v-for="slider in props.sliders" :key="slider.id" :value="slider.id">
                                                {{ slider.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <InputError :message="form.errors.home_slider" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_news" class="sr-only peer"
                                                id="is_news">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>

                                            <InputLabel for="is_news" :value="lang().label.news" />
                                        </label>
                                        <select v-model="form.news_category" id="news_category" name="news_category"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="category in props.categories" :key="category.id"
                                                :value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <InputError :message="form.errors.news_category" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_event" class="sr-only peer"
                                                id="is_event">
                                            <div
                                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                            <InputLabel for="is_event" :value="lang().label.event" />

                                        </label>
                                        <select v-model="form.event_category" id="event_category" name="event_category"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="category in props.categories" :key="category.id"
                                                :value="category.id">
                                                {{ category.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <InputError :message="form.errors.event_category" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_topbar" class="sr-only peer"
                                            id="is_topbar">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_topbar" :value="lang().label.topbar" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.topbar" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_header_message" class="sr-only peer"
                                            id="is_header_message">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_header_message" :value="lang().label.header_message" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_header_message" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_footer_message" class="sr-only peer"
                                            id="is_footer_message">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_footer_message" :value="lang().label.footer_message" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_header_message" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_phone" class="sr-only peer"
                                            id="is_phone">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_phone" :value="lang().label.phone" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_phone" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_email" class="sr-only peer"
                                            id="is_email">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_email" :value="lang().label.email" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_email" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_name" class="sr-only peer"
                                            id="is_name">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_name" :value="lang().label.name" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_name" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_logo" class="sr-only peer"
                                            id="is_logo">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_logo" :value="lang().label.logo" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_logo" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_tagline" class="sr-only peer"
                                            id="is_tagline">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_tagline" :value="lang().label.tagline" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_tagline" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_banner" class="sr-only peer"
                                            id="is_banner">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_banner" :value="lang().label.banner" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.banner" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_search" class="sr-only peer"
                                            id="is_search">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_search" :value="lang().label.search" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_search" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_language" class="sr-only peer"
                                            id="is_language">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_language" :value="lang().label.language" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_language" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_dark_mode" class="sr-only peer"
                                            id="is_dark_mode">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_dark_mode" :value="lang().label.dark_mode" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_dark_mode" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_hero" class="sr-only peer"
                                            id="is_hero">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_hero" :value="lang().label.hero" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.hero" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_faq" class="sr-only peer"
                                            id="is_faq">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_faq" :value="lang().label.faq" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.faq" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_cta" class="sr-only peer"
                                            id="is_cta">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_cta" :value="lang().label.cta" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.cta" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_feature" class="sr-only peer"
                                            id="is_feature">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_feature" :value="lang().label.feature" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.feature" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_blog" class="sr-only peer"
                                            id="is_blog">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_blog" :value="lang().label.blog" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.blog" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_testimonial" class="sr-only peer"
                                            id="is_testimonial">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_testimonial" :value="lang().label.testimonial" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.testimonial" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_product" class="sr-only peer"
                                            id="is_product">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_product" :value="lang().label.featured_product" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.featured_product" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_product_category" class="sr-only peer"
                                            id="is_product_category">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_product_category" :value="lang().label.featured_product_category" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_product_category" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_clients" class="sr-only peer"
                                            id="is_clients">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_clients" :value="lang().label.clients" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.clients" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_chat" class="sr-only peer"
                                            id="is_chat">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_chat" :value="lang().label.chat" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_chat" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3 flex flex-col">
                                    <div class="flex items-center gap-4">
                                        <label class="relative inline-flex gap-2 items-center cursor-pointer">
                                            <input type="checkbox" v-model="form.is_video" class="sr-only peer"
                                            id="is_video">
                                            <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                        <InputLabel for="is_video" :value="lang().label.video" />
                                        </label>
                                    </div>
                                    <InputError :message="form.errors.is_video" class="mt-2" />
                                </div>
                            </template>
                            <template #actions>
                                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                    {{ lang().label.saved }}
                                </ActionMessage>

                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                    @click="update">
                                    {{ lang().button.save }}
                                    {{ form.processing ? "..." : "" }}
                                </PrimaryButton>
                            </template>
                        </FormSection>
                    </div>
                    <div class="hidden p-4 rounded-sm bg-white dark:bg-gray-800" id="dashboard" role="tabpanel"
                        aria-labelledby="dashboard-tab">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="address" :value="lang().label.address" />
                                <TextInput id="address" v-model="form.address" type="text"
                                    class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.address" :error="form.errors.address" />
                                <InputError :message="form.errors.address" class="mt-2" />
                            </div>
                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="google_map" :value="lang().label.google_map" />
                                <TextInput id="google_map" v-model="form.google_map" type="text"
                                class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.google_map" :error="form.errors.google_map" />
                                <InputError :message="form.errors.google_map" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="contact_no" :value="lang().label.contact_no" />
                                <TextInput id="contact_no" v-model="form.contact_no" type="text"
                                    class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.contact_no" :error="form.errors.contact_no" />
                                <InputError :message="form.errors.contact_no" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="email" :value="lang().label.email" />
                                <TextInput id="email" v-model="form.email" type="text"
                                    class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.email" :error="form.errors.email" />
                                <InputError :message="form.errors.email" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="facebook" :value="lang().label.facebook" />
                                <TextInput id="facebook" v-model="form.facebook" type="text"
                                class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.facebook" :error="form.errors.facebook" />
                                <InputError :message="form.errors.facebook" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="twitter" :value="lang().label.twitter" />
                                <TextInput id="twitter" v-model="form.twitter" type="text"
                                class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.twitter" :error="form.errors.twitter" />
                                <InputError :message="form.errors.twitter" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="instagram" :value="lang().label.instagram" />
                                <TextInput id="instagram" v-model="form.instagram" type="text"
                                    class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.instagram" :error="form.errors.instagram" />
                                <InputError :message="form.errors.instagram" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="youtube" :value="lang().label.youtube" />
                                <TextInput id="youtube" v-model="form.youtube" type="text"
                                    class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.youtube" :error="form.errors.youtube" />
                                <InputError :message="form.errors.youtube" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="whatsapp" :value="lang().label.whatsapp" />
                                <TextInput id="whatsapp" v-model="form.whatsapp" type="text"
                                    class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="lang().placeholder.whatsapp" :error="form.errors.whatsapp" />
                                <InputError :message="form.errors.whatsapp" class="mt-2" />
                            </div>

                        </div>
                        <div class="my-4 flex justify-end">
                            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                {{ lang().label.saved }}
                            </ActionMessage>

                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                @click="update">
                                {{ lang().button.save }}
                                {{ form.processing ? "..." : "" }}
                            </PrimaryButton>
                        </div>
                    </div>
                    <div class="hidden p-4 rounded-sm bg-white dark:bg-gray-800" id="color-setting" role="tabpanel"
                        aria-labelledby="color-setting-tab">
                        <PrimaryButton @click="resetColors">
                            {{ lang().button.reset }}
                        </PrimaryButton>

                        <div class="col-span-3 grid grid-cols-2">
                            <div class="flex gap-2 items-center">
                                <TextInput id="topbar_background_color" v-model="form.topbar_background_color" type="color"
                                    :error="form.errors.topbar_background_color" />
                                <InputLabel for="topbar_background_color" value="Topbar Background" />

                                <InputError :message="form.errors.topbar_background_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="topbar_text_color" v-model="form.topbar_text_color" type="color"
                                    :error="form.errors.topbar_text_color" />
                                <InputLabel for="topbar_text_color" value="Topbar Text" />
                                <InputError :message="form.errors.topbar_text_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="banner_background_color" v-model="form.banner_background_color" type="color"
                                    :error="form.errors.banner_background_color" />
                                <InputLabel for="banner_background_color" value="Banner Background" />
                                <InputError :message="form.errors.banner_background_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="banner_text_color" v-model="form.banner_text_color" type="color"
                                    :error="form.errors.banner_text_color" />
                                <InputLabel for="banner_text_color" value="Banner Text" />
                                <InputError :message="form.errors.banner_text_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="navbar_background_color" v-model="form.navbar_background_color" type="color"
                                    :error="form.errors.navbar_background_color" />
                                <InputLabel for="navbar_background_color" value="Navbar Background" />
                                <InputError :message="form.errors.navbar_background_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="navbar_text_color" v-model="form.navbar_text_color" type="color"
                                    :error="form.errors.navbar_text_color" />
                                <InputLabel for="navbar_text_color" value="Navbar Text" />
                                <InputError :message="form.errors.navbar_text_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="body_background_color" v-model="form.body_background_color" type="color"
                                    :error="form.errors.body_background_color" />
                                <InputLabel for="body_background_color" value="Body Background" />
                                <InputError :message="form.errors.body_background_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="body_text_color" v-model="form.body_text_color" type="color"
                                    :error="form.errors.body_text_color" />
                                <InputLabel for="body_text_color" value="Body Text" />
                                <InputError :message="form.errors.body_text_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="footer_background_color" v-model="form.footer_background_color" type="color"
                                    :error="form.errors.footer_background_color" />
                                <InputLabel for="footer_background_color" value="Footer Background" />

                                <InputError :message="form.errors.footer_background_color" class="mt-2" />
                            </div>

                            <div class="flex gap-2 items-center">
                                <TextInput id="footer_text_color" v-model="form.footer_text_color" type="color"
                                    :error="form.errors.footer_text_color" />
                                <InputLabel for="footer_text_color" value="Footer Text" />

                                <InputError :message="form.errors.footer_text_color" class="mt-2" />
                            </div>
                        </div>

                        <div class="my-4 flex justify-end">
                            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                {{ lang().label.saved }}
                            </ActionMessage>

                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                @click="update">
                                {{ lang().button.save }}
                                {{ form.processing ? "..." : "" }}
                            </PrimaryButton>
                        </div>
                    </div>
                    <div class="hidden p-4 rounded-sm bg-white dark:bg-gray-800" id="settings" role="tabpanel"
                        aria-labelledby="settings-tab">
                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel for="additional_css" :value="lang().label.additional_css" />
                            <TextAreaInput id="additional_css" v-model="form.additional_css" type="text"
                                class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :placeholder="lang().placeholder.additional_css" :error="form.errors.additional_css" />
                            <InputError :message="form.errors.additional_css" class="mt-2" />
                        </div>

                        <div class="my-4 flex justify-end">
                            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                {{ lang().label.saved }}
                            </ActionMessage>

                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                @click="update">
                                {{ lang().button.save }}
                                {{ form.processing ? "..." : "" }}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
