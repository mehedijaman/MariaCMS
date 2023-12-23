<script setup>
import emptyAnimation from "@/Animations/empty.json";
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>
<template>
    <Vue3Lottie :animationData="emptyAnimation" :height="250" :width="250" />
    No Data Available !
</template>
