<script setup>
import WebsiteLayout from '@/Layouts/WebsiteLayout.vue';
import { cart } from '@/data/cart';
import { Link } from '@inertiajs/vue3';

import { useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

import {
    PaperAirplaneIcon,
    MinusIcon,
    PlusIcon,
    TrashIcon
} from "@heroicons/vue/24/solid";
import { ArrowRightIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
    title: String,
    honeypot: Object,
});

const form = useForm({
    name: null,
    email: null,
    phone: null,
    address: null,
    city: null,
    state: null,
    country: null,
    products: cart.items,
    [props.honeypot.nameFieldName]: null,
    [props.honeypot.validFromFieldName]: props.honeypot.encryptedValidFrom,
});


const submit = () => {
    form.post(route("checkout"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            cart.empty();
        },
        onError: () => null,
        onFinish: () => null,
    });
};
</script>
<template>
    <WebsiteLayout :title="props.title">
        <div class="bg-inherit">
            <div class="max-w-7xl mx-auto px-4 py-10">
                <div
                    class="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
                    <div class="w-full max-w-7xl lg-6 mx-auto relative z-10">
                        <div class="grid grid-cols-3">
                            <div class="col-span-3 md:col-span-2 p-4 bg-white">
                                <div class="grid grid-cols-12 py-2 max-md:hidden border-b border-gray-200">
                                    <div class="col-span-12 md:col-span-7">
                                        <p class="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                                    </div>
                                    <div class="col-span-12 md:col-span-5">
                                        <div class="grid grid-cols-5">
                                            <div class="col-span-3">
                                                <p class="font-normal text-lg leading-8 text-gray-400 text-center">Quantity
                                                </p>
                                            </div>
                                            <div class="col-span-2">
                                                <p class="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="item in cart.items" :key="item.id"
                                    class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200">
                                    <div class="w-full md:max-w-[126px]">
                                        <img :src="item.product.media[0] ? item.product.media[0].original_url : item.product.placeholder_url"
                                            alt="perfume bottle image" class="mx-auto w-full">
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                                        <div class="md:col-span-2">
                                            <div class="flex flex-col max-[500px]:items-center gap-3">
                                                <h6 class="font-semibold text-base leading-7 text-black">{{
                                                    item.product.name }}
                                                </h6>
                                                <h6 class="font-normal text-base leading-7 text-gray-500">{{
                                                    item.product.category.name }}</h6>
                                                <div class="flex gap-4 items-center">
                                                    <div class="font-semibold text-base leading-7 text-indigo-600">
                                                        ${{ item.product.price }} <span class="text-xs">/{{ item.product.unit }}</span>
                                                    </div>
                                                    <TrashIcon @click="cart.remove(item.product)"
                                                        class="w-6 h-6 text-red-600 hover:text-red-800 hover:cursor-pointer">
                                                    </TrashIcon>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                            <div class="flex items-center h-full">
                                                <button @click="cart.decrease(item.product)"
                                                    class="group rounded-l-full p-4 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <MinusIcon class="w-4 h-4"></MinusIcon>
                                                </button>
                                                <input v-model="item.quantity" type="number"
                                                    class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-24 placeholder:text-gray-900 py-4  text-center bg-transparent"
                                                    placeholder="1">
                                                <button @click="cart.increase(item.product)"
                                                    class="group rounded-r-full p-4 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <PlusIcon class="w-4 h-4"></PlusIcon>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                            <p class="font-bold text-lg leading-8 text-indigo-600 text-center">${{
                                                item.product.price * item.quantity }}</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="flex items-center justify-end mt-8">

                                    <Link :href="route('products')"
                                        class="flex items-center px-4 py-2 rounded-full gap-2 border-none outline-0  text-md leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-50">
                                    Continue Purchase
                                    <ArrowRightIcon class="w-8 h-6"></ArrowRightIcon>

                                    </Link>
                                </div>
                            </div>

                            <div v-if="cart.totalItems" class="col-span-3 md:col-span-1 bg-gray-50 p-4">
                                <div class="py-2 border-b border-gray-200">
                                    <p class="font-normal text-lg leading-8 text-gray-400">Order Summary</p>
                                </div>
                                <div class="mt-4">
                                    <div class="flex items-center justify-between pb-6">
                                        <p class="font-normal text-lg leading-8 text-black">{{ cart.totalItems }} Items</p>
                                        <p class="font-medium text-lg leading-8 text-black">${{ cart.totalPrice }}</p>
                                    </div>

                                    <form class="space-y-2" @submit.prevent="submit">
                                        <div class="hidden" v-if="props.honeypot.enabled"
                                            :name="`${props.honeypot.nameFieldName}_wrap`">
                                            <input type="text" v-model="form[props.honeypot.nameFieldName]"
                                                :name="props.honeypot.nameFieldName" :id="props.honeypot.nameFieldName" />
                                            <input type="text" v-model="form[props.honeypot.validFromFieldName]"
                                                :name="props.honeypot.validFromFieldName" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="name" :value="lang().label.name" />
                                            <TextInput id="name" v-model="form.name" type="text" class="block w-full"
                                                autocomplete="name" :placeholder="lang().placeholder.name"
                                                :error="form.errors.name" />
                                            <InputError :message="form.errors.name" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="email" :value="lang().label.email" />
                                            <TextInput id="email" v-model="form.email" type="text" class="block w-full"
                                                autocomplete="email" :placeholder="lang().placeholder.email"
                                                :error="form.errors.email" />
                                            <InputError :message="form.errors.email" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="phone" :value="lang().label.phone" />
                                            <TextInput id="phone" v-model="form.phone" type="text" class="block w-full"
                                                autocomplete="phone" :placeholder="lang().placeholder.phone"
                                                :error="form.errors.phone" />
                                            <InputError :message="form.errors.phone" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="address" :value="lang().label.address" />
                                            <TextInput id="address" v-model="form.address" type="text" class="block w-full"
                                                autocomplete="address" :placeholder="lang().placeholder.address"
                                                :error="form.errors.address" />
                                            <InputError :message="form.errors.address" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="city" :value="lang().label.city" />
                                            <TextInput id="city" v-model="form.city" type="text" class="block w-full"
                                                autocomplete="city" :placeholder="lang().placeholder.city"
                                                :error="form.errors.city" />
                                            <InputError :message="form.errors.city" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="state" :value="lang().label.state" />
                                            <TextInput id="state" v-model="form.state" type="text" class="block w-full"
                                                autocomplete="state" :placeholder="lang().placeholder.state"
                                                :error="form.errors.state" />
                                            <InputError :message="form.errors.state" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="country" :value="lang().label.country" />
                                            <TextInput id="country" v-model="form.country" type="text" class="block w-full"
                                                autocomplete="country" :placeholder="lang().placeholder.country"
                                                :error="form.errors.country" />
                                            <InputError :message="form.errors.country" />
                                        </div>

                                        <div class="space-y-1">
                                            <PrimaryButton class="w-full justify-center"
                                                :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                                @click="submit">
                                                <PaperAirplaneIcon class="w-4 h-auto me-2 transform -rotate-45">
                                                </PaperAirplaneIcon>
                                                Place Order {{ form.processing ? "..." : "" }}
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </WebsiteLayout>
</template>
