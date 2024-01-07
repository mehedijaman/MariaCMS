<script setup>
import {
    ClockIcon,
    KeyIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    UserIcon,
    CogIcon,
    ChevronDownIcon,
    CubeIcon,
    ClipboardDocumentListIcon,
    DocumentIcon,
    PaperClipIcon,
    PhotoIcon,
    RocketLaunchIcon,
    ComputerDesktopIcon,
    QuestionMarkCircleIcon,
    TagIcon,
    StarIcon,
    EnvelopeIcon,
} from "@heroicons/vue/24/solid";
import { Link } from "@inertiajs/vue3";

defineProps({
    open: Boolean,
});

const emit = defineEmits(["close"]);

function userManagementActive() {
    return (route().current('user.index')
        || route().current('role.index')
        || route().current('permission.index')
        || route().current('activity.index')
    );
}
</script>
<template>
    <!-- Sidebar -->
    <aside
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav" id="drawer-navigation">
        <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
            <form action="#" method="GET" class="md:hidden mb-2">

                <label for="sidebar-search" class="sr-only">Search

                </label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                            </path>
                        </svg>
                    </div>
                    <input type="text" name="search" id="sidebar-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search" />
                </div>
            </form>
            <ul class="space-y-2">
                <li v-bind:class="route().current('dashboard')
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('dashboard')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <CubeIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.dashboard }}</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('menus.index') || route().current('menus.trash') || route().current('menu.items.index'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('menus.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <Squares2X2Icon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.menus }}</span>

                    </Link>
                </li>
                <li v-bind:class="(route().current('pages.index') || route().current('pages.create') || route().current('pages.edit') || route().current('pages.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('pages.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <ClipboardDocumentListIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.pages }}</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('posts.index') || route().current('posts.create') || route().current('posts.edit') || route().current('posts.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('posts.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <RocketLaunchIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.posts }}</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('categories.index') || route().current('categories.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('categories.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <PaperClipIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.categories }}</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('tags.index') || route().current('tags.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('tags.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <TagIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.tags }}</span>

                    </Link>
                </li>


                <li v-bind:class="(route().current('galleries.index') || route().current('galleries.trash') || route().current('gallery.items.index') || route().current('gallery.items.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('galleries.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <PhotoIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.galleries }}</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('faqs.index') || route().current('faqs.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('faqs.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <QuestionMarkCircleIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.faqs }}</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('sliders.index') || route().current('sliders.trash') || route().current('slider.items.index') || route().current('slider.items.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('sliders.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <ComputerDesktopIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.sliders }}</span>

                    </Link>
                </li>
                <li v-bind:class="(route().current('messages.index') || route().current('messages.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('messages.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <EnvelopeIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>

                    </Link>
                </li>

                <li v-bind:class="(route().current('testimonials.index') || route().current('testimonials.trash'))
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('testimonials.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <StarIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.testimonials }}</span>

                    </Link>
                </li>

                <li v-show="can(['setting read'])" v-bind:class="route().current('setting.index')
                    ? 'bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'
                    ">

                    <Link :href="route('setting.index')"
                        class="flex items-center p-2 font-sans font-semibold text-sm  text-gray-900 rounded-sm dark:text-white  group">
                    <CogIcon
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                    <span class="flex-1 ml-3 whitespace-nowrap">{{ lang().label.setting }}</span>

                    </Link>
                </li>



                <li :class="userManagementActive()
                    ? 'bg-gray-200 dark:bg-gray-600'
                    : 'border-b-[1px] border-gray-200 dark:border-gray-700'
                    ">
                    <button
                        class="flex items-center p-2 w-full font-sans font-semibold text-sm hover:bg-gray-300  text-gray-900 rounded-sm transition duration-75 group dark:text-white  dark:hover:bg-gray-600"
                        type="button" aria-controls="user" data-collapse-toggle="user">
                        <UserIcon
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ lang().label.user_management }}</span>
                        <ChevronDownIcon
                            class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                        </ChevronDownIcon>
                    </button>
                    <ul id="user" :class="userManagementActive() ? 'space-y-2' : 'hidden space-y-2'">
                        <li v-show="can(['user read'])"
                            :class="route().current('user.index') ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-300 dark:hover:bg-gray-700'">

                            <Link :href="route('user.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group  dark:text-white dark:hover:bg-gray-700">
                            <UserIcon
                                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                            <span>{{ lang().label.user }}</span>

                            </Link>
                        </li>

                        <li v-show="can(['role read'])"
                            :class="route().current('role.index') ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-300 dark:hover:bg-gray-700'">

                            <Link :href="route('role.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group  dark:text-white dark:hover:bg-gray-700">
                            <KeyIcon
                                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                            <span>{{ lang().label.role }}</span>

                            </Link>
                        </li>

                        <li v-show="can(['permission read'])"
                            :class="route().current('permission.index') ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-300 dark:hover:bg-gray-700'">

                            <Link :href="route('permission.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group  dark:text-white dark:hover:bg-gray-700">
                            <ShieldCheckIcon
                                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                            <span>{{ lang().label.permission }}</span>

                            </Link>
                        </li>

                        <li v-show="can(['activity read'])"
                            :class="route().current('activity.index') ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-300 dark:hover:bg-gray-700'">

                            <Link :href="route('activity.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group  dark:text-white dark:hover:bg-gray-700">
                            <ClockIcon
                                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                            <span>{{ lang().label.activity }}</span>

                            </Link>
                        </li>

                        <!-- <li v-show="can(['role read'])">

                            <Link :href="route('role.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <KeyIcon
                                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                            <span>{{ lang().label.role }}</span>

                            </Link>
                        </li>
                        <li v-show="can(['permission read'])">

                            <Link :href="route('permission.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <ShieldCheckIcon
                                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                            <span>{{ lang().label.permission }}</span>

                            </Link>
                        </li>
                        <li v-show="can(['activity read'])">

                            <Link :href="route('activity.index')"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <ClockIcon class="w-5 h-auto" />
                            <span>{{ lang().label.activity }}</span>

                            </Link>
                        </li> -->
                    </ul>
                </li>



                <li v-show="can(['app maintenance read'])" class="border-b-[1px] border-gray-200 dark:border-gray-700">
                    <button type="button"
                        class="flex items-center p-2 w-full font-sans font-semibold text-sm text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="application" data-collapse-toggle="application">
                        <CubeIcon
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ lang().label.app_maintenance }}</span>
                        <ChevronDownIcon
                            class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                        </ChevronDownIcon>
                    </button>
                    <ul id="application" class="hidden py-2 space-y-2">

                        <li v-show="can(['logs read'])">

                            <a href="/logs"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700">
                                <ClockIcon
                                    class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                                <span class="flex-1 whitespace-nowrap">{{ lang().label.logs }}</span>
                            </a>
                        </li>
                        <li v-show="can(['backup read'])">

                            <a href="/backup"
                                class="flex items-center gap-2 p-2 pl-8 w-full font-sans font-medium text-sm text-gray-900 rounded-sm transition duration-75 group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700">
                                <ClockIcon
                                    class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white shadow-md" />
                                <span class="flex-1 whitespace-nowrap">{{ lang().label.backup }}</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>
