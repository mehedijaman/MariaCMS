<script setup>
defineProps({
    faqs: Object,
})
</script>
<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div>
                <div class="flex gap-3  justify-center mx-auto">
                    <span class="w-10 h-0.5 bg-red-600 mt-4"></span>
                    <p class="text-2xl font-semibold">Frequently</p>
                </div>
                <h1 class="text-center text-2xl md:text-3xl font-bold py-4 text-gray-900">
                    Asked <span class="text-red-700">QUESTIONS</span>
                </h1>
                <p class="md:w-96 h-0.5 bg-red-600 justify-center mx-auto"></p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 p-8">
                <img src="/images/faq.png" class="h-72 w-auto mx-auto" alt="">
                <div class="w-full">
                    <div id="accordion-color" data-accordion="collapse" class="w-full"
                        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                        <div v-for="(faq, index) in faqs" class="w-full">
                            <h2 :id="`collapse-id-${index}`" class="w-full">
                                <button type="button"
                                    class="flex items-center justify-between w-full p-4 font-medium rtl:text-right border border-b-1 border-gray-200 rounded-t-sm  focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
                                    :data-accordion-target="`#accordion-open-body-${index}`" aria-expanded="false"
                                    :aria-controls="`accordion-open-body-${index}`">
                                    <span class="flex items-center">
                                        {{ index + 1 }}. {{ faq.question }}
                                    </span>
                                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div :id="`accordion-open-body-${index}`" class="hidden"
                                :aria-labelledby="`collapse-id-${index}`">
                                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    {{ faq.answer }}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
