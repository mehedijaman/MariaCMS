<script setup>
import {
    XMarkIcon,
    MegaphoneIcon
} from '@heroicons/vue/24/solid';
</script>
<template>
    <section v-if="$page.props.app.setting.is_header_message" class="bg-blue-100 dark:bg-blue-900" id="badge-dismiss-default">
        <div class="max-w-7xl mx-auto px-4 flex justify-between text-sm font-medium text-blue-800 dark:text-blue-300">
            <span class="flex gap-4 items-center">
                <MegaphoneIcon class="w-5 h-5"></MegaphoneIcon>
                <span v-if="$page.props.app.setting.is_header_message" v-html="$page.props.app.setting.header_message"></span>
            </span>
            <button type="button"
                class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <XMarkIcon class="w-5 h-5"></XMarkIcon>
                <span class="sr-only">Remove badge</span>
            </button>
        </div>
    </section>
</template>
