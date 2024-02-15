<script setup>
import BlogLayout from "./BlogLayout.vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    post: Object,
    categories: Object,
});
</script>
<template>
    <BlogLayout :categories="props.categories" :title="props.post.name">
        <article class="bg-white mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert p-4">
            <header class="mb-4 lg:mb-6 not-format">
                <div class="flex items-center space-x-2 mb-4">
                    <span v-for="category in props.post.categories" :key="category.id"
                        class="bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-slate-700 dark:text-primary-800">

                        <Link :href="route('blog.category.posts', { slug: category.slug })">{{ category.name }}

                        </Link>
                    </span>
                </div>
                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {{ props.post.name }}</h1>

                <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img class="mr-4 w-16 h-16 rounded-full" :src="props.post.author.profile_photo_url" alt="Jese Leos">
                        <div>

                            <Link href="" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">
                            {{ props.post.author.name }}

                            </Link>
                            <p class="text-base text-gray-500 dark:text-gray-400">{{ props.post.created_at }}</p>
                        </div>
                    </div>
                </address>

            </header>
            <p class="lead">
                <span v-html="props.post.content"></span>
            </p>
        </article>
    </BlogLayout>
</template>
