<script setup>
import { Link } from '@inertiajs/vue3'
import { usePage } from '@inertiajs/vue3';
const locale = usePage().props.app.locale;
import { languages } from '../data/language';
const currentLocale = languages.find(language => language.code === locale);
</script>
<template>
    <button type="button" data-dropdown-toggle="language-dropdown-menu"
        class="inline-flex gap-2 items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <span v-html="currentLocale.flag"></span>
        {{ currentLocale.name }}
    </button>
    <!-- Dropdown -->
    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
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
</template>
