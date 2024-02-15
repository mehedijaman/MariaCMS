<script setup>
const props = defineProps({
    homepage: Object
})
</script>
<template>
    <div class="bg-white dark:bg-gray-900">
        <section class=" dark:bg-gray-900 w-full mx-auto max-w-screen-xl px-4 sm:py-8 lg:px-6 my-4">
            <img v-if="props.homepage.media" :src="props.homepage.media?homepage.media[0].original_url:''"
                class="shadow-lg items-center mb-4 w-1/2 h-72 mx-auto" alt="Page Image">
            <span v-html="props.homepage.content"></span>
        </section>
    </div>
</template>
