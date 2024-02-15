<script setup>
defineProps({
    clients: Object
})
</script>
<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <section class="py-24 ">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mb-20 text-center">
                        <div class="flex gap-3  justify-center mx-auto">
                            <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                            <p class="text-2xl font-semibold">OUR</p>
                        </div>
                        <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                            VALUABLE <span class="text-red-700">CLIENTS</span>
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
                        <div v-for="client in clients" :key="client.id"
                            class="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 p-2 rounded-sm">
                            <img :src="client.media[0].original_url" :alt="client.name" class="h-full w-full">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
