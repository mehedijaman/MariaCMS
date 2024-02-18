<script setup>
import { Link } from "@inertiajs/vue3";
import { cart } from '@/data/cart';
import {
    ShoppingCartIcon
} from "@heroicons/vue/24/outline";
</script>
<template>
    <Link href="/cart" class="relative mr-2 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out">
        <div class="t-2 absolute left-4">
            <p v-if="cart.totalItems" class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white ">
                {{ cart.totalItems }}
            </p>
        </div>
        <ShoppingCartIcon class="h-6 w-6" />
    </Link>
</template>
