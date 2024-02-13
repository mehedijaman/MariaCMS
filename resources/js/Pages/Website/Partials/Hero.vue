<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    hero: Object
})
</script>
<template>
    <!-- <section class="bg-white dark:bg-gray-900 w-full mx-auto max-w-screen-xl px-4 sm:py-8 lg:px-6 my-4">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h3
                    class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white">
                    {{ props.hero.title }}
                </h3>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8  dark:text-gray-400">
                    {{ props.hero.description }}
                </p>
                <a :href="props.hero.button_url" :target="props.hero.button_target" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {{ props.hero.button_text }}
                </a>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex ">
                <img :src="props.hero.full_path_image" class="shadow-lg" alt="Hero Image">
            </div>
        </div>
    </section> -->

    <!-- Fascilities -->
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="flex gap-3  justify-center mx-auto">
                <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                <p class="text-2xl font-semibold">OUR</p>
            </div>
            <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                FASCI <span class="text-red-700">LITIES</span>
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img class="w-full" src="https://picsum.photos/seed/picsum/580/520" alt="">
                <div class="">
                    <p class="text-justify text-gray-600 leading-8">
                        সিটি পলিটেকনিক ইনস্টিটিউ এর প্রতিষ্ঠাকাল থেকে মানসম্মত সুশিক্ষা বিস্তারে কাজ করে আসছে। অত্র
                        ইনস্টিটিউটের একজন শিক্ষার্থীকে তাত্ত্বিক ও ব্যবহারিক শিক্ষার পাশাপাশি তার ক্যারিয়ার ও
                        যুগোপযোগী
                        করে গড়ে তোলার জন্য যত্নসহকারে পরিচর্যা ও পর্যবেক্ষন করা হয়। শুধুমাত্র সনদ দেওয়াই নয় বরং
                        শিক্ষার্থীকে একজন সুন্দর মানুষ গড়ার কারিগর হিসেবে কাজ করছে সিটি পলিটেকনিক ইনস্টিটিউট। সিটি
                        পলিটেকনিক ইনস্টিটিউট দক্ষিন তথা দক্ষিন পশ্চিমাঞ্চলের সর্বপ্রথম ও সেরা এবং দেশের শীর্ষস্থানীয়
                        একটি বেসরকারি পলিটেকনিক ইনস্টিটিউট।
                    </p>
                    <div class="grid grid-cols-3 gap-6 pt-8">
                        <div class="text-center  pb-4">
                            <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility1.png" alt="">
                            <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                        </div>
                        <div class="text-center  pb-4">
                            <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility2.png" alt="">
                            <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                        </div>
                        <div class="text-center  pb-4">
                            <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility3.png" alt="">
                            <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                        </div>
                        <div class="text-center  pb-4">
                            <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility4.png" alt="">
                            <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                        </div>
                        <div class="text-center  pb-4">
                            <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility5.png" alt="">
                            <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                        </div>
                        <div class="text-center  pb-4">
                            <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility6.png" alt="">
                            <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Fascilities -->
</template>
