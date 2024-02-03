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
    <!-- <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav> -->

    <header :style="{ backgroundColor: backgroundColor, color: textColor }" :class="data.fixed || data.isOpen
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
                    class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Products
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                    </ul>
                </div>

                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1"
                    class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Applications
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar1"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                    </ul>
                </div>

                <!-- <li>
                    <a v-for="item in primaryMenu?.items" v-bind:class="route().current(item.url) ? 'font-bold text-primary' : ''
                        " :href="item.url" :target="item.target">
                        {{ item.name }}
                    </a>
                </li> -->


                <NavbarLink v-bind:class="route().current('blog.posts') ? 'font-bold text-primary' : ''
                    " :href="route('blog.posts')" :label="lang().label.blog" />

                <NavbarLink v-bind:class="route().current('gallery') ? 'font-bold text-primary' : ''
                    " :href="route('gallery')" :label="lang().label.gallery" />

                <NavbarLink v-bind:class="route().current('contact') ? 'font-bold text-primary' : ''
                    " :href="route('contact')" :label="lang().label.contact" />

                <SwitchDarkMode class="hidden sm:block" />
            </nav>
        </div>
    </header>
</template>
