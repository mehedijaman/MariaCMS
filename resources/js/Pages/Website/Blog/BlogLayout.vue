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
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="py-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <h1 class="text-4xl mb-4 text-center font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">{{
                    props.title }}
                </h1>
                <div class="grid grid-cols-12">
                    <div class="col-span-9 p-10 mt-10 ">
                        <slot/>
                    </div>
                    <div class="col-span-3 pt-10 mt-10">
                        <Categories :categories="props.categories"></Categories>
                    </div>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
