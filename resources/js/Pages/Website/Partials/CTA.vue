<script setup>
const props = defineProps({
    cta: Object,
})
</script>
<template>
    <!-- <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center p-4 mx-auto max-w-screen-xl xl:gap-12 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
            <img class="w-full" :src="props.cta.full_path_image" alt="dashboard image">

            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {{ props.cta.title }}
                </h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                    {{ props.cta.description }}
                </p>
                <a :href="props.cta.button_url" :target="props.cta.button_target" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {{ props.cta.button_text }}
                </a>
            </div>
        </div>
    </section> -->

    <!-- Why Us-->
    <div class="bg-inherit">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                WHY <span class="text-red-700">US?</span>
            </h1>
            <p class="md:w-96 h-0.5 bg-red-600 justify-center mx-auto"></p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="border text-center bg-white shadow-lg">
                        <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility1.png" alt="">
                        <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                        <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                    </div>
                    <div class="border text-center bg-white shadow-lg">
                        <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility2.png" alt="">
                        <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                        <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                    </div>
                    <div class="border text-center bg-white shadow-lg">
                        <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility4.png" alt="">
                        <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                        <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                    </div>
                    <div class="border text-center bg-white shadow-lg">
                        <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility6.png" alt="">
                        <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                        <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                    </div>
                </div>

                <img class="w-full" src="https://picsum.photos/seed/picsum/580/520" alt="">
            </div>
        </div>
    </div>
    <!-- /Why Us -->
</template>
