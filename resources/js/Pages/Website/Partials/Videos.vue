<script setup>
defineProps({
    videos: Object,
})
</script>
<template>
    <div class="bg-inherit">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <iframe v-for="video in videos" :key="video.id" :src="video.url" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>
