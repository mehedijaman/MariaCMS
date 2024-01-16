<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, watch } from "vue";
import { generateSlug } from "../../Helpers/textHelper";
import AppLayout from "@/Layouts/AppLayout.vue";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";
import { Link } from '@inertiajs/vue3';

// CKEditor
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const editor = ref(ClassicEditor);
const editorConfig = ref({});

const props = defineProps({
    title: String,
    product: Object,
    breadcrumbs: Object,
    categories: Object,
});

const formData = reactive({
    category_id: props.product.category_id,
    name: props.product.name,
    slug: props.product.slug,
    description: props.product.description,
    is_featured: props.product.is_featured,
    status: props.product.status,
    featured_image: null,
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
    form.put(route("products.update", props.product?.id), {
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
            <div class="w-full mx-auto bg-white p-4">
                <form @submit.prevent="submit" class="flex flex-col gap-2">
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-4 grid grid-cols-2 gap-2">
                            <div class="col-span-1">
                                <InputLabel for="name" :value="lang().label.name" />
                                <TextInput id="name" v-model="formData.name" type="text" class="block w-full"
                                    autocomplete="name" :placeholder="lang().placeholder.name" :error="form.errors.name" />
                                <InputError :message="form.errors.name" />
                            </div>

                            <div class="col-span-1">
                                <InputLabel for="slug" :value="lang().label.slug" />
                                <TextInput id="slug" v-model="formData.slug" type="text" class="block w-full"
                                    autocomplete="slug" :placeholder="lang().placeholder.slug" :error="form.errors.slug" />
                                <InputError :message="form.errors.slug" />
                            </div>
                        </div>

                        <div class="col-span-1 flex gap-1 h-fit">
                            <!-- <div class="grid grid-cols-2 gap-2"> -->
                            <button :disabled="form.processing" @click="submit" type="button"
                                class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 px-3 font-sans rounded-md text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full">{{
                                    lang().button.save }} {{ form.processing ? "..." : "" }}</button>

                            <Link :href="route('products.index')"
                                class="text-white  bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:ring-blue-300 font-sans rounded-md text-sm px-5 py-3  dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full">
                            Cancel

                            </Link>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-4 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg">
                            <InputLabel for="status" :value="lang().label.description" />
                            <ckeditor :editor="editor" id="description" v-model="formData.content" :config="editorConfig">
                            </ckeditor>
                            <InputError :message="form.errors.description" />
                        </div>

                        <div class="col-span-1 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-md text-sm">
                            <div id="accordion-open" data-accordion="open">
                                <h2 id="accordion-open-heading-1">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200  focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#product-summary" aria-expanded="true"
                                        aria-controls="product-summary">
                                        <span class="flex items-center">Summary</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="product-summary" class="hidden" aria-labelledby="accordion-open-heading-1">
                                    <div
                                        class="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <div class="space-y-1">
                                            <InputLabel for="category_id" :value="lang().label.category" />
                                            <select v-model="formData.category_id" id="category_id" name="category_id"
                                                class="block w-full h-8 py-0 text-sm">
                                                <option v-for="category in categories" :key="category.id"
                                                    :value="category.id">{{ category.name }}</option>
                                            </select>
                                            <InputError :message="form.errors.category_id" />
                                        </div>

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
                                    </div>
                                </div>

                                <h2 id="accordion-open-heading-3">
                                    <button type="button"
                                        class="flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        data-accordion-target="#product-featured-image" aria-expanded="true"
                                        aria-controls="product-featured-image">
                                        <span class="flex items-center">Featured Image</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="product-featured-image" class="hidden" aria-labelledby="accordion-open-heading-3">
                                    <div class="p-2 border border-t-0 border-gray-200 dark:border-gray-700">
                                        <div class="space-y-1">
                                            <ImageInput source="featured_image" v-model="formData.featured_image"
                                                :image="props.product.media[0]?.original_url"
                                                class="mt-1 block w-44 h-44" @fileChange="fileChange" />
                                            <InputError :message="form.errors.featured_image" class="mt-2" />
                                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                                {{ form.progress.percentage }}%
                                            </progress>
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
