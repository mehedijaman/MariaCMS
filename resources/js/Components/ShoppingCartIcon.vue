<script setup>
import { Link } from "@inertiajs/vue3";
import {
    ShoppingCartIcon
} from "@heroicons/vue/24/outline";
</script>
<template>
    <Link href="/cart" class="relative mr-2">
        <div class="t-2 absolute left-4">
            <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                0
            </p>
        </div>
        <ShoppingCartIcon class="h-6 w-6" />
    </Link>
</template>
