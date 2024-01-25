<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import { useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";

import {
    PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    honeypot: Object,
});

const form = useForm({
    name: null,
    email: null,
    phone: null,
    subject: null,
    message: null,
    [props.honeypot.nameFieldName]: null,
    [props.honeypot.validFromFieldName]: props.honeypot.encryptedValidFrom,
});


const submit = () => {
    form.post(route("contact.post"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

</script>
<template>
    <WebsiteLayout :title="props.title">
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="py-8 bg-white dark:bg-slate-800 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24">

                <section class="text-gray-600 body-font relative">
                    <h2 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">{{
                        props.title }}
                    </h2>
                    <div class="container py-12 mx-auto flex sm:flex-nowrap flex-wrap">

                        <div
                            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map"
                                marginheight="0" marginwidth="0" scrolling="no" :src="$page.props.app.setting.google_map"
                                style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                            <div
                                class="bg-white dark:bg-slate-800 dark:text-white w-full dark: relative flex flex-wrap py-6 rounded shadow-md">
                                <div class="lg:w-1/2 px-6">
                                    <h2
                                        class="title-font font-semibold text-gray-900 dark:text-gray-400 tracking-widest text-xs">
                                        {{ lang().label.address }}
                                    </h2>
                                    <p class="mt-1">{{ $page.props.app.setting.address }}</p>
                                </div>
                                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2
                                        class="title-font font-semibold text-gray-900 dark:text-gray-400 tracking-widest text-xs">
                                        {{ lang().label.email }}
                                    </h2>
                                    <a class="text-indigo-500 leading-relaxed">{{ $page.props.app.setting.email }}</a>
                                    <h2
                                        class="title-font font-semibold text-gray-900 dark:text-gray-400 tracking-widest text-xs mt-4">
                                        {{ lang().label.phone }}
                                    </h2>
                                    <p class="leading-relaxed">{{ $page.props.app.setting.contact_no }}</p>
                                </div>
                            </div>

                        </div>
                        <div
                            class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 rounded-md dark:bg-slate-800 dark:text-white dark:border-slate-700 border-[1px] border-slate-400 shadow-md">
                            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-white">{{
                                lang().label.contact_us }}
                            </h2>
                            <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">Reach us to our address or
                                simply submit the
                                form below</p>
                            <form class="space-y-2" @submit.prevent="submit">
                                <!-- Honeypot -->
                                <div class="hidden" v-if="props.honeypot.enabled"
                                    :name="`${props.honeypot.nameFieldName}_wrap`">
                                    <input type="text" v-model="form[props.honeypot.nameFieldName]"
                                        :name="props.honeypot.nameFieldName" :id="props.honeypot.nameFieldName" />
                                    <input type="text" v-model="form[props.honeypot.validFromFieldName]"
                                        :name="props.honeypot.validFromFieldName" />
                                </div>

                                <!-- /Honeypot -->

                                <div class="space-y-1">
                                    <InputLabel for="name" :value="lang().label.name" />
                                    <TextInput id="name" v-model="form.name" type="text" class="block w-full"
                                        autocomplete="name" :placeholder="lang().placeholder.name"
                                        :error="form.errors.name" />
                                    <InputError :message="form.errors.name" />
                                </div>

                                <div class="space-y-1">
                                    <InputLabel for="email" :value="lang().label.email" />
                                    <TextInput id="email" v-model="form.email" type="text" class="block w-full"
                                        autocomplete="email" :placeholder="lang().placeholder.email"
                                        :error="form.errors.email" />
                                    <InputError :message="form.errors.email" />
                                </div>

                                <div class="space-y-1">
                                    <InputLabel for="phone" :value="lang().label.phone" />
                                    <TextInput id="phone" v-model="form.phone" type="text" class="block w-full"
                                        autocomplete="phone" :placeholder="lang().placeholder.phone"
                                        :error="form.errors.phone" />
                                    <InputError :message="form.errors.phone" />
                                </div>

                                <div class="space-y-1">
                                    <InputLabel for="subject" :value="lang().label.subject" />
                                    <TextInput id="subject" v-model="form.subject" type="text" class="block w-full"
                                        autocomplete="subject" :placeholder="lang().placeholder.subject"
                                        :error="form.errors.subject" />
                                    <InputError :message="form.errors.subject" />
                                </div>

                                <div class="space-y-1">
                                    <InputLabel for="message" :value="lang().label.message" />
                                    <TextAreaInput id="message" rows="4" v-model="form.message" class="block w-full"
                                        :placeholder="lang().placeholder.message" :error="form.errors.message" />
                                    <InputError :message="form.errors.message" />
                                </div>
                                <div class="space-y-1">
                                    <PrimaryButton class="w-full justify-center" :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing" @click="submit">
                                        <PaperAirplaneIcon class="w-4 h-auto me-2 transform -rotate-45"></PaperAirplaneIcon>
                                        Send Message {{ form.processing ? "..." : "" }}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </section>
</WebsiteLayout></template>
