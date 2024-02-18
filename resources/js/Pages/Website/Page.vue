<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";

const props = defineProps({
    data: Object,
});
</script>
<template>
    <WebsiteLayout :title="props.data.page.name">
        <section class="min-h-[calc(100vh)] bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="bg-white dark:bg-gray-900 w-full mx-auto max-w-screen-xl px-4 sm:py-8 lg:px-6 my-4">
                <div class="place-self-center space-y-6 mt-8 p-4 max-w-7xl bg-white dark:bg-slate-800">
                    <h1 class="text-2xl pb-4 font-semibold">{{ props.data.page.name }}</h1>
                    <img v-if="props.data.page.media" :src="props.data.page.media ? props.data.page.media[0].original_url : ''"
                        class="shadow-lg items-center mb-4 w-1/2 h-72 mx-auto" alt="Page Image">
                    <span v-html="props.data.page.content" class="text-left w-full"></span>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
