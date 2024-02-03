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

const backgroundColor = usePage().props.app.setting.navbar_background_color?usePage().props.app.setting.navbar_background_color : 'white';
const textColor = usePage().props.app.setting.navbar_text_color?usePage().props.app.setting.navbar_text_color : 'black';


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

                <a v-for="item in primaryMenu?.items" v-bind:class="route().current(item.url) ? 'font-bold text-primary' : ''
                    " :href="item.url" :target="item.target">
                    {{ item.name }}
                </a>

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
