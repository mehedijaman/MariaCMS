<script setup>
import BlogLayout from "./BlogLayout.vue";
import PostCard from "./PostCard.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    posts: Object,
    title: String,
    categories: Object,
    category: Object
});
</script>
<template>
    <BlogLayout :title="props.title" :categories="props.categories">
        <div class="md:grid grid-cols-3 gap-4">
            <PostCard v-for="post in props.posts.data" :key="post.slug" :post="post"> </PostCard>
        </div>

        <nav v-if="props.posts.total != 0 && props.posts.from != props.posts.last_page" aria-label="Page navigation"
            class="mt-6">
            <ul class="inline-flex -space-x-px text-sm">
                <li>

                    <Link :href="props.posts.first_page_url"
                        class="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    First

                    </Link>
                </li>
                <li v-for="page in props.posts.links">

                    <Link v-if="page.url" :href="page.url"
                        class="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span v-html="page.label"></span>

                    </Link>
                </li>
                <li>

                    <Link :href="props.posts.last_page_url"
                        class="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Last

                    </Link>
                </li>
            </ul>
        </nav>
    </BlogLayout>
</template>
