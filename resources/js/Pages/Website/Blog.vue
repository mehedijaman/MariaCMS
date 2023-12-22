<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PostCard from "./PostCard.vue";

const props = defineProps({
    // page: Object,
    title: String,
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="grid grid-cols-1 text-center gap-4 py-8 max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
                <div class="place-self-center space-y-6">
                    <h1 class="text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">{{ props.title }}
                    </h1>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap -mx-4 -my-8">
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                                <PostCard></PostCard>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
