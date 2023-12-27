<script setup>
const props = defineProps({
    post: Object
});

</script>
<template>
    <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
            </div>
            <div class="flex-grow pl-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{{ props.post.name }}</h1>
                <p class="leading-relaxed mb-5">{{ props.post.excerpt }}</p>
                <a class="inline-flex items-center">
                    <img alt="blog" src="https://dummyimage.com/103x103"
                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                    <span class="flex-grow flex flex-col pl-3">
                        <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
