<script setup>
import { Link } from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import NavbarLink from "@/Components/Website/NavbarLink.vue";
import SwitchDarkMode from "@/Components/SwitchDarkMode.vue";

import { Bars3BottomRightIcon } from "@heroicons/vue/24/outline";
import { reactive, onMounted } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { initFlowbite } from 'flowbite';
import { usePage } from "@inertiajs/vue3";

import {
    ChevronDownIcon,
} from "@heroicons/vue/24/solid";

const backgroundColor = usePage().props.app.setting.navbar_background_color ? usePage().props.app.setting.navbar_background_color : 'white';
const textColor = usePage().props.app.setting.navbar_text_color ? usePage().props.app.setting.navbar_text_color : 'black';


const data = reactive({
    isOpen: false,
    fixed: false,
});

const primaryMenus = usePage().props.menus.filter(menu => menu.position === 'primary');
const primaryMenu = primaryMenus.length > 0 ? primaryMenus[0] : null;

const secondaryMenus = usePage().props.menus.filter(menu => menu.position === 'secondary');
const secondaryMenu = secondaryMenus.length > 0 ? secondaryMenus[0] : null;

const productCategories = usePage().props.product_categories;

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        data.fixed = true;
    } else {
        data.fixed = false;
    }
});

onMounted(() => {
    initFlowbite();
});
</script>
<template>
    <!-- <header :style="{ backgroundColor: backgroundColor, color: textColor }" :class="data.fixed || data.isOpen
        ? 'dark:bg-slate-900/70 backdrop-blur-lg border-b border-slate-300/50 dark:border-slate-700/50 top-0'
        : 'dark:bg-slate-900/70 backdrop-blur-lg border border-slate-300/50 dark:border-slate-700/50'
        " class="w-full fixed text-slate-600  dark:text-slate-200 z-50">
        <div
            class="flex flex-col max-w-7xl px-4 mx-auto sm:items-center sm:justify-between sm:flex-row sm:px-6 lg:px-6 py-2">
            <div class="flex items-center justify-between">
                <div>

                    <Link :href="route('index')" class="shrink-0 flex w-full justify-start items-center space-x-2">
                    <ApplicationLogo v-show="data.fixed || data.isOpen" class="block h-8 w-auto" />
                    <p class="text-lg font-semibold">
                        {{ $page.props.app.setting.short_name }}
                    </p>

                    </Link>
                </div>
                <div class="sm:hidden">
                    <SwitchDarkMode />
                    <button @click="data.isOpen = !data.isOpen"
                        class="inline-flex items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out">
                        <Bars3BottomRightIcon v-if="!data.isOpen" class="w-6 h-auto" />
                        <XMarkIcon v-else class="w-6 h-auto" />
                    </button>
                </div>
            </div>
            <nav :class="data.isOpen ? '' : 'hidden'"
                class="relative sm:flex items-center space-y-2 sm:space-y-0 gap-2 py-4 sm:py-0">
                <NavbarLink v-bind:class="route().current('index') ? 'font-bold text-primary' : ''
                    " :href="route('index')" :label="lang().label.home" />

                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                    class="flex items-center justify-between w-full py-2 px-3 mr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Products
                    <ChevronDownIcon class="w-2.5 h-2.5 ms-1" ></ChevronDownIcon>
                </button>
                <div id="dropdownNavbar"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                        <li v-for="category in productCategories" :key="category.id">
                            <Link :href="route('category.products', { slug: category.slug })"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {{ category.name }}
                            </Link>
                        </li>
                    </ul>
                </div>

                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1"
                    class="flex items-center justify-between w-full py-2 px-3 mr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Applications
                    <ChevronDownIcon class="w-2.5 h-2.5 ms-1" ></ChevronDownIcon>
                </button>
                <div id="dropdownNavbar1"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                    </ul>
                </div>


                <NavbarLink v-bind:class="route().current('blog.posts') ? 'font-bold text-primary' : ''
                    " :href="route('blog.posts')" :label="lang().label.blog" />

                <NavbarLink v-bind:class="route().current('gallery') ? 'font-bold text-primary' : ''
                    " :href="route('gallery')" :label="lang().label.gallery" />

                <NavbarLink v-bind:class="route().current('contact') ? 'font-bold text-primary' : ''
                    " :href="route('contact')" :label="lang().label.contact" />

                <SwitchDarkMode class="hidden sm:block" />
            </nav>
        </div>
    </header> -->

    <!--Navbar-->
    <nav class="bg-white border-b-4 border-[#ffab1f] z-90 sticky top-0">
        <div class="max-w-7xl mx-auto px-4 py-2 md:py-0">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div
                    class="flex items-center w-full md:w-auto justify-between md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <div class="flex items-center gap-2">
                        <button type="button"
                            class="inline-flex items-end font-medium justify-end px-4 py-2 text-sm text-gray-900 dark:text-white rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
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
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div class="items-center hidden w-full md:w-auto md:flex md:order-1" id="navbar-primary">
                    <ul
                        class="flex flex-col gap-2 font-medium border border-gray-100 rounded-sm bg-gray-50  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="hover:bg-[#ffab1f] hover:text-white block px-2 py-3 text-base font-medium"
                                aria-current="page">Home</a>
                        </li>

                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                class="font-medium w-full md:w-auto text-base px-2 py-3 text-center inline-flex items-center hover:bg-[#ffab1f] hover:text-white">Department
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownNavbar"
                                class="z-20 hidden font-medium bg-white rounded-sm shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600">
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
</template>
