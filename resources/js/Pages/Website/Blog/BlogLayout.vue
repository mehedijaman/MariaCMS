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
                class="py-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <h1 class="text-4xl mb-4 text-center font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">{{
                    props.title }}
                </h1>
                <div class="grid grid-cols-4 gap-4">
                    <div class="col-span-3">
                        <slot/>
                    </div>
                    <div class="col-span-1 border-[1px] border-slate-400">
                        <div class="text-2xl font-bold p-2 border-b-2 border-slate-300 bg-slate-200">Categories</div>
                        <Categories :categories="props.categories"></Categories>
                    </div>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
