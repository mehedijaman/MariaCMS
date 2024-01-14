<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import FormSection from "@/Components/FormSection.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import DangerButton from '@/Components/DangerButton.vue';
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import Breadcrumb from "../Layouts/Authenticated/Breadcrumb.vue";
import { ref } from "vue";

import {
    InformationCircleIcon,
    PhoneIcon,
    ClipboardDocumentListIcon,
    HomeIcon,
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
    header: props.setting?.header,
    footer: props.setting?.footer,
    topbar_enabled: props.setting?.topbar_enabled,
    banner_enabled: props.setting?.banner_enabled,
    slider_enabled: props.setting?.slider_enabled,
    hero_enabled: props.setting?.hero_enabled,
    homepage_enabled: props.setting?.homepage_enabled,
    news_enabled: props.setting?.news_enabled,
    event_enabled: props.setting?.event_enabled,
    faq_enabled: props.setting?.faq_enabled,
    feature_enabled: props.setting?.feature_enabled,
    blog_enabled: props.setting?.blog_enabled,
    testimonial_enabled: props.setting?.testimonial_enabled,
    homepage: props.setting?.homepage,
    home_slider: props.setting?.home_slider,
    news_category: props.setting?.news_category,
    event_category: props.setting?.event_category,
    additional_css: props.setting?.additional_css,
    topbar_color: props.setting?.topbar_color,
    body_color: props.setting?.body_color,
    footer_color: props.setting?.footer_color,
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
                                        class="mt-1 block w-full h-24" @fileChange="fileChange" />
                                    <InputError :message="form.errors.banner" class="mt-2" />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="name" :value="lang().label.name" />
                                    <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full"
                                        :placeholder="lang().placeholder.name" :error="form.errors.name" />
                                    <InputError :message="form.errors.name" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="short_name" :value="lang().label.short_name" />
                                    <TextInput id="short_name" v-model="form.short_name" type="text"
                                        class="mt-1 block w-full" :placeholder="lang().placeholder.short_name"
                                        :error="form.errors.short_name" />
                                    <InputError :message="form.errors.short_name" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="tagline" :value="lang().label.tagline" />
                                    <TextInput id="tagline" v-model="form.tagline" type="text" class="mt-1 block w-full"
                                        :placeholder="lang().placeholder.tagline" :error="form.errors.tagline" />
                                    <InputError :message="form.errors.tagline" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-6">
                                    <InputLabel for="description" :value="lang().label.description" />
                                    <TextAreaInput id="description" rows="4" v-model="form.description"
                                        class="mt-1 block w-full" :placeholder="lang().placeholder.description"
                                        :error="form.errors.description" />
                                    <InputError :message="form.errors.description" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="header" :value="lang().label.header" />
                                    <TextAreaInput id="header" v-model="form.header" type="text" class="mt-1 block w-full"
                                        :placeholder="lang().placeholder.header" :error="form.errors.header" />
                                    <InputError :message="form.errors.header" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="footer" :value="lang().label.footer" />
                                    <TextAreaInput id="footer" v-model="form.footer" type="text" class="mt-1 block w-full"
                                        :placeholder="lang().placeholder.footer" :error="form.errors.footer" />
                                    <InputError :message="form.errors.footer" class="mt-2" />
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
                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="homepage_enabled" :value="lang().label.homepage" />
                                    <select v-model="form.homepage_enabled" id="homepage_enabled" name="homepage_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.homepage_enabled" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="homepage" :value="lang().label.homepage" />
                                    <select v-model="form.homepage" id="homepage" name="homepage" class="block w-full">
                                        <option :value="null">Default</option>
                                        <option v-for="page in props.pages" :key="page.id" :value="page.id">
                                            {{ page.name }}
                                        </option>
                                    </select>
                                    <InputError :message="form.errors.homepage" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="home_slider" :value="lang().label.home_slider" />
                                    <select v-model="form.home_slider" id="home_slider" name="home_slider"
                                        class="block w-full">
                                        <option :value="null">None</option>
                                        <option v-for="slider in props.sliders" :key="slider.id" :value="slider.id">
                                            {{ slider.name }}
                                        </option>
                                    </select>
                                    <InputError :message="form.errors.home_slider" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="news_category" :value="lang().label.news_category" />
                                    <select v-model="form.news_category" id="news_category" name="news_category"
                                        class="block w-full">
                                        <option :value="null">None</option>
                                        <option v-for="category in props.categories" :key="category.id"
                                            :value="category.id">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                    <InputError :message="form.errors.news_category" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="event_category" :value="lang().label.event_category" />
                                    <select v-model="form.event_category" id="event_category" name="event_category"
                                        class="block w-full">
                                        <option :value="null">None</option>
                                        <option v-for="category in props.categories" :key="category.id"
                                            :value="category.id">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                    <InputError :message="form.errors.event_category" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="topbar" :value="lang().label.topbar" />
                                    <select v-model="form.topbar_enabled" id="topbar" name="topbar_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.topbar" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="banner" :value="lang().label.banner" />
                                    <select v-model="form.banner_enabled" id="banner" name="banner_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.banner" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="slider" :value="lang().label.slider" />
                                    <select v-model="form.slider_enabled" id="slider" name="slider_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.slider" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="hero" :value="lang().label.hero" />
                                    <select v-model="form.hero_enabled" id="hero" name="hero_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.hero" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="news" :value="lang().label.news" />
                                    <select v-model="form.news_enabled" id="news" name="news_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.news" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="event" :value="lang().label.event" />
                                    <select v-model="form.event_enabled" id="event" name="event_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.event" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="faq" :value="lang().label.faq" />
                                    <select v-model="form.faq_enabled" id="faq" name="faq_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.faq" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="feature" :value="lang().label.feature" />
                                    <select v-model="form.feature_enabled" id="feature" name="feature_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.feature" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="blog" :value="lang().label.blog" />
                                    <select v-model="form.blog_enabled" id="blog" name="blog_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.blog" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="testimonial" :value="lang().label.testimonial" />
                                    <select v-model="form.testimonial_enabled" id="testimonial" name="testimonial_enabled"
                                        class="block w-full">
                                        <option :value="0">Disabled</option>
                                        <option :value="1">Enabled</option>
                                    </select>
                                    <InputError :message="form.errors.testimonial" class="mt-2" />
                                </div>

                                <!-- <div class="col-span-3 grid grid-cols-3">
                                    <div>
                                        <InputLabel for="topbar_color" :value="lang().label.topbar_color" />
                                        <TextInput id="topbar_color" v-model="form.topbar_color" type="color"
                                            class="mt-1 block w-full" :placeholder="lang().placeholder.topbar_color"
                                            :error="form.errors.topbar_color" />
                                        <InputError :message="form.errors.topbar_color" class="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel for="body_color" :value="lang().label.body_color" />
                                        <TextInput id="body_color" v-model="form.body_color" type="color"
                                            class="mt-1 block w-full" :placeholder="lang().placeholder.body_color"
                                            :error="form.errors.body_color" />
                                        <InputError :message="form.errors.body_color" class="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel for="footer_color" :value="lang().label.footer_color" />
                                        <TextInput id="footer_color" v-model="form.footer_color" type="color"
                                            class="mt-1 block w-full" :placeholder="lang().placeholder.footer_color"
                                            :error="form.errors.footer_color" />
                                        <InputError :message="form.errors.footer_color" class="mt-2" />
                                    </div>
                                </div> -->

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
                                <TextInput id="address" v-model="form.address" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.address" :error="form.errors.address" />
                                <InputError :message="form.errors.address" class="mt-2" />
                            </div>
                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="google_map" :value="lang().label.google_map" />
                                <TextInput id="google_map" v-model="form.google_map" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.google_map" :error="form.errors.google_map" />
                                <InputError :message="form.errors.google_map" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="contact_no" :value="lang().label.contact_no" />
                                <TextInput id="contact_no" v-model="form.contact_no" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.contact_no" :error="form.errors.contact_no" />
                                <InputError :message="form.errors.contact_no" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="email" :value="lang().label.email" />
                                <TextInput id="email" v-model="form.email" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.email" :error="form.errors.email" />
                                <InputError :message="form.errors.email" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="facebook" :value="lang().label.facebook" />
                                <TextInput id="facebook" v-model="form.facebook" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.facebook" :error="form.errors.facebook" />
                                <InputError :message="form.errors.facebook" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="twitter" :value="lang().label.twitter" />
                                <TextInput id="twitter" v-model="form.twitter" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.twitter" :error="form.errors.twitter" />
                                <InputError :message="form.errors.twitter" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="instagram" :value="lang().label.instagram" />
                                <TextInput id="instagram" v-model="form.instagram" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.instagram" :error="form.errors.instagram" />
                                <InputError :message="form.errors.instagram" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="youtube" :value="lang().label.youtube" />
                                <TextInput id="youtube" v-model="form.youtube" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.youtube" :error="form.errors.youtube" />
                                <InputError :message="form.errors.youtube" class="mt-2" />
                            </div>

                            <div class="col-span-1 sm:col-span-1">
                                <InputLabel for="whatsapp" :value="lang().label.whatsapp" />
                                <TextInput id="whatsapp" v-model="form.whatsapp" type="text" class="mt-1 block w-full"
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
                    <div class="hidden p-4 rounded-sm bg-white dark:bg-gray-800" id="settings" role="tabpanel"
                        aria-labelledby="settings-tab">
                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel for="additional_css" :value="lang().label.additional_css" />
                            <TextAreaInput id="additional_css" v-model="form.additional_css" type="text"
                                class="mt-1 block w-full" :placeholder="lang().placeholder.additional_css"
                                :error="form.errors.additional_css" />
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
</AppLayout></template>
