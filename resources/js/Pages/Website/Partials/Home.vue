<script setup>
const props = defineProps({
    homepage: Object
})
</script>
<template>
    <section class="bg-white shadow-lg dark:bg-gray-900 w-full mx-auto max-w-screen-xl px-4 sm:py-8 lg:px-6 my-4">
        <img :src="props.homepage.media[0].original_url" class="shadow-lg items-center mb-4 w-full" alt="Page Image">
        <span v-html="props.homepage.content"></span>
    </section>
</template>
