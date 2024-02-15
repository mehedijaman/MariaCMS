<script setup>
import {
    PhoneIcon,
    EnvelopeIcon,
    UserIcon,
    CogIcon,
    MicrophoneIcon,
} from '@heroicons/vue/24/solid'
import { usePage } from '@inertiajs/vue3';
import SwitchLocale from "@/Components/SwitchLocale.vue";
import NavbarLink from "@/Components/Website/NavbarLink.vue";
import { Link } from "@inertiajs/vue3";
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

const backgroundColor = usePage().props.app.setting.topbar_background_color ? usePage().props.app.setting.topbar_background_color : 'white';
const textColor = usePage().props.app.setting.topbar_text_color ? usePage().props.app.setting.topbar_text_color : 'black';

</script>
<template>
    <!-- <div :style="{ backgroundColor: backgroundColor}" class="h-fit border-b border-slate-50/50 ">
        <div class="flex flex-col max-w-7xl px-4 sm:px-8 lg:px-[1px]2  mx-auto sm:items-center sm:justify-between sm:flex-row">
            <div class="flex gap-8 text-slate-100 text-center">
                <div :style="{color: textColor}" class="flex gap-2">
                    <MicrophoneIcon class="w-5 h-5"></MicrophoneIcon >
                    <span v-if="$page.props.app.setting.header"  v-html="$page.props.app.setting.header"></span>
                </div>
            </div>
            <div class="inline-flex items-center justify-center md:justify-end">
                <SwitchLocale />

                <Link v-if="$page.props.auth.user" class="border-x-[1px] border-slate-50 px-2" :href="route('dashboard')">
                    <CogIcon :style="{color: textColor}" class="w-5 h-5"></CogIcon>
                </Link>
                <Link  v-else class="border-x-[1px] border-slate-50 px-2" v-if="route().has('login')" :href="route('login')">
                    <UserIcon :style="{color: textColor}" class="w-5 h-5"></UserIcon>
                </Link>

                <a :style="{color: textColor}" class="border-r-[1px] border-slate-50 px-2" :href="$page.props.app.setting.facebook" target="_blank">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a :style="{color: textColor}"  class="border-r-[1px] border-slate-50 px-2"  :href="$page.props.app.setting.twitter" target="_blank">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                        </path>
                    </svg>
                </a>
                <a :style="{color: textColor}"  class="border-r-[1px] border-slate-50 px-2"  :href="$page.props.app.setting.instagram" target="_blank">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a :style="{color: textColor}"  class="pl-2"  :href="$page.props.app.setting.whatsapp" target="_blank">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div> -->

    <!--Topbar-->
    <section class="bg-[#49688E] min-h-8">
        <div class="mx-auto max-w-7xl px-4">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div v-if="$page.props.app.setting.is_header_message" class="col-span-1 md:col-span-2 flex overflow-hidden items-center gap-2">
                    <MicrophoneIcon class="w-5 h-5 text-white"></MicrophoneIcon>
                    <span v-if="$page.props.app.setting.header" v-html="$page.props.app.setting.header"
                        class="text-slate-200"></span>
                </div>

                <div class="col-span-3 md:col-span-1 flex justify-center md:justify-end px-2 border-t md:border-none">
                    <SwitchLocale v-if="$page.props.app.setting.is_language" />
                    <div class="flex text-slate-200  text-lg justify-center ">
                        <a v-if="$page.props.app.setting.facebook" :href="$page.props.app.setting.facebook" target="_blank" class="border-l py-2 px-2">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>

                        <a v-if="$page.props.app.setting.twitter" :href="$page.props.app.setting.twitter" target="_blank" class="border-l py-2 px-2">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>

                        <a v-if="$page.props.app.setting.instagram" :href="$page.props.app.setting.instagram" target="_blank" class="border-l py-2 px-2">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>

                        <a v-if="$page.props.app.setting.youtube" :href="$page.props.app.setting.youtube" target="_blank" class="border-l py-2 px-2">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                viewBox="0 0 48 48">
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

                        <a v-if="$page.props.app.setting.whatsapp" :href="'https://wa.me/' + $page.props.app.setting.whatsapp" target="_blank" class="border-l py-2 px-2">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                </path>
                            </svg>
                        </a>
                    </div>

                    <button v-if="$page.props.menus.secondary" id="dropdownHoverButton1" data-dropdown-toggle="dropdownHover1" data-dropdown-trigger="hover"
                        class="text-white font-medium inline-flex items-center pl-2 hover:text-gray-200 border-l"
                        type="button">
                        Quick Links
                        <p class="bg-yellow-300 ml-2">
                            <ChevronDownIcon class="w-4 h-4 text-black"></ChevronDownIcon>
                        </p>
                    </button>

                    <!-- Dropdown menu -->
                    <div id="dropdownHover1"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700"
                        style="transform: translate3d(1252px, 42.8px, 0px);">
                        <ul class=" text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton1">
                            <li v-for="item in $page.props.menus.secondary?.items" :key="item.id">

                                <Link :href="item.url" :target="item.target"
                                    class="block px-4 py-2 hover:bg-[#ffab1f] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white border-b">
                                {{ item.name }}

                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Topbar-->
</template>
