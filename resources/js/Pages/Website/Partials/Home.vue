<script setup>
const props = defineProps({
    homepage: Object
})
</script>
<template>
    <section class="bg-white dark:bg-gray-900 w-full mx-auto max-w-screen-xl px-4 sm:py-8 lg:px-6 my-4">
        <span v-if="props.homepage" v-html="props.homepage.content"></span>
    </section>
</template>
