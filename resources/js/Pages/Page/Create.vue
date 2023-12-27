<script setup>
import CreateLayout from "@/Layouts/CreateLayout.vue";
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
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";

import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    pages: Object,
    breadcrumbs: Object,
});

const formData = reactive({
    name: null,
    slug: null,
    content: null,
    excerpt: null,
    parent: null,
    password: null,
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
    form.post(route("pages.store"), {
        preserveScroll: true,
        onSuccess: (response) => {
            addItem(formData);
            closeModal();
        },
        onError: () => null,
        onFinish: () => null,
    });
};
</script>

<template>
    <CreateLayout :title="props.title">
        <div class="py-2">
            <div class="w-full mx-auto">
                <form class="grid grid-cols-5 gap-2" @submit.prevent="submit">
                    <div class="col-span-4 bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-4">

                        <div class="grid grid-cols-2 gap-2">
                            <div class="space-y-1">
                                <InputLabel for="name" :value="lang().label.name" />
                                <TextInput id="name" v-model="formData.name" type="text" class="block w-full"
                                    autocomplete="name" :placeholder="lang().placeholder.page_name"
                                    :error="form.errors.name" />
                                <InputError :message="form.errors.name" />
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="slug" :value="lang().label.slug" />
                                <TextInput id="slug" v-model="formData.slug" type="text" class="block w-full"
                                    autocomplete="slug" :placeholder="lang().placeholder.slug" :error="form.errors.slug" />
                                <InputError :message="form.errors.slug" />
                            </div>
                        </div>


                        <div class="space-y-1">
                            <InputLabel for="slug" :value="lang().label.content" />
                            <TextInput id="slug" v-model="formData.content" type="text" class="block w-full h-screen"
                                autocomplete="content" :placeholder="lang().placeholder.content"
                                :error="form.errors.desctiption" />
                            <InputError :message="form.errors.content" />
                        </div>
                    </div>

                    <div class="col-span-1 bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-4">
                        <div class="grid grid-cols-2 gap-2">
                            <!-- <PrimaryButton class="" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                @click="submit">
                                {{ lang().button.save }} {{ form.processing ? "..." : "" }}
                            </PrimaryButton> -->
                            <button :disabled="form.processing" @click="submit" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full">{{
                                    lang().button.save }} {{ form.processing ? "..." : "" }}</button>

                            <Link :href="route('pages.index')"
                                class="text-white  bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-3 me-2 mb-2 dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full">
                            Cancel

                            </Link>
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="status" :value="lang().label.status" />
                            <select v-model="formData.status" id="status" name="status" class="block w-full">
                                <!-- Iterate over statuss and create options -->
                                <option value="1">Published</option>
                                <option value="0">Unpublished</option>
                                <option :value="null">Draft</option>
                            </select>
                            <InputError :message="form.errors.status" />
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="parent" :value="lang().label.parent" />
                            <select v-model="formData.parent" id="parent" name="parent" class="block w-full">
                                <option :value="null">None</option>
                                <option v-for="(page, index) in pages" :key="index" :value="page.id">
                                    {{ toTitleCase(page.name) }}
                                </option>
                            </select>
                            <InputError :message="form.errors.parent" />
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="password" :value="lang().label.password" />
                            <TextInput id="password" v-model="formData.password" type="text" class="block w-full"
                                autocomplete="password" :placeholder="lang().placeholder.password"
                                :error="form.errors.desctiption" />
                            <InputError :message="form.errors.excerpt" />
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="excerpt" :value="lang().label.excerpt" />
                            <TextInput id="excerpt" v-model="formData.excerpt" type="text" class="block w-full"
                                autocomplete="excerpt" :placeholder="lang().placeholder.excerpt"
                                :error="form.errors.desctiption" />
                            <InputError :message="form.errors.excerpt" />
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="meta_title" :value="lang().label.meta_title" />
                            <TextInput id="meta_title" v-model="formData.meta_title" type="text" class="block w-full"
                                autocomplete="meta_title" :placeholder="lang().placeholder.meta_title"
                                :error="form.errors.desctiption" />
                            <InputError :message="form.errors.meta_title" />
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="meta_description" :value="lang().label.meta_description" />
                            <TextInput id="meta_description" v-model="formData.meta_description" type="text"
                                class="block w-full" autocomplete="meta_description"
                                :placeholder="lang().placeholder.meta_description" :error="form.errors.desctiption" />
                            <InputError :message="form.errors.meta_description" />
                        </div>

                        <div class="space-y-1">
                            <InputLabel for="meta_keywords" :value="lang().label.meta_keywords" />
                            <TextInput id="meta_keywords" v-model="formData.meta_keywords" type="text" class="block w-full"
                                autocomplete="meta_keywords" :placeholder="lang().placeholder.meta_keywords"
                                :error="form.errors.desctiption" />
                            <InputError :message="form.errors.meta_keywords" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </CreateLayout>
</template>
