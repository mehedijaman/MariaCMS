<script setup>
const props = defineProps({
    homepage: Object
})
</script>
<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <span v-html="props.homepage.content"></span>
        </div>
    </section>
</template>
