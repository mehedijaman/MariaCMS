<script setup>
import PostCard from '../Blog/PostCard.vue';

const props = defineProps({
    posts: Object
})
</script>
<template>
    <div class="bg-white dark:bg-gray-900">
        <section class="max-w-7xl mx-auto px-4 py-12">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div>
                    <div class="flex gap-3  justify-center mx-auto">
                        <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                        <p class="text-2xl font-semibold">Read More</p>
                    </div>
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        OUR LATEST<span class="text-red-700"> BLOGS</span>
                    </h1>
                </div>
                <div class="grid gap-8 lg:grid-cols-2">
                    <PostCard v-for="post in props.posts" :key="post.id" :post="post"></PostCard>
                </div>
            </div>
        </section>
    </div>
</template>
