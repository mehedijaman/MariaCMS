<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, defineEmits, watch } from "vue";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";
import AppLayout from "@/Layouts/AppLayout.vue";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";
import { Link } from "@inertiajs/vue3";

// CKEditor
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const editor = ref(ClassicEditor);
const editorConfig = ref({});

const props = defineProps({
    title: String,
    page: Object,
    pages: Object,
    breadcrumbs: Object,
});

const formData = reactive({
    name: props.page.name,
    slug: props.page.slug,
    content: props.page.content,
    excerpt: props.page.excerpt,
    parent: props.page.parent,
    password: props.page.password,
    status: props.page.status,
    meta_title: props.page.meta_title,
    meta_description: props.page.meta_description,
    meta_keywords: props.page.meta_keywords,
    featured_image: null,
    _method: "PUT",
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
    form.post(route("pages.update", props.page?.id), {
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
                                    autocomplete="name" :placeholder="lang().placeholder.page_name"
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
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 px-3 font-medium rounded-md text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full">{{
                                    lang().button.update }} {{ form.processing ? "..." : "" }}</button>

                            <Link :href="route('pages.index')"
                                class="text-white  bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-3  dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full">
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
                                        data-accordion-target="#page-summary" aria-expanded="true"
                                        aria-controls="page-summary">
                                        <span class="flex items-center">Summary</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="page-summary" class="hidden" aria-labelledby="accordion-open-heading-1">
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
                                            <InputLabel for="parent" :value="lang().label.parent" />
                                            <select v-model="formData.parent" id="parent" name="parent"
                                                class="block w-full h-8 py-0 text-sm">
                                                <option :value="null">None</option>
                                                <option v-for="(page, index) in pages" :key="index" :value="page.id">
                                                    {{ toTitleCase(page.name) }}
                                                </option>
                                            </select>
                                            <InputError :message="form.errors.parent" />
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

                                <h2 id="accordion-open-heading-3">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#page-featured-image" aria-expanded="true"
                                        aria-controls="page-featured-image">
                                        <span class="flex items-center">Featured Image</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="page-featured-image" class="hidden" aria-labelledby="accordion-open-heading-3">
                                    <div class="p-2 border border-t-0 border-gray-200 dark:border-gray-700">
                                        <div class="space-y-1">
                                            <ImageInput source="featured_image" v-model="formData.featured_image"
                                                :image="props.page.media[0]?.original_url"
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
                                        data-accordion-target="#page-excerpt" aria-expanded="false"
                                        aria-controls="page-excerpt">
                                        <span class="flex items-center">Excerpt</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="page-excerpt" class="hidden" aria-labelledby="accordion-open-heading-3">
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
                                        data-accordion-target="#page-meta-information" aria-expanded="false"
                                        aria-controls="page-meta-information">
                                        <span class="flex items-center">Meta Information</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="page-meta-information" class="hidden" aria-labelledby="accordion-open-heading-3">
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
