<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";


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
                <section class="bg-white w-full dark:bg-gray-900 my-4 py-4 px-4 mx-auto text-center lg:py-16 lg:px-6">
                        <div class="pb-4">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                {{ props.gallery.name }}
                            </h2>
                            <p>{{ props.gallery.description }}</p>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div v-for="item in gallery.items" :key="item.id">
                                <img class="h-52 max-w-full rounded-lg" :src="item.media[0].original_url" alt="">
                            </div>
                        </div>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
