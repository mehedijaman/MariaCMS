<script setup>
import { Link } from '@inertiajs/vue3'
import { usePage } from '@inertiajs/vue3';
const locale = usePage().props.app.locale;
import { languages } from '../data/language';
const currentLocale = languages.find(language => language.code === locale);
</script>
<template>
    <button type="button" data-dropdown-toggle="language-dropdown-menu"
        class="inline-flex gap-2 items-center font-medium justify-center px-2 py-2 text-sm text-gray-900 dark:text-white rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <span v-html="currentLocale.flag"></span>
        <!-- {{ currentLocale.name }} -->
    </button>
    <!-- Dropdown -->
    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700"
        id="language-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
            <li v-for="(language, index) in languages" :key="index">

                <Link :href="route('set-locale', language.code)"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">

                <div class="inline-flex items-center gap-2">
                    <span v-html="language.flag"></span>
                    {{ language.name }}
                </div>
                </Link>
            </li>
        </ul>
    </div>

    <!-- <div>
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
            class="text-white font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            type="button">
            English
        </button>
        <div id="dropdownHover"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700">
            <ul class="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                    <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        href="https://anjinmetalindustries.com/set-locale/en">
                        <div class="inline-flex items-center gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" class="h-4 w-6">
                                    <rect width="300" height="200" fill="#3C3B6E"></rect>

                                    <rect width="600" height="40" y="40" fill="#fff"></rect>
                                    <rect width="600" height="40" y="120" fill="#fff"></rect>
                                    <rect width="600" height="40" y="200" fill="#fff"></rect>
                                    <rect width="600" height="40" y="280" fill="#fff"></rect>

                                    <rect width="600" height="40" y="80" fill="#FF0000"></rect>
                                    <rect width="600" height="40" y="160" fill="#FF0000"></rect>
                                    <rect width="600" height="40" y="240" fill="#FF0000"></rect>

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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" class="h-4 w-6">
                                    <rect width="300" height="200" fill="#3C3B6E"></rect>

                                    <rect width="600" height="40" y="40" fill="#fff"></rect>
                                    <rect width="600" height="40" y="120" fill="#fff"></rect>
                                    <rect width="600" height="40" y="200" fill="#fff"></rect>
                                    <rect width="600" height="40" y="280" fill="#fff"></rect>

                                    <rect width="600" height="40" y="80" fill="#FF0000"></rect>
                                    <rect width="600" height="40" y="160" fill="#FF0000"></rect>
                                    <rect width="600" height="40" y="240" fill="#FF0000"></rect>

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
    </div> -->
</template>
