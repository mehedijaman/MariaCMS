<script setup></script>
<template>
    <footer class="sticky top-[100vh]">
        <div
            class="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
        >
            <div
                class="flex justify-end items-center px-4 sm:px-6 lg:px-8 py-4"
            >
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2023-{{ new Date().getFullYear() }}. {{ $page.props.app.setting.name }}. All Rights Reserved.
                Development & Maintenance by - <a class="text-primary font-semibold" target="_blank"
                    href="https://gtechservice.net">gTechService</a></span>
            </div>
        </div>
    </footer>
</template>
