<script setup>
import { ChatBubbleLeftRightIcon } from "@heroicons/vue/24/outline";
import { reactive } from "vue";
const data = reactive({
    show: false,
});
const toTop = () => {
    window.scrollTo(0, 0);
};
window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        data.show = true;
    } else {
        data.show = false;
    }
});
</script>
<template>
    <a
        v-show="data.show"
        href="https://me.whatsapp.com"
        target="_blank"
        class="h-10 w-auto px-2 bg-primary fixed flex gap-1 m-auto justify-center items-center z-[9999] bottom-4 right-16 rounded-3xl font-semibold text-white hover:bg-primary/50 hover:text-black cursor-pointer"
    >
        <ChatBubbleLeftRightIcon class="w-6 h-6" />
        Chat
    </a>
</template>
