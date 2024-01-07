<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
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
                class="grid grid-cols-1 text-center gap-4 py-8 m-auto px-4 sm:px-6 lg:px-8">
                <section class="bg-white dark:bg-gray-900 my-4">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                        <div class="mx-auto max-w-screen-sm">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Galleries
                            </h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 space-x-2">
                            <div v-for="gallery in galleries" :key="gallery.id"
                                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <Link :href="route('gallery',{slug:gallery.slug})">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {{ gallery.name }}
                                        </h5>
                                    </Link>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {{ gallery.description }}
                                    </p>
                                    <Link :href="route('gallery', {slug: gallery.slug})"
                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        View Photos
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
