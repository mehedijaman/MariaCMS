<script setup></script>
<template>
    <script setup>
        import { onMounted } from "vue";
    // import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";
    // import PrimaryButton from "@/Components/PrimaryButton.vue";
    // import SecondaryButton from "@/Components/SecondaryButton.vue";
    // import Hero from './Partials/Hero.vue';
    // import Home from "./Partials/Home.vue";
    // import Slider from './Partials/Slider.vue';
    // import FAQ from "./Partials/FAQ.vue";
    // import LatestPosts from "./Partials/LatestPosts.vue";
    // import Feature from "./Partials/Feature.vue";
    // import CTA from "./Partials/CTA.vue";
    // import News from "./Partials/News.vue";
    // import { Link } from "@inertiajs/vue3";
    // import FeaturedProducts from "./Product/FeaturedProducts.vue";
    // import TestimonialSection from "./Partials/TestimonialSection.vue";

    // const props = defineProps({
    //     title: String,
    //     data: Object
    // });

    onMounted(() => {
        initFlowbite();
    });
    </script>
    <template>
        <!-- <WebsiteLayout :title="props.title">
        <Slider v-if="$page.props.app.setting.slider_enabled && props.data.slider" :slides="props.data.slider.items"></Slider>
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <Hero v-if="$page.props.app.setting.hero_enabled" :hero="props.data.hero"></Hero>
            <Home v-if="$page.props.app.setting.homepage_enabled" :homepage="props.data.homepage"></Home>
            <Feature v-if="$page.props.app.setting.feature_enabled" :features="props.data.features"></Feature>
            <CTA v-if="$page.props.app.setting.cta_enabled" :cta="props.data.cta"></CTA>
            <FeaturedProducts v-if="$page.props.app.setting.featured_product_enabled" :products="props.data.featured_products"></FeaturedProducts>
            <FAQ v-if="$page.props.app.setting.faq_enabled" :faqs="props.data.faqs"></FAQ>
            <News v-if="$page.props.app.setting.news_enabled" :news="props.data.news"></News>
            <LatestPosts v-if="$page.props.app.setting.blog_enabled" :posts="props.data.latest_posts"></LatestPosts>
            <TestimonialSection v-if="$page.props.app.setting.testimonial_enabled" :testimonials="props.data.testimonials"></TestimonialSection>
        </section>
    </WebsiteLayout> -->

        <div class="bg-gray-100">
            <!--Topbar-->
            <section class="bg-[#49688E]">
                <div class="mx-auto max-w-7xl px-4">
                    <div class="flex flex-col md:flex-row justify-between">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>
                            <p class=" text-slate-200">Lorem ipsum dolor</p>
                        </div>

                        <div class="flex justify-center md:justify-end px-2 border-t md:border-none">
                            <div>
                                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover"
                                    data-dropdown-trigger="hover"
                                    class="text-white font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                                    type="button">
                                    English
                                </button>
                                <!-- Dropdown menu -->
                                <div id="dropdownHover"
                                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700">
                                    <ul class="text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownHoverButton">
                                        <li>
                                            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                href="https://anjinmetalindustries.com/set-locale/en">
                                                <div class="inline-flex items-center gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"
                                                            class="h-4 w-6">
                                                            <!-- Blue rectangle (Union) -->
                                                            <rect width="300" height="200" fill="#3C3B6E"></rect>

                                                            <!-- White stripes -->
                                                            <rect width="600" height="40" y="40" fill="#fff"></rect>
                                                            <rect width="600" height="40" y="120" fill="#fff"></rect>
                                                            <rect width="600" height="40" y="200" fill="#fff"></rect>
                                                            <rect width="600" height="40" y="280" fill="#fff"></rect>

                                                            <!-- Red stripes -->
                                                            <rect width="600" height="40" y="80" fill="#FF0000"></rect>
                                                            <rect width="600" height="40" y="160" fill="#FF0000"></rect>
                                                            <rect width="600" height="40" y="240" fill="#FF0000"></rect>

                                                            <!-- Stars (simplified representation) -->
                                                            <circle cx="30" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="90" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="150" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="210" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="270" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="30" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="90" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="150" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="210" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="270" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="30" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="90" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="150" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="210" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="270" cy="110" r="5" fill="#fff"></circle>
                                                        </svg>
                                                    </span>
                                                    English
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                href="https://anjinmetalindustries.com/set-locale/en">
                                                <div class="inline-flex items-center gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"
                                                            class="h-4 w-6">
                                                            <!-- Blue rectangle (Union) -->
                                                            <rect width="300" height="200" fill="#3C3B6E"></rect>

                                                            <!-- White stripes -->
                                                            <rect width="600" height="40" y="40" fill="#fff"></rect>
                                                            <rect width="600" height="40" y="120" fill="#fff"></rect>
                                                            <rect width="600" height="40" y="200" fill="#fff"></rect>
                                                            <rect width="600" height="40" y="280" fill="#fff"></rect>

                                                            <!-- Red stripes -->
                                                            <rect width="600" height="40" y="80" fill="#FF0000"></rect>
                                                            <rect width="600" height="40" y="160" fill="#FF0000"></rect>
                                                            <rect width="600" height="40" y="240" fill="#FF0000"></rect>

                                                            <!-- Stars (simplified representation) -->
                                                            <circle cx="30" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="90" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="150" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="210" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="270" cy="30" r="5" fill="#fff"></circle>
                                                            <circle cx="30" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="90" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="150" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="210" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="270" cy="70" r="5" fill="#fff"></circle>
                                                            <circle cx="30" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="90" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="150" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="210" cy="110" r="5" fill="#fff"></circle>
                                                            <circle cx="270" cy="110" r="5" fill="#fff"></circle>
                                                        </svg>
                                                    </span>
                                                    English
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="flex text-slate-200  text-lg justify-center ">
                                <a href="#" class="border-x py-2 px-2">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>

                                <a href="#" class="border-r py-2 px-2">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"
                                        height="100" viewBox="0 0 48 48">
                                        <path fill="#f44336"
                                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z">
                                        </path>
                                        <path fill="#fff"
                                            d="M36.499,25.498c-0.276-0.983-1.089-1.758-2.122-2.021C32.506,23,24,23,24,23s-8.506,0-10.377,0.478 c-1.032,0.263-1.846,1.037-2.122,2.021C11,27.281,11,31,11,31s0,3.719,0.501,5.502c0.276,0.983,1.089,1.758,2.122,2.021 C15.494,39,24,39,24,39s8.505,0,10.377-0.478c1.032-0.263,1.846-1.037,2.122-2.021C37,34.719,37,31,37,31S37,27.281,36.499,25.498z">
                                        </path>
                                        <path fill="#f44336"
                                            d="M16.333 37L14.667 37 14.667 26.655 13 26.655 13 25 18 25 18 26.655 16.333 26.655zM23 37h-1.5l-.167-1.132C20.675 36.579 19.892 37 19.283 37c-.533 0-.908-.231-1.092-.653C18.083 36.083 18 35.687 18 35.092V27.5h1.667v7.757c.042.24.217.33.433.33.333 0 .867-.363 1.233-.843V27.5H23V37zM35 32.663v-2.701c0-.777-.192-1.338-.533-1.702-.458-.496-1.117-.76-1.942-.76-.842 0-1.492.264-1.967.76C30.2 28.623 30 29.218 30 29.995v4.593c0 .768.225 1.313.575 1.669C31.05 36.752 31.7 37 32.567 37c.858 0 1.533-.256 1.983-.785.2-.231.333-.496.392-.785C34.95 35.298 35 34.943 35 34.522h-1.667v.661c0 .38-.375.694-.833.694s-.833-.314-.833-.694v-2.52H35zM31.667 29.392c0-.388.375-.694.833-.694s.833.306.833.694v2.123h-1.667V29.392zM28.783 28.492c-.208-.646-.717-1.001-1.35-1.01-.808-.008-1.142.414-1.767 1.142V25H24v12h1.5l.167-1.034C26.192 36.611 26.875 37 27.433 37c.633 0 1.175-.331 1.383-.977.1-.348.175-.67.183-1.399V30.28C29 29.461 28.892 28.84 28.783 28.492zM27.333 34.41c0 .869-.2 1.167-.65 1.167-.258 0-.75-.174-1.017-.439v-5.686c.267-.265.758-.521 1.017-.521.45 0 .65.273.65 1.142V34.41z">
                                        </path>
                                        <path fill="#fff"
                                            d="M15 9l1.835.001 1.187 5.712.115 0 1.128-5.711 1.856-.001L19 16.893V21h-1.823l-.003-3.885L15 9zM21.139 14.082c0-.672.219-1.209.657-1.606.437-.399 1.024-.6 1.764-.601.675 0 1.225.209 1.655.63.429.418.645.96.645 1.622l.003 4.485c0 .742-.209 1.326-.63 1.752C24.812 20.788 24.234 21 23.493 21c-.714 0-1.281-.221-1.712-.656-.428-.435-.64-1.023-.641-1.76l-.003-4.503L21.139 14.082 21.139 14.082zM22.815 18.746c0 .236.057.423.178.553.115.128.279.193.495.193.221 0 .394-.066.524-.201.129-.129.196-.314.196-.547l-.003-4.731c0-.188-.069-.342-.201-.459-.131-.116-.305-.175-.519-.175-.199 0-.361.06-.486.176-.124.117-.186.271-.186.459L22.815 18.746zM32 12v9h-1.425l-.227-1.1c-.305.358-.622.63-.953.815C29.067 20.901 28.747 21 28.437 21c-.384 0-.671-.132-.866-.394-.195-.259-.291-.65-.291-1.174L27.276 12h1.653l.004 6.825c0 .204.036.355.106.449.066.09.183.14.335.14.124 0 .278-.062.46-.186.188-.122.358-.281.512-.471L30.344 12 32 12z">
                                        </path>
                                    </svg>
                                </a>

                                <a href="#" class="border-r py-2 px-2">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>
                                </a>
                            </div>

                            <button id="dropdownHoverButton1" data-dropdown-toggle="dropdownHover1"
                                data-dropdown-trigger="hover"
                                class="text-white font-medium inline-flex items-center pl-2 hover:text-gray-600"
                                type="button">
                                Quick Link
                                <p class="bg-yellow-300 ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-5 h-5">
                                        <path fill-rule="evenodd"
                                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </p>
                            </button>

                            <!-- Dropdown menu -->
                            <div id="dropdownHover1"
                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700"
                                style="transform: translate3d(1252px, 42.8px, 0px);">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownHoverButton1">
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Student
                                            Panel</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Blog</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /Topbar-->

            <!--Banner-->
            <section class=" bg-[#294A70]">
                <div class="mx-auto max-w-7xl p-4 md:py-6">
                    <div class="flex flex-col md:flex-row gap-4 md:justify-between">
                        <div class="flex flex-col md:flex-row gap-4 items-center">
                            <img src="/images/logo1.png" class="h-14 w-auto" alt="">
                            <div class="text-slate-200 flex flex-col text-center md:text-left">
                                <a href="/" class="text-xl md:text-3xl font-bold">City Polytechnic Institute Khulna</a>
                                <p class="text-xs md:text-sm">Govt. approved Khulna's first and largest private polytechnic
                                    Institute</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-2 md:gap-4 px-2 text-slate-200">
                            <div class="flex justify-start items-center gap-2">
                                <svg class="w-4 md:w-6 h-4 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <div class="flex md:flex-col gap-2 md:gap-0 items-center md:items-start">
                                    <h6 class="text-md font-semibold">Phone</h6>
                                    <span class="text-sm">01711 018623</span>
                                </div>
                            </div>
                            <div class="flex justify-start items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 md:w-6 h-4 md:h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                </svg>
                                <div class="flex md:flex-col gap-2 md:gap-0 items-center md:items-start">
                                    <h6 class="text-md font-semibold">Email</h6>
                                    <span>cpikhulna2003@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /Banner-->

            <!--Navbar-->
            <nav class="bg-white border-b-4 border-[#ffab1f] z-9 sticky top-0">
                <div class="max-w-7xl mx-auto px-4 py-2 md:py-0">
                    <div class="flex flex-col md:flex-row items-center justify-between">
                        <div
                            class="flex items-center w-full md:w-auto justify-between md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                            <div class="flex items-center gap-2">
                                <button type="button"
                                    class="inline-flex items-end font-medium justify-end px-4 py-2 text-sm text-gray-900 dark:text-white rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                </button>

                                <form>
                                    <div class="flex">
                                        <div class="relative w-full">
                                            <input type="search" id="location-search"
                                                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-full rounded-s-full border border-gray-3000"
                                                placeholder="Search..." required>
                                            <button type="submit"
                                                class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-full border border-blue-700 hover:bg-blue-800 ">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                                <span class="sr-only">Search</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <button data-collapse-toggle="navbar-primary" type="button"
                                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-primary" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>

                        <div class="items-center hidden w-full md:w-auto md:flex md:order-1" id="navbar-primary">
                            <ul
                                class="flex flex-col gap-2 font-medium border border-gray-100 rounded-sm bg-gray-50  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#"
                                        class="hover:bg-[#ffab1f] hover:text-white block px-2 py-3 text-base font-medium"
                                        aria-current="page">Home</a>
                                </li>

                                <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                        class="font-medium w-full md:w-auto text-base px-2 py-3 text-center inline-flex items-center hover:bg-[#ffab1f] hover:text-white">Department
                                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdownNavbar"
                                        class="z-10 hidden font-medium bg-white rounded-sm shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="text-base text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">Computer</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- /Navbar-->


            <!-- Slider -->
            <div class="h-96 bg-no-repeat bg-center bg-cover" style="background-image: url(./images/Main-Building.jpg);">
                <div class="mx-auto max-w-7xl">
                    <div class="">
                        <h6 class="pt-32 pb-4">স্থাপিতঃ ২০০৩ ইং</h6>
                        <h1 class="text-4xl text-gray-900">আমাদের সফলতার <span class="text-red-700"> ২১ বছর</span></h1>
                        <p>প্রতিষ্ঠান কোডঃ ৩৫০৪৭</p>
                        <button class="px-3 py-2 border bg-gray-400 hover:bg-gray-600 text-white ">Apply Online Now</button>
                    </div>
                </div>
            </div>
            <!-- /Slider -->

            <!-- Services -->
            <div class="bg-white">
                <div class="max-w-7xl mx-auto px-4 py-12">
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        ABOUT <span class="text-red-700">US</span>
                    </h1>
                    <div class="md:grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                        <div class="shadow-lg pb-6 mt-5 bg-white">
                            <img class="h-48 w-full" src="/images/1.jpeg">
                            <div class="px-4">
                                <div class="border-b-2 mb-4 pb-4">
                                    <h1 class=" text-2xl pt-4 pb-2 text-gray-700 font-bold text-center">আমাদের কথা</h1>
                                    <p class="h-48 text-base text-justify">
                                        বর্তমান যুগ বিজ্ঞান ও প্রযুক্তির যুগ । এ
                                        শতাব্দীতে
                                        বিজ্ঞান ও তথ্য প্রযুক্তির ক্ষেত্রে যে উন্নতি সাধিত হয়েছে তা সমগ্র বিশ্বকে একটি
                                        গ্লোবাল
                                        ভিলেজে পরিণত করেছে । আজকের এ বিশ্ব প্রতিযোগিতায় টিকে থেকে অর্থনৈতিক যুদ্ধে জয়ী হতে
                                        হলে
                                        আমাদের তরুণদের…
                                    </p>
                                </div>
                                <button
                                    class="flex gap-2 py-2 px-4 border bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="shadow-lg pb-6 mt-5 bg-white">
                            <img class="h-48 w-full" src="/images/1.jpeg">
                            <div class="px-4">
                                <div class="border-b-2 mb-4 pb-4">
                                    <h1 class=" text-2xl pt-4 pb-2 text-gray-700 font-bold text-center">আমাদের কথা</h1>
                                    <p class="h-48 text-base text-justify">
                                        বর্তমান যুগ বিজ্ঞান ও প্রযুক্তির যুগ । এ
                                        শতাব্দীতে
                                        বিজ্ঞান ও তথ্য প্রযুক্তির ক্ষেত্রে যে উন্নতি সাধিত হয়েছে তা সমগ্র বিশ্বকে একটি
                                        গ্লোবাল
                                        ভিলেজে পরিণত করেছে । আজকের এ বিশ্ব প্রতিযোগিতায় টিকে থেকে অর্থনৈতিক যুদ্ধে জয়ী হতে
                                        হলে
                                        আমাদের তরুণদের…
                                    </p>
                                </div>
                                <button
                                    class="flex gap-2 py-2 px-4 border bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="shadow-lg pb-6 mt-5 bg-white">
                            <img class="h-48 w-full" src="/images/1.jpeg">
                            <div class="px-4">
                                <div class="border-b-2 mb-4 pb-4">
                                    <h1 class=" text-2xl pt-4 pb-2 text-gray-700 font-bold text-center">আমাদের কথা</h1>
                                    <p class="h-48 text-base text-justify">বর্তমান যুগ বিজ্ঞান ও প্রযুক্তির যুগ । এ
                                        শতাব্দীতে
                                        বিজ্ঞান ও তথ্য প্রযুক্তির ক্ষেত্রে যে উন্নতি সাধিত হয়েছে তা সমগ্র বিশ্বকে একটি
                                        গ্লোবাল
                                        ভিলেজে পরিণত করেছে । আজকের এ বিশ্ব প্রতিযোগিতায় টিকে থেকে অর্থনৈতিক যুদ্ধে জয়ী হতে
                                        হলে
                                        আমাদের তরুণদের…
                                    </p>
                                </div>
                                <button
                                    class="flex gap-2 py-2 px-4 border bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="shadow-lg pb-6 mt-5 bg-white">
                            <img class="h-48 w-full" src="/images/1.jpeg">
                            <div class="px-4">
                                <div class="border-b-2 mb-4 pb-4">
                                    <h1 class=" text-2xl pt-4 pb-2 text-gray-700 font-bold text-center">আমাদের কথা</h1>
                                    <p class="h-48 text-base text-justify">
                                        বর্তমান যুগ বিজ্ঞান ও প্রযুক্তির যুগ । এ
                                        শতাব্দীতে
                                        বিজ্ঞান ও তথ্য প্রযুক্তির ক্ষেত্রে যে উন্নতি সাধিত হয়েছে তা সমগ্র বিশ্বকে একটি
                                        গ্লোবাল
                                        ভিলেজে পরিণত করেছে । আজকের এ বিশ্ব প্রতিযোগিতায় টিকে থেকে অর্থনৈতিক যুদ্ধে জয়ী হতে
                                        হলে
                                        আমাদের তরুণদের…
                                    </p>
                                </div>
                                <button
                                    class="flex gap-2 py-2 px-4 border bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Services -->

            <!-- Departments -->
            <div class="bg-inherit">
                <div class="max-w-7xl mx-auto px-4 py-12">
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        OUR <span class="text-red-700">DEPARTMENTS</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        <div class="shadow-lg rounded-sm bg-white pb-6">
                            <img class="items-center mx-auto" src="/images/Picture.png" alt="">
                            <h4 class="text-center text-xl font-bold py-4 border-b-2 mb-4 text-gray-800">
                                Electronics Technology
                            </h4>
                            <button
                                class="flex gap-2 py-2 px-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </div>

                        <div class="shadow-lg rounded-sm bg-white pb-6">
                            <img class="items-center mx-auto" src="/images/Picture.png" alt="">
                            <h4 class="text-center text-xl font-bold py-4 border-b-2 mb-4 text-gray-800">
                                Refrigeration & Air Conditioning Technology
                            </h4>
                            <button
                                class="flex gap-2 py-2 px-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </div>

                        <div class="shadow-lg rounded-sm bg-white pb-6">
                            <img class="items-center mx-auto" src="/images/Picture.png" alt="">
                            <h4 class="text-center text-xl font-bold py-4 border-b-2 mb-4 text-gray-800">
                                Telecommunication Technology
                            </h4>
                            <button
                                class="flex gap-2 py-2 px-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </div>

                        <div class="shadow-lg rounded-sm bg-white pb-6">
                            <img class="items-center mx-auto" src="/images/Picture.png" alt="">
                            <h4 class="text-center text-xl font-bold py-4 border-b-2 mb-4 text-gray-800">
                                Mechanical Technology
                            </h4>
                            <button
                                class="flex gap-2 py-2 px-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                                Read More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Departments -->

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
                                    <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility1.png"
                                        alt="">
                                    <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                                </div>
                                <div class="text-center  pb-4">
                                    <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility2.png"
                                        alt="">
                                    <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                                </div>
                                <div class="text-center  pb-4">
                                    <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility3.png"
                                        alt="">
                                    <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                                </div>
                                <div class="text-center  pb-4">
                                    <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility4.png"
                                        alt="">
                                    <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                                </div>
                                <div class="text-center  pb-4">
                                    <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility5.png"
                                        alt="">
                                    <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                                </div>
                                <div class="text-center  pb-4">
                                    <img class="h-24 w-auto items-center justify-center mx-auto" src="/images/facility6.png"
                                        alt="">
                                    <h4 class="text-gray-800 font-bold md:text-xl">Higher Education</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Fascilities -->

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
                                <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility1.png"
                                    alt="">
                                <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                                <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                            </div>
                            <div class="border text-center bg-white shadow-lg">
                                <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility2.png"
                                    alt="">
                                <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                                <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                            </div>
                            <div class="border text-center bg-white shadow-lg">
                                <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility4.png"
                                    alt="">
                                <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                                <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                            </div>
                            <div class="border text-center bg-white shadow-lg">
                                <img class="justify-center items-center mx-auto h-28 pt-2" src="/images/facility6.png"
                                    alt="">
                                <h6 class="font-bold text-4xl text-red-600 pt-6 pb-3">9,000</h6>
                                <p class="font-semibold text-xl text-gray-800 pb-4">Student's</p>
                            </div>
                        </div>

                        <img class="w-full" src="https://picsum.photos/seed/picsum/580/520" alt="">
                    </div>
                </div>
            </div>
            <!-- /Why Us -->

            <!-- FAQ -->
            <div class="bg-white">
                <div class="max-w-7xl mx-auto px-4 py-12">
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        Frequently Asked <span class="text-red-600">QUESTIONS</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 p-8">
                        <img src="/images/faq.png" class="h-72 w-auto mx-auto" alt="">
                        <div class="w-full">
                            <div id="accordion-color" data-accordion="collapse"
                                data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                                <h2 id="accordion-color-heading-1">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-4 font-medium rtl:text-right border border-b-1 border-gray-200 rounded-t-sm  focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
                                        data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                                        aria-controls="accordion-color-body-1">
                                        <span>What is Flowbite?</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                                    <div
                                        class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library
                                            of
                                            interactive components built on top of Tailwind CSS including buttons,
                                            dropdowns,
                                            modals, navbars, and more.</p>
                                        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                                                href="/docs/getting-started/introduction/"
                                                class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and
                                            start
                                            developing websites even faster with components on top of Tailwind CSS.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /FAQ -->

            <!-- News & Events -->
            <div clsss="bg-inherit">
                <div class="max-w-7xl mx-auto px-4 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                                NEWS AND <span class="text-red-600">EVENTS</span>
                            </h1>
                            <div class="flex flex-col gap-1">
                                <div
                                    class="flex justify-start items-center bg-gray-50 rounded-sm border-y-2 border-gray-400">
                                    <div class=" px-4 text-gray-500 text-center py-2">
                                        <p class="font-semibold text-base">Feb</p>
                                        <p class="text-yellow-300 text-2xl font-bold">05</p>
                                        <p class="font-semibold  text-base">2024</p>
                                    </div>
                                    <div class="px-2 ">
                                        <h5 class="text-gray-600 font-semibold md:text-base">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit.</h5>
                                        <p class="text-sm font-light text-gray-500 md:py-1">Organizer: <span>Lorem ipsum
                                                dolor
                                                sit
                                                amet.</span></p>
                                        <p class="flex justify-start items-center text-gray-400 font-light text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            103 BIDC Road Khalishpur, Khulna</p>
                                    </div>
                                </div>
                                <div
                                    class="flex justify-start items-center bg-gray-50 rounded-sm border-b-2 border-gray-400">
                                    <div class=" px-4 text-gray-500 text-center py-2">
                                        <p class="font-semibold text-base">Feb</p>
                                        <p class="text-yellow-300 text-2xl font-bold">05</p>
                                        <p class="font-semibold  text-base">2024</p>
                                    </div>
                                    <div class="px-2">
                                        <h5 class="text-gray-600 font-semibold text-base">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit.</h5>
                                        <p class="text-sm font-light text-gray-500 py-1">Organizer: <span>Lorem ipsum dolor
                                                sit
                                                amet.</span></p>
                                        <p class="flex justify-start items-center text-gray-400 font-light text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            103 BIDC Road Khalishpur, Khulna</p>
                                    </div>
                                </div>
                                <div
                                    class="flex justify-start items-center bg-gray-50 rounded-sm border-b-2 border-gray-400">
                                    <div class=" px-4 text-gray-500 text-center py-2">
                                        <p class="font-semibold text-base">Feb</p>
                                        <p class="text-yellow-300 text-2xl font-bold">05</p>
                                        <p class="font-semibold  text-base">2024</p>
                                    </div>
                                    <div class="px-2">
                                        <h5 class="text-gray-600 font-semibold text-base">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit.</h5>
                                        <p class="text-sm font-light text-gray-500 py-1">Organizer: <span>Lorem ipsum dolor
                                                sit
                                                amet.</span></p>
                                        <p class="flex justify-start items-center text-gray-400 font-light text-sm"><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            103 BIDC Road Khalishpur, Khulna</p>
                                    </div>
                                </div>
                                <button
                                    class="flex gap-2 py-2 px-4 mt-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">View
                                    All<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                                LATEST <span class="text-red-600">NOTICE</span>
                            </h1>
                            <div class="flex flex-col gap-1">
                                <div
                                    class="flex justify-start items-center bg-gray-50 shadow-md rounded-sm border-2 border-gray-400">
                                    <div class=" px-6 text-gray-500 bg-[#253b80] text-center py-2">
                                        <p class="font-semibold text-gray-300 text-base">Feb</p>
                                        <p class="text-yellow-300 text-2xl font-bold">05</p>
                                        <p class="font-semibold text-gray-300  text-base">2024</p>
                                    </div>
                                    <div class="px-2">
                                        <h5 class="text-gray-600 font-semibold text-base">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit.</h5>
                                    </div>
                                </div>
                                <div
                                    class="flex justify-start items-center bg-gray-50 shadow-md  rounded-sm border-2 border-gray-400">
                                    <div class=" px-6 text-gray-500 bg-[#253b80] text-center py-2">
                                        <p class="font-semibold text-gray-300 text-base">Feb</p>
                                        <p class="text-yellow-300 text-2xl font-bold">05</p>
                                        <p class="font-semibold text-gray-300  text-base">2024</p>
                                    </div>
                                    <div class="px-2">
                                        <h5 class="text-gray-600 font-semibold text-base">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit.</h5>
                                    </div>
                                </div>
                                <div
                                    class="flex justify-start items-center bg-gray-50 shadow-md  rounded-sm border-2 border-gray-400">
                                    <div class=" px-6 text-gray-500 bg-[#253b80] text-center py-2">
                                        <p class="font-semibold text-gray-300 text-base">Feb</p>
                                        <p class="text-yellow-300 text-2xl font-bold">05</p>
                                        <p class="font-semibold text-gray-300  text-base">2024</p>
                                    </div>
                                    <div class="px-2">
                                        <h5 class="text-gray-600 font-semibold text-base">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit.</h5>
                                    </div>
                                </div>
                                <button
                                    class="flex gap-2 py-2 px-4 mt-4 border justify-center mx-auto bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">View
                                    All<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /News & Events -->

            <!-- Testimonials-->
            <div class="bg-white">
                <div class="max-w-7xl mx-auto px-4 py-12 bg-white">
                    <div class="flex gap-3  justify-center mx-auto">
                        <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                        <p class="text-xl text-gray-400 font-semibold">OPINIONS</p>
                    </div>
                    <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                        STUDENTS <span class="text-red-700">OPINIONS</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            class="flex flex-col rounded-sm p-8 justify-center items-center text-center bg-gray-50 border-b border-gray-200 border-r text-gray-500 shadow-md mb-4">
                            <img class="w-32 h-32 rounded-full " src="/images/user-1.png" alt="">
                            <div class="flex items-center mx-auto py-4 pb-4">
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <p class="text-justify text-gray-500 h-48">Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit.
                                Quibusdam, id ipsam iusto officia, doloribus, eaque iure vel suscipit placeat </p>
                            <h6 class="pt-6 pb-2 text-gray-700 font-bold" href="#">আবুল হাসান</h6>
                            <p class="text-sm font-light text-gray-500">ছাত্র</p>
                        </div>
                        <div
                            class="flex flex-col rounded-sm p-8 justify-center items-center text-center bg-gray-50 border-b border-gray-200 border-r text-gray-500 shadow-md mb-4">
                            <img class="w-32 h-32 rounded-full " src="/images/user-1.png" alt="">
                            <div class="flex items-center mx-auto py-4 pb-4">
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <p class="text-justify text-gray-500 h-48">Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit.
                                Quibusdam, id ipsam iusto officia, doloribus, eaque iure vel suscipit placeat </p>
                            <h6 class="pt-6 pb-2 text-gray-700 font-bold" href="#">আবুল হাসান</h6>
                            <p class="text-sm font-light text-gray-500">ছাত্র</p>
                        </div>
                        <div
                            class="flex flex-col rounded-sm p-8 justify-center items-center text-center bg-gray-50 border-b border-gray-200 border-r text-gray-500 shadow-md mb-4">
                            <img class="w-32 h-32 rounded-full " src="/images/user-1.png" alt="">
                            <div class="flex items-center mx-auto py-4 pb-4">
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 text-yellow-300 ms-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-6 h-6 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <p class="text-justify text-gray-500 h-48">Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit.
                                Quibusdam, id ipsam iusto officia, doloribus, eaque iure vel suscipit placeat </p>
                            <h6 class="pt-6 pb-2 text-gray-700 font-bold" href="#">আবুল হাসান</h6>
                            <p class="text-sm font-light text-gray-500">ছাত্র</p>
                        </div>
                    </div>
                    <div class="text-center pt-4">
                        <button class="px-4 py-2 font-semibold bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200">
                            Show all Testimonials
                        </button>
                    </div>
                </div>
            </div>
            <!-- /Testimonials -->

            <!-- Videos -->
            <div class="bg-inherit">
                <div class="max-w-7xl mx-auto px-4 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <iframe class="w-full" src="https://www.youtube.com/embed/yUJewGkHYjE" frameborder="0"></iframe>
                        </div>
                        <div>
                            <iframe class="w-full" src="https://www.youtube.com/embed/ns7RirUkUig" frameborder="0"></iframe>
                        </div>
                        <div>
                            <iframe class="w-full" src="https://www.youtube.com/embed/ns7RirUkUig" frameborder="0"></iframe>
                        </div>
                        <div>
                            <iframe class="w-full" src="https://www.youtube.com/embed/ns7RirUkUig" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Videos-->

            <!-- Footer -->
            <div>
                <div class="py-6 bg-[#294A70] border-t-4 border-[#ffab1f]">
                    <div class="mx-auto max-w-7xl">
                        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 gap-4 text-white">
                            <div class="p-2 border-r border-dashed">
                                <h1 class="font-semibold text-base">সিটি পলিটেকনিক ইনস্টিটিউট খুলনা</h1>
                                <div class="pt-4">
                                    <ul>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                ১০৩ বিআইডিসি রোড, খালিশপুর, খুলনা
                                            </a></li>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                01750154334, 0171101862</a></li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                cpikhulna2003@gmail.com</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                www.cpik.ac.bd</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="p-2 border-r border-dashed">
                                <h1 class="font-semibold text-base">নিউ সিটি নার্সিং ইনস্টিটিউট খুলনা</h1>
                                <div class="pt-4">
                                    <ul>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                বাংলাদেশ নার্সিং এন্ড
                                            </a></li>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                মিডওয়াইফারি কাউন্সিল(BNMC) অনুমোদিত</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                www.ncnik.ac.bd</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="p-2 border-r border-dashed">
                                <h1 class="font-semibold text-base">গুরুত্বপূর্ণ লিঙ্ক</h1>
                                <div class="pt-4">
                                    <ul>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                বাংলাদেশ কারিগরি শিক্ষা বোর্ড
                                            </a></li>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                কারিগরি শিক্ষা অধিদপ্তর</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                শিক্ষা মন্ত্রনালয়</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                পরিচালকের কার্যালয়,খুলনা (RDO)</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                অনলাইন পুলিশ ক্লিয়ারেন্স</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                জন্ম ও মৃত্যু নিবন্ধন</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                আরও দেখুন...</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="p-2">
                                <h1 class="font-semibold text-base">শিক্ষাবোর্ডের ফলাফল</h1>
                                <div class="pt-4">
                                    <ul>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                ডিপ্লোমা ইন ইঞ্জিনিয়ারিং রেজাল্ট
                                            </a></li>
                                        <li class="pb-2"><a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                শিক্ষাবোর্ডের ফলাফল-টেলিটক</a></li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                শিক্ষাবোর্ডের ফলাফল-ওয়েব</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                জাতীয় বিশ্ববিদ্যালয়ের ফলাফল</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                প্রাইমারি সমাপনী পরীক্ষার ফলাফল </a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                উন্মুক্ত বিশ্ববিদ্যালয়ের ফলাফল</a>
                                        </li>
                                        <li class="pb-2">
                                            <a href="#"
                                                class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                এনটিআরসিএ পরীক্ষার ফলাফল</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--start coppyright section-->
                <div class="bg-[#15305B] py-8">
                    <div class="mx-auto max-w-7xl text-center ">
                        <ul class="flex gap-2 justify-center pb-2">
                            <li class="px-4 py-2"><a class="text-gray-300 hover:text-gray-500 text-base" href="#">Home</a>
                            </li>
                            <li class=" py-2"><a class="border-l px-2 text-gray-300 hover:text-gray-500 text-base"
                                    href="#">Gallery</a></li>
                            <li class=" py-2"><a class="border-l px-2 text-gray-300 hover:text-gray-500 text-base"
                                    href="#">Contact</a></li>
                            <li class=" py-2"><a class="border-l px-2 text-gray-300 hover:text-gray-500 text-base"
                                    href="#">Sitemap</a></li>
                        </ul>
                        <h4 class="text-gray-300 text-lg">কপিরাইট©২০২২ সিটি পলিটেকনিক ইনস্টিটিউট খুলনা</h4>
                </div>
            </div>

        </div>
        <!-- /Footer -->
    </div>
</template></template>
