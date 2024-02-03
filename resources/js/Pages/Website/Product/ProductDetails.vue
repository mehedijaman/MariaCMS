<script setup>
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import { ref } from "vue";

const props = defineProps({
    product: Object
})

const activeImageURL = ref(props.product.media[0].original_url);
</script>
<template>
    <WebsiteLayout :title="props.title">
        <div class="pb-10 bg-white">

            <div class="bg-gray-100 h-16"></div>
            <div class="lg:grid grid-cols-4 gap-6 px-4 py-8">
                <div class="">
                    <div class="border p-2 rounded-lg">
                        <img class="h-full w-full max-w-full object-cover" :src="activeImageURL" alt="" />
                    </div>
                    <div class="flex gap-2 pt-4">
                        <button @click="activeImageURL = image.original_url" v-for="image in props.product.media"
                            :key="index" type="button"
                            class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                            <img class="w-16 md:w-20 h-auto cursor-pointer border-2 rounded-md  p-2" :src="image.original_url" alt="" />
                        </button>
                    </div>
                </div>
                <div class="col-span-2 ">
                    <h1 class="text-xl py-3 font-bold text-gray-900">{{ props.product.name }}</h1>
                    <div class="bg-gray-100  pt-4 pb-6 rounded-md px-4">
                        <div class="flex justify-between py-3">
                            <p class="flex gap-2 font-bold text-lg text-gray-800">Reference For Price<svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </p>
                            <div class="">
                                <button class="flex gap-2 font-semibold text-blue-700 hover:text-green-500">
                                    Get Latest Price
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="md:flex gap-6 bg-white rounded-md py-4 px-2 font-bold text-red-600 md:text-xl">
                            <h2 class="">US $1200.00-1399.00 <sub class="text-gray-600 font-semibold">/Ton</sub></h2>
                            <h2 class="border-l pl-8"><sub class="text-gray-900 font-semibold">1 Ton<span
                                        class="text-gray-600 font-semibold">(Min.Order)</span></sub></h2>
                        </div>
                    </div>
                    <div class=" shadow-md mt-5 border">
                        <table class="w-full text-md text-left ">
                            <tbody class="">
                                <tr>
                                    <td class="px-4 py-2 font-bold text-gray-400">Grade:</td>
                                    <td class="px-4 py-2 text-gray-900 font-semibold">1000 Series</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 font-bold text-gray-400">Alloy or Not:</td>
                                    <td class="px-4 py-2 text-gray-900 font-semibold">Non-alloy</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 font-bold text-gray-400">Standard:</td>
                                    <td class="px-4 py-2 text-gray-900 font-semibold">IS09001, RoHS, ASTM</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 font-bold text-gray-400">Transport Package:</td>
                                    <td class="px-4 py-2 text-gray-900 font-semibold">as Your Requirements</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 font-bold text-gray-400">Specification</td>
                                    <td class="px-4 py-2 text-gray-900 font-semibold">as Your Requirements</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="pt-4">
                    <div class="border px-2 py-4">
                        <h2 class="text-gray-900 font-bold text-lg px-4 pb-4">Contact Supplier</h2>
                        <button
                            class="flex gap-2 mx-auto justify-center py-2 rounded-md px-8 border bg-blue-100 text-blue-800 "><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                            Send Message
                        </button>
                        <!-- <a href="#" class="flex gap-2 mx-auto justify-center py-4  text-gray-900 font-semibold ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Inquiry Basket
                        </a> -->
                    </div>
                    <div class="border px-4 py-4 bg-gray-50 mt-4">
                        <div class="flex justify-between">
                            <img class="w-20" src="" alt="">
                            <h6>ANJIN Metal Industries</h6>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Description -->
            <div class="p-8">
                <h2 class="text-gray-900 font-bold text-xl pb-4 border-b-2">Description</h2>
                <p class="text-gray-600 p-5 leading-7 text-justify">
                    <span v-html="props.product.description"></span>
                </p>

            </div>
        </div>


        <section class="py-12 sm:py-16">
            <div class="container mx-auto px-4">
                <nav class="flex">
                    <ol role="list" class="flex items-center">
                        <li class="text-left">
                            <div class="-m-1">
                                <a :href="route('index')"
                                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Home </a>
                            </div>
                        </li>

                        <li class="text-left">
                            <div class="flex items-center">
                                <span class="mx-2 text-gray-400">/</span>
                                <div class="-m-1">
                                    <a :href="route('products')"
                                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                        Products </a>
                                </div>
                            </div>
                        </li>

                        <li class="text-left">
                            <div class="flex items-center">
                                <span class="mx-2 text-gray-400">/</span>
                                <div class="-m-1">
                                    <a :href="route('products', { slug: props.product.slug })"
                                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                        aria-current="page"> {{ props.product.name }} </a>
                                </div>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div class="lg:col-span-3 lg:row-end-1">
                        <div class="lg:flex lg:items-start">
                            <div class="lg:order-2 lg:ml-5">
                                <div class="max-w-xl overflow-hidden rounded-lg">
                                    <img class="h-full w-full max-w-full object-cover" :src="activeImageURL" alt="" />
                                </div>
                            </div>

                            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                <div class="flex flex-row items-start lg:flex-col">
                                    <button @click="activeImageURL = image.original_url"
                                        v-for="image in props.product.media" :key="index" type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                        <img class="h-full w-full object-cover" :src="image.original_url" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ product.title }}</h1>



                        <h2 class="mt-8 text-base text-gray-900">Category</h2>
                        <div class="mt-3 flex select-none flex-wrap items-center gap-1">

                            <label class="">
                                <input type="radio" name="type" value="Powder" class="peer sr-only" checked />
                                <p
                                    class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                                    {{ props.product.category.name }}</p>

                            </label>
                        </div>


                    </div>

                    <div class="lg:col-span-3">
                        <div class="border-b border-gray-300">
                            <nav class="flex gap-4">
                                <a href="#" title=""
                                    class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                                    Description </a>
                            </nav>
                        </div>

                        <div class="mt-8 flow-root sm:mt-12">
                            <span v-html="props.product.description"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </WebsiteLayout>
</template>
