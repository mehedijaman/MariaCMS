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
        <div class="bg-inherit">
            <div class="max-w-7xl mx-auto px-4 py-12">
                <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                    OUR <span class="text-red-700">BLOG</span>
                </h1>
                <p class="md:w-96 h-0.5 bg-red-600 justify-center mx-auto"></p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    <div class="col-span-1 md:col-span-2">
                        <slot />
                    </div>

                    <div class="col-span-1">
                        <Categories v-if="props.categories.length" :categories="props.categories"></Categories>
                    </div>
                </div>
            </div>
        </div>
    </WebsiteLayout>
</template>
