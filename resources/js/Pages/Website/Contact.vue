<script setup>
import WebsiteLayout from "@/Layouts/WebsiteLayout.vue";

const props = defineProps({
    title: String,
});
</script>
<template>
    <WebsiteLayout :title="props.title">
        <section class="min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern" id="home">
            <div data-aos="fade-up" data-aos-duration="1000"
                class="py-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <h1 class="text-4xl text-center font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">{{ props.title }}
                </h1>

                <section class="text-gray-600 body-font relative">
                    <div class="container py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div
                            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map"
                                marginheight="0" marginwidth="0" scrolling="no"
                                :src="$page.props.app.setting.google_map"
                                style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div class="lg:w-1/2 px-6">
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Address
                                    </h2>
                                    <p class="mt-1">{{ $page.props.app.setting.address }}</p>
                                </div>
                                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Email
                                    </h2>
                                    <a class="text-indigo-500 leading-relaxed">{{ $page.props.app.setting.email }}</a>
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                        Phone</h2>
                                    <p class="leading-relaxed">{{ $page.props.app.setting.contact_no }}</p>
                                </div>
                            </div>

                        </div>
                        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 rounded-md">
                            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">{{ lang().label.contact_us }}
                            </h2>
                            <p class="leading-relaxed mb-5 text-gray-600">Reach us to our address or simply submit the
                                form below</p>
                            <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-600">{{ lang().label.name }}
                                </label>
                                <input type="text" id="name" name="name"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">{{ lang().label.email }}
                                </label>
                                <input type="email" id="email" name="email"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>

                            <div class="relative mb-4">
                                <label for="subject" class="leading-7 text-sm text-gray-600">{{ lang().label.subject }}
                                </label>
                                <input type="text" id="subject" name="subject"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <div class="relative mb-4">
                                <label for="message" class="leading-7 text-sm text-gray-600">{{ lang().label.message }}
                                </label>
                                <textarea id="message" name="message"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button
                                class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send
                                Message</button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </WebsiteLayout>
</template>
