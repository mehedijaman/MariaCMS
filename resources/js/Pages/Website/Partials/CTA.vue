<script setup>
const props = defineProps({
    cta: Object,
})
</script>
<template>
    <div class="bg-white dark:bg-gray-900">
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-8 items-center p-4 mx-auto max-w-screen-xl xl:gap-12 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
                <img class="w-full" :src="props.cta?props.cta.full_path_image:'https://picsum.photos/seed/picsum/580/520'" alt="CTA image">

                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {{ props.cta?.title }}
                    </h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        {{ props.cta?.description }}
                    </p>
                    <a v-if="props.cta?.button_text" :href="props.cta.button_url" :target="props.cta.button_target" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        {{ props.cta?.button_text }}
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
