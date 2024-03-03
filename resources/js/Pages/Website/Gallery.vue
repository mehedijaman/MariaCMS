<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";

import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const plugins = ref([lgThumbnail, lgZoom]);

const onInit = () => {
    console.log('lightGallery has been initialized');
};

const onBeforeSlide = () => {
    console.log('calling before slide');
};

onMounted(() => {
    // Additional setup code when component is mounted
});

const props = defineProps({
    gallery: Object,
    title: String,
})

</script>

<template>
    <WebsiteLayout :title="title">
        <section class="min-h-[calc(100vh)] bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="grid grid-cols-1 text-center gap-4 m-auto px-4 md:px-6">
                <section class="bg-white w-full dark:bg-gray-900 my-4 py-4 px-4 mx-auto text-center lg:py-16 lg:px-6">
                    <div class="mb-20 text-center">
                        <div class="flex gap-3  justify-center mx-auto">
                            <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                            <p class="text-2xl font-semibold">Gallery</p>
                        </div>
                        <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                            {{ props.gallery.name }}
                        </h1>
                        <p>{{ props.gallery.description }}</p>
                    </div>
                    <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit"
                        :onBeforeSlide="onBeforeSlide" class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <template v-for="item in gallery.items" :key="item.id">
                            <a :href="item.media[0].original_url">
                                <img class="h-64 w-full rounded-sm" :src="item.media[0].original_url" />
                            </a>
                        </template>
                    </lightgallery>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
