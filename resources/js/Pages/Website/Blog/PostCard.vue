<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    post: Object
});

</script>
<template>
    <div class="w-full bg-gray-100 rounded-md p-5 my-5 hover:bg-gray-200">
        <div class="text-xl font-bold hover:text-orange-600">
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
                <div class="max-w-fit flex items-center bg-blue-500 py-[8px] px-5 rounded-md text-white hover:bg-blue-600">
                    Read More
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
        </Link>
    </div>
</div>
</template>
