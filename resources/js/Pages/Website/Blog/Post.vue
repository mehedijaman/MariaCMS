<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

const props = defineProps({
    post: Object,
});
</script>
<template>
    <WebsiteLayout :title="props.post.name">
        <section class="min-h-[calc(100vh)] bg-pattern place-items-center">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="gap-4 py-8 px-4 sm:px-6 lg:px-8">
                <div class="place-self-center ">
                    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                            <article
                                class="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                                <header class="mb-4 lg:mb-6 not-format">
                                    <h1
                                        class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        Best practices for successful prototypes</h1>
                                </header>
                                <span v-html="props.post.content"></span>
                            </article>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
