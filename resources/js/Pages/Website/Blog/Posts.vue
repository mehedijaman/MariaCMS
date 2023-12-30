<script setup>
import BlogLayout from "./BlogLayout.vue";
import PostCard from "./PostCard.vue";

const props = defineProps({
    posts: Object,
    title: String,
    categories: Object,
    category: Object
});
</script>
<template>
    <BlogLayout :title="props.title" :categories="props.categories">
        <PostCard v-for="post in props.posts.data" :key="post.slug" :post="post"> </PostCard>
    </BlogLayout>
</template>
