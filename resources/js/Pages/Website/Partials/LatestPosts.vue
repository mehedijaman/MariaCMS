<script setup>
import PostCard from '../Blog/PostCard.vue';

const props = defineProps({
    posts: Object
})
</script>
<template>
    <section class="bg-white dark:bg-gray-900 shadow-xl max-w-7xl mx-auto w-full my-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Our Latest Blog Posts
                </h2>
            </div>
            <div class="grid gap-8 lg:grid-cols-2">
                <PostCard v-for="post in props.posts" :key="post.id" :post="post"></PostCard>
            </div>
        </div>
    </section>
</template>
