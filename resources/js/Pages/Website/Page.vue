<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

const props = defineProps({
    page: Object,
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <section
            class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern"
            id="home"
        >
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="grid grid-cols-1 text-center gap-4 py-8 max-w-7xl m-auto px-4 sm:px-6 lg:px-8"
            >
                <div class="place-self-center space-y-6">
                    <h1>{{ props.page.name }}</h1>
                    <span v-html="props.page.content"></span>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
