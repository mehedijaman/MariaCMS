<script setup>
import { Link } from '@inertiajs/vue3';
import {
    ArrowRightIcon
} from '@heroicons/vue/20/solid';

const props = defineProps({
    post: Object
});

</script>
<template>
    <div class="w-full bg-slate-200 rounded-sm p-5 mb-4">
        <div class="text-xl font-bold hover:text-orange-800">
            <Link :href="route('blog.posts', {slug:props.post.slug})">{{ props.post.name }}</Link>
        </div>
        <div class="text-sm text-gray-500 mt-1 mb-5">
            Posted on {{ props.post.created_at }} by MehediJaman
        </div>
        <!-- <div>
            <img class="h-96 w-full mb-5" src="https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="">
        </div> -->
        <div v-html="props.post.excerpt" class="mb-5"></div>
        <div>
            <Link :href="route('blog.posts', {slug:props.post.slug})">
                <div class="text-white flex items-center gap-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-fit">
                    Read More
                    <ArrowRightIcon class="w-4 h-4" />
                </div>
        </Link>
    </div>
</div>
</template>
