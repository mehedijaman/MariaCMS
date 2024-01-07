<script setup>
const props = defineProps({
    homepage: Object
})
</script>
<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <span v-html="props.homepage.content"></span>
        </div>
    </section>
</template>
