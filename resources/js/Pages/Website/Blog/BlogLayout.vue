<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import Categories from "./Categories.vue";

const props = defineProps({
    title: String,
    categories: Object,
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <section class="min-h-[calc(100vh)] bg-pattern grid bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="py-8 max-w-7xl w-full bg-white dark:bg-slate-800 mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <h2 class="text-4xl mb-8 text-center tracking-tight font-extrabold text-gray-900 dark:text-white">{{
                    props.title }}
                </h2>
                <div class="grid grid-cols-4 gap-4 relative">
                    <div class="col-span-3">
                        <slot />
                    </div>
                    <Categories v-if="props.categories.length" :categories="props.categories"></Categories>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
