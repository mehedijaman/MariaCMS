<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';

const backgroundColor = usePage().props.app.setting.footer_background_color ? usePage().props.app.setting.footer_background_color : 'grey';
const textColor = usePage().props.app.setting.footer_text_color ? usePage().props.app.setting.footer_text_color : '#f9f9f9';

// const footerMenus = usePage().props.menus.filter(menu => menu.position === 'footer');
// const footerMenu = footerMenus.length > 0 ? footerMenus[0] : null;
</script>
<template>
    <!-- <footer :style="{ backgroundColor: backgroundColor, color: textColor }" class="p-4 border-t-[1px] border-slate-300/50 md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">

            <Link :href="route('index')" class="shrink-0 flex w-full justify-center items-center space-x-4">
            <ApplicationLogo class="block h-8 w-auto" />
            <p class="text-lg font-semibold">
                {{ $page.props.app.setting.name }}
            </p>

            </Link>
            <p class="my-6 dark:text-gray-400"><span v-html="$page.props.app.setting.footer"></span></p>
            <ul class="flex gap-4 justify-center items-center mb-6  dark:text-white">
                <a v-for="item in footerMenu?.items" :href="item.url" :target="item.target">
                    {{ item.name }}
                </a>
            </ul>
            <ul class="flex flex-wrap justify-center items-center mb-6  dark:text-white">
                <span class="inline-flex">
                    <a :style={color:textColor} :href="$page.props.app.setting.facebook" target="_blank">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a class="ml-4" :style={color:textColor} :href="$page.props.app.setting.twitter" target="_blank">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a class="ml-4" :style={color:textColor} :href="$page.props.app.setting.instagram" target="_blank">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-4" :style={color:textColor} :href="$page.props.app.setting.whatsapp" target="_blank">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                            </path>
                        </svg>
                    </a>
                </span>
            </ul>
            <span class="text-sm sm:text-center dark:text-gray-400">
                &copy; 2023-{{ new Date().getFullYear() }}. {{ $page.props.app.setting.name }}. All Rights Reserved.
                Development & Maintenance by - <a class="text-primary font-semibold" target="_blank"
                    href="https://gtechservice.net">gTechService</a></span>
        </div>
    </footer> -->
    <!-- Footer -->
    <div>
        <div class="py-6 bg-[#294A70] border-t-4 border-[#ffab1f]">
            <div class="mx-auto max-w-7xl">
                <div class="md:grid lg:grid-cols-4 md:grid-cols-2 gap-4 text-white">
                    <div class="p-2 border-r border-dashed">
                        <h1 class="font-semibold text-base">সিটি পলিটেকনিক ইনস্টিটিউট খুলনা</h1>
                        <div class="pt-4">
                            <ul>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        ১০৩ বিআইডিসি রোড, খালিশপুর, খুলনা
                                    </a></li>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        01750154334, 0171101862</a></li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        cpikhulna2003@gmail.com</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        www.cpik.ac.bd</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-2 border-r border-dashed">
                        <h1 class="font-semibold text-base">নিউ সিটি নার্সিং ইনস্টিটিউট খুলনা</h1>
                        <div class="pt-4">
                            <ul>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        বাংলাদেশ নার্সিং এন্ড
                                    </a></li>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        মিডওয়াইফারি কাউন্সিল(BNMC) অনুমোদিত</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        www.ncnik.ac.bd</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-2 border-r border-dashed">
                        <h1 class="font-semibold text-base">গুরুত্বপূর্ণ লিঙ্ক</h1>
                        <div class="pt-4">
                            <ul>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        বাংলাদেশ কারিগরি শিক্ষা বোর্ড
                                    </a></li>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        কারিগরি শিক্ষা অধিদপ্তর</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        শিক্ষা মন্ত্রনালয়</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        পরিচালকের কার্যালয়,খুলনা (RDO)</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        অনলাইন পুলিশ ক্লিয়ারেন্স</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        জন্ম ও মৃত্যু নিবন্ধন</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        আরও দেখুন...</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-2">
                        <h1 class="font-semibold text-base">শিক্ষাবোর্ডের ফলাফল</h1>
                        <div class="pt-4">
                            <ul>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        ডিপ্লোমা ইন ইঞ্জিনিয়ারিং রেজাল্ট
                                    </a></li>
                                <li class="pb-2"><a href="#"
                                        class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        শিক্ষাবোর্ডের ফলাফল-টেলিটক</a></li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        শিক্ষাবোর্ডের ফলাফল-ওয়েব</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        জাতীয় বিশ্ববিদ্যালয়ের ফলাফল</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        প্রাইমারি সমাপনী পরীক্ষার ফলাফল </a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        উন্মুক্ত বিশ্ববিদ্যালয়ের ফলাফল</a>
                                </li>
                                <li class="pb-2">
                                    <a href="#" class="flex justify-start items-center text-gray-200 text-base gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        এনটিআরসিএ পরীক্ষার ফলাফল</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--start coppyright section-->
        <div class="bg-[#15305B] py-8">
            <div class="mx-auto max-w-7xl text-center ">
                <ul class="flex gap-2 justify-center pb-2">
                    <li class="px-4 py-2"><a class="text-gray-300 hover:text-gray-500 text-base" href="#">Home</a>
                    </li>
                    <li class=" py-2"><a class="border-l px-2 text-gray-300 hover:text-gray-500 text-base"
                            href="#">Gallery</a></li>
                    <li class=" py-2"><a class="border-l px-2 text-gray-300 hover:text-gray-500 text-base"
                            href="#">Contact</a></li>
                    <li class=" py-2"><a class="border-l px-2 text-gray-300 hover:text-gray-500 text-base"
                            href="#">Sitemap</a></li>
                </ul>
                <h4 class="text-gray-300 text-lg">কপিরাইট©২০২২ সিটি পলিটেকনিক ইনস্টিটিউট খুলনা</h4>
            </div>
        </div>

    </div>
    <!-- /Footer -->
</template>
