<script setup>
import { Link } from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import NavbarLink from "@/Components/Website/NavbarLink.vue";
import SwitchDarkMode from "@/Components/SwitchDarkMode.vue";
import ShoppingCartIcon from "../../Components/ShoppingCartIcon.vue";

import { Bars3BottomRightIcon } from "@heroicons/vue/24/outline";
import { reactive, onMounted } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { initFlowbite } from 'flowbite';
import { usePage } from "@inertiajs/vue3";

import {
    ChevronDownIcon, ChevronRightIcon,
} from "@heroicons/vue/24/solid";

const backgroundColor = usePage().props.app.setting.navbar_background_color ? usePage().props.app.setting.navbar_background_color : 'white';
const textColor = usePage().props.app.setting.navbar_text_color ? usePage().props.app.setting.navbar_text_color : 'black';


const data = reactive({
    isOpen: false,
    fixed: false,
});

// const primaryMenus = usePage().props.menus.filter(menu => menu.position === 'primary');
// const primaryMenu = primaryMenus.length > 0 ? primaryMenus[0] : null;

// const secondaryMenus = usePage().props.menus.filter(menu => menu.position === 'secondary');
// const secondaryMenu = secondaryMenus.length > 0 ? secondaryMenus[0] : null;

// const productCategories = usePage().props.product_categories;

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
    <nav class="bg-white dark:bg-gray-900 border-b-4 border-[#ffab1f] z-50 sticky top-0">
        <div class="max-w-7xl mx-auto px-4 py-2 md:p-0">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div
                    class="flex items-center w-full md:w-auto justify-between md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <div class="flex items-center gap-2">
                        <SwitchDarkMode v-if="$page.props.app.setting.is_dark_mode" />
                        <ShoppingCartIcon></ShoppingCartIcon>
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
                        class="flex flex-col gap-2 font-medium border border-gray-100 rounded-sm  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:text-gray-200 md:dark:bg-gray-900 dark:border-gray-700">
                        <template v-for="item in $page.props.menus.primary?.items" :key="item.id">
                            <template v-if="item.parent_id == null">
                                <li v-if="item.children.length == 0">

                                    <Link :target="item.target" :href="item.url" aria-current="page"
                                        class="hover:bg-[#ffab1f] hover:text-white block px-2 py-3 text-base font-medium">
                                    {{ item.name }}

                                    </Link>
                                </li>

                                <li v-else>
                                    <button id="dropdownNavbarLink" :data-dropdown-toggle="item.name + item.id"
                                        data-dropdown-trigger="hover"
                                        class="font-medium w-full md:w-auto text-base px-2 py-3 text-center inline-flex items-center hover:bg-[#ffab1f] hover:text-white">
                                        {{ item.name }}
                                        <ChevronDownIcon class="w-4 h-4 ms-1 items-center"></ChevronDownIcon>
                                    </button>
                                    <div :id="item.name + item.id"
                                        class="z-20 hidden font-medium bg-white rounded-sm shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="text-base text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownLargeButton">
                                            <template v-for="child in item.children">
                                                <li v-if="child.children.length == 0">

                                                    <Link :href="child.url" :target="child.target"
                                                        class="border-b block px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                                    {{ child.name }}

                                                    </Link>
                                                </li>

                                                <li v-else>
                                                    <button id="dropdownNavbarLink"
                                                        :data-dropdown-toggle="child.name + child.id"
                                                        data-dropdown-trigger="hover"
                                                        class="border-b px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center justify-between">
                                                        {{ child.name }}
                                                        <ChevronRightIcon class="w-4 h-4 items-center">
                                                        </ChevronRightIcon>
                                                    </button>
                                                    <div :id="child.name + child.id"
                                                        class="z-20 hidden font-medium bg-white rounded-sm shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="text-base text-gray-700 dark:text-gray-200"
                                                            aria-labelledby="dropdownLargeButton">
                                                            <template v-for="nestedChild in child.children">
                                                                <li v-if="nestedChild.children?.length == 0">

                                                                    <Link :href="nestedChild.url"
                                                                        :target="nestedChild.target"
                                                                        class="border-b block px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                                                    {{ nestedChild.name }}

                                                                    </Link>
                                                                </li>
                                                                <li v-else>
                                                                    <button id="dropdownNavbarLink"
                                                                        data-dropdown-trigger="hover"
                                                                        :data-dropdown-toggle="nestedChild.name + nestedChild.id"
                                                                        class="px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center justify-between">
                                                                        {{ nestedChild.name }}
                                                                        <ChevronRightIcon class="w-4 h-4 ms-1 items-center">
                                                                        </ChevronRightIcon>
                                                                    </button>
                                                                    <div :id="nestedChild.name + nestedChild.id"
                                                                        class="z-20 hidden font-medium bg-white rounded-sm shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                                        <ul class="text-base text-gray-700 dark:text-gray-200"
                                                                            aria-labelledby="dropdownLargeButton">
                                                                            <template
                                                                                v-for="nestedChild2 in nestedChild.children">
                                                                                <li>

                                                                                    <Link :href="nestedChild2.url"
                                                                                        :target="nestedChild2.target"
                                                                                        class="border-b block px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                                                                    {{ nestedChild2.name }}

                                                                                    </Link>
                                                                                </li>
                                                                            </template>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </template>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </template>
                                        </ul>
                                    </div>
                                </li>
                            </template>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
