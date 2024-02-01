<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { router } from "@inertiajs/vue3";
import { formatDate } from "../../Helpers/dateHelper";
import Published from "./Published.vue";
import Unpublished from './Unpublished.vue';
import Draft from './Draft.vue';
import { Link } from "@inertiajs/vue3";
import Checkbox from "@/Components/Checkbox.vue";
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";

import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

// CKEditor
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const editor = ref(ClassicEditor);
const editorConfig = ref({});

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    breadcrumbs: Object,
    categories: Object,
});

const formData = reactive({
    name: null,
    slug: null,
    content: '',
    excerpt: null,
    password: null,
    categories: [],
    allow_comment: 1,
    is_featured: 0,
    featured_image: null,
    status: 1,
    meta_title: null,
    meta_description: null,
    meta_keywords: null,
});

// Watch for changes in the 'name' property
watch(() => formData.name, (newName) => {
    // Update the 'slug' property based on the new 'name'
    formData.slug = generateSlug(newName);
});

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.post(route("posts.store"), {
        preserveScroll: true,
        onSuccess: () => null,
        onError: () => null,
        onFinish: () => null,
    });
};

const config = {};

const fileChange = (value) => {
    if (value.source === "featured_image") {
        formData.featured_image = value.file;
    }
};
</script>

<template>
    <AppLayout :title="props.title">
        <Breadcrumb :breadcrumbs="props.breadcrumbs" />
        <div class="p-4">
            <div class="w-full mx-auto">
                <form @submit.prevent="submit" class="flex flex-col gap-2">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-4 grid grid-cols-2">
                            <div class="col-span-1">
                                <!-- <InputLabel for="name" :value="lang().label.name" /> -->
                                <TextInput id="name" v-model="formData.name" type="text" class="block w-full"
                                    autocomplete="name" :placeholder="lang().placeholder.post_name"
                                    :error="form.errors.name" />
                                <InputError :message="form.errors.name" />
                            </div>

                            <div class="col-span-1">
                                <!-- <InputLabel for="slug" :value="lang().label.slug" /> -->
                                <TextInput id="slug" v-model="formData.slug" type="text" class="block w-full"
                                    autocomplete="slug" :placeholder="lang().placeholder.slug" :error="form.errors.slug" />
                                <InputError :message="form.errors.slug" />
                            </div>
                        </div>

                        <div class="col-span-1 flex gap-1">
                            <!-- <div class="grid grid-cols-2 gap-2"> -->
                            <button :disabled="form.processing" @click="submit" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 px-3 font-sans rounded-md text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full">{{
                                    lang().button.save }} {{ form.processing ? "..." : "" }}</button>

                            <Link :href="route('posts.index')"
                                class="text-white  bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:ring-blue-300 font-sans rounded-md text-sm px-5 py-3  dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full">
                            Cancel

                            </Link>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-4 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg">
                            <InputError :message="form.errors.content" />
                            <ckeditor :editor="editor" v-model="formData.content" :config="editorConfig"></ckeditor>
                        </div>

                        <div class="col-span-1 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-md text-sm">
                            <div id="accordion-open" data-accordion="open">
                                <h2 id="accordion-open-heading-1">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200  focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#post-summary" aria-expanded="true"
                                        aria-controls="post-summary">
                                        <span class="flex items-center">Summary</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="post-summary" class="hidden" aria-labelledby="accordion-open-heading-1">
                                    <div
                                        class="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <div class="space-y-1">
                                            <InputLabel for="status" :value="lang().label.status" />
                                            <select v-model="formData.status" id="status" name="status"
                                                class="block w-full h-8 py-0 text-sm">
                                                <option value="1">Published</option>
                                                <option value="0">Unpublished</option>
                                                <option :value="null">Draft</option>
                                            </select>
                                            <InputError :message="form.errors.status" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="is_featured" :value="lang().label.is_featured" />
                                            <select v-model="formData.is_featured" id="is_featured" name="is_featured"
                                                class="block w-full h-8 py-0 text-sm">
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                            <InputError :message="form.errors.is_featured" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="password" :value="lang().label.password" />
                                            <TextInput id="password" v-model="formData.password" type="text"
                                                class="block w-full h-8 py-0 text-sm" autocomplete="password"
                                                :placeholder="lang().placeholder.password"
                                                :error="form.errors.desctiption" />
                                            <InputError :message="form.errors.password" />
                                        </div>
                                    </div>
                                </div>
                                <h2 id="accordion-open-heading-2">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#post-categories" aria-expanded="true"
                                        aria-controls="post-categories">
                                        <span class="flex items-center">Categories</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="post-categories" class="hidden" aria-labelledby="accordion-open-heading-2">
                                    <div
                                        class="p-2 border border-b-0 border-gray-200 dark:border-gray-700 flex flex-col gap-2">
                                        <div v-for="category in props.categories" :index="category.id">
                                            <div class="flex gap-2">
                                                <input
                                                    class="rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary p-2"
                                                    type="checkbox" :id="category.slug" :value="category.id"
                                                    v-model="formData.categories" />
                                                <InputLabel :for="category.slug" :value="category.name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 id="accordion-open-heading-3">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#post-featured-image" aria-expanded="true"
                                        aria-controls="post-featured-image">
                                        <span class="flex items-center">Featured Image</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="post-featured-image" class="hidden" aria-labelledby="accordion-open-heading-3">
                                    <div class="p-2 border border-t-0 border-gray-200 dark:border-gray-700">
                                        <div class="space-y-1">
                                            <ImageInput source="featured_image" v-model="formData.featured_image"
                                                class="mt-1 block w-44 h-44" @fileChange="fileChange" />
                                            <InputError :message="form.errors.featured_image" class="mt-2" />
                                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                                {{ form.progress.percentage }}%
                                            </progress>
                                        </div>
                                    </div>
                                </div>
                                <h2 id="accordion-open-heading-3">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#post-excerpt" aria-expanded="false"
                                        aria-controls="post-excerpt">
                                        <span class="flex items-center">Excerpt</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="post-excerpt" class="hidden" aria-labelledby="accordion-open-heading-3">
                                    <div class="p-2 border border-t-0 border-gray-200 dark:border-gray-700">
                                        <div class="space-y-1">
                                            <InputLabel for="excerpt" :value="lang().label.excerpt" />
                                            <TextAreaInput id="excerpt" v-model="formData.excerpt" type="text"
                                                class="block w-full h-8 py-0 text-sm" autocomplete="excerpt"
                                                :placeholder="lang().placeholder.excerpt"
                                                :error="form.errors.desctiption" />
                                            <InputError :message="form.errors.excerpt" />
                                        </div>
                                    </div>
                                </div>

                                <h2 id="accordion-open-heading-3">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#post-discussion" aria-expanded="false"
                                        aria-controls="post-discussion">
                                        <span class="flex items-center">Discussion</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="post-discussion" class="hidden" aria-labelledby="accordion-open-heading-3">
                                    <div class="p-2 border border-t-0 border-gray-200 dark:border-gray-700">
                                        <div class="space-y-1">
                                            <InputLabel for="allow_comment" :value="lang().label.allow_comment" />
                                            <select v-model="formData.allow_comment" id="allow_comment" name="allow_comment"
                                                class="block w-full h-8 py-0 text-sm">
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                            <InputError :message="form.errors.allow_comment" />
                                        </div>
                                    </div>
                                </div>

                                <h2 id="accordion-open-heading-3">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#post-meta-information" aria-expanded="false"
                                        aria-controls="post-meta-information">
                                        <span class="flex items-center">Meta Information</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="post-meta-information" class="hidden" aria-labelledby="accordion-open-heading-3">
                                    <div class="p-2 border border-t-0 border-gray-200 dark:border-gray-700">
                                        <div class="space-y-1">
                                            <InputLabel for="meta_title" :value="lang().label.meta_title" />
                                            <TextInput id="meta_title" v-model="formData.meta_title" type="text"
                                                class="block w-full h-8 text-sm" autocomplete="meta_title"
                                                :placeholder="lang().placeholder.meta_title"
                                                :error="form.errors.desctiption" />
                                            <InputError :message="form.errors.meta_title" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="meta_description" :value="lang().label.meta_description" />
                                            <TextInput id="meta_description" v-model="formData.meta_description" type="text"
                                                class="block w-full h-8 text-sm" autocomplete="meta_description"
                                                :placeholder="lang().placeholder.meta_description"
                                                :error="form.errors.desctiption" />
                                            <InputError :message="form.errors.meta_description" />
                                        </div>

                                        <div class="space-y-1">
                                            <InputLabel for="meta_keywords" :value="lang().label.meta_keywords" />
                                            <TextInput id="meta_keywords" v-model="formData.meta_keywords" type="text"
                                                class="block w-full h-8 text-sm" autocomplete="meta_keywords"
                                                :placeholder="lang().placeholder.meta_keywords"
                                                :error="form.errors.desctiption" />
                                            <InputError :message="form.errors.meta_keywords" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
