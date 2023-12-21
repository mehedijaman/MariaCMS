<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>
<template>
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">

            <Link :href="route('index')" class="shrink-0 flex w-full justify-center items-center space-x-4">
            <ApplicationLogo class="block h-8 w-auto" />
            <p class="text-lg font-semibold uppercase tracking-widest">
                {{ $page.props.app.setting.name }}
            </p>

            </Link>
            <p class="my-6 text-gray-500 dark:text-gray-400"><span v-html="$page.props.app.setting.footer"></span></p>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">{ Footer Menu Here } </a>
                </li>
            </ul>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2023-{{ new Date().getFullYear() }}. {{ $page.props.app.setting.name }}. All Rights Reserved.
                Development & Maintenance by - <a class="text-primary font-semibold" target="_blank"
                    href="https://gtechservice.net">gTechService</a></span>
        </div>
    </footer>
</template>
