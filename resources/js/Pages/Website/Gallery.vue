<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    gallery: Object,
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
                                {{ props.gallery.name }}
                            </h2>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div v-for="item in gallery.items" :key="item.id">
                                <img class="h-52 max-w-full rounded-lg"
                                    :src="item.media[0].original_url" alt="">
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
