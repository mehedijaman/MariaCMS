<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/20/solid";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    galleries: Object,
    title: String,
})
</script>
<template>
    <WebsiteLayout :title="title">
        <section class="min-h-[calc(100vh)] bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="py-8 bg-white dark:bg-slate-800 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <section class="text-gray-600 body-font relative">
                    <h2 class="text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                            {{ props.title }}
                        </h2>

                        <div class="container py-12 mx-auto sm:flex-nowrap flex-wrap grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div v-for="gallery in galleries" :key="gallery.id"
                                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img class="rounded-t-lg h-44 w-full" :src="gallery.media[0].original_url" alt="" />
                                <div class="p-5">

                                    <Link :href="route('gallery', { slug: gallery.slug })">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                        {{ gallery.name }}
                                    </h5>

                                    </Link>

                                    <Link :href="route('gallery', { slug: gallery.slug })"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                    View Photos
                                    <ArrowRightIcon class="rtl:rotate-180 w-3.5 h-3.5 ms-2"></ArrowRightIcon>

                                    </Link>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
