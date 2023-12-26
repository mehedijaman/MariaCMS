<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref , inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";

const addItem = inject('addItem');
const pages = inject('pages');

const show = ref(false);

const formData = reactive({
    name: null,
    slug:null,
    parent:null,
    content:null,
    excerpt:null,
    parent:null,
    password:null,
    status:1,
    meta_title:null,
    meta_description:null,
    meta_keywords:null,
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

const closeModal = () => {
    show.value = false;
    form.errors = {};
    form.reset();
};

</script>
<template>
    <div>
        <PrimaryButton
            class="flex rounded-none items-center justify-start gap-2"
            @click.prevent="show = true"
        >
            <PlusIcon class="w-4 h-auto" />
            <span class="hidden md:block">{{ lang().label.add }}</span>
        </PrimaryButton>
        <DialogModal :show="show" @close="closeModal" max-width="2xl">
            <template #title>
                {{ lang().label.add }}
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div class="space-y-1">
                        <InputLabel for="name" :value="lang().label.name" />
                        <TextInput
                            id="name"
                            v-model="formData.name"
                            type="text"
                            class="block w-full"
                            autocomplete="name"
                            :placeholder="lang().placeholder.page_name"
                            :error="form.errors.name"
                        />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.slug" />
                        <TextInput
                            id="slug"
                            v-model="formData.slug"
                            type="text"
                            class="block w-full"
                            autocomplete="slug"
                            :placeholder="lang().placeholder.slug"
                            :error="form.errors.slug"
                        />
                        <InputError :message="form.errors.slug" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.content" />
                        <TextInput
                            id="slug"
                            v-model="formData.content"
                            type="text"
                            class="block w-full"
                            autocomplete="content"
                            :placeholder="lang().placeholder.content"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.content" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="excerpt" :value="lang().label.excerpt" />
                        <TextInput
                            id="excerpt"
                            v-model="formData.excerpt"
                            type="text"
                            class="block w-full"
                            autocomplete="excerpt"
                            :placeholder="lang().placeholder.excerpt"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.excerpt" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="parent" :value="lang().label.parent" />
                        <select
                            v-model="formData.parent"
                            id="parent"
                            name="parent"
                            class="block w-full"
                        >
                            <option
                                v-for="(page, index) in pages"
                                :key="index"
                                :value="page.id"
                            >
                                {{ toTitleCase(page.name) }}
                            </option>
                        </select>
                        <InputError :message="form.errors.parent" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="password" :value="lang().label.password" />
                        <TextInput
                            id="password"
                            v-model="formData.password"
                            type="text"
                            class="block w-full"
                            autocomplete="password"
                            :placeholder="lang().placeholder.password"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.excerpt" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="status" :value="lang().label.status" />
                        <select
                            v-model="formData.status"
                            id="status"
                            name="status"
                            class="block w-full"
                        >
                            <!-- Iterate over statuss and create options -->
                            <option value="1">Published</option>
                            <option value="0">Unpublished</option>
                            <option :value="null">Draft</option>
                        </select>
                        <InputError :message="form.errors.status" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="meta_title" :value="lang().label.meta_title" />
                        <TextInput
                            id="meta_title"
                            v-model="formData.meta_title"
                            type="text"
                            class="block w-full"
                            autocomplete="meta_title"
                            :placeholder="lang().placeholder.meta_title"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.meta_title" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="meta_description" :value="lang().label.meta_description" />
                        <TextInput
                            id="meta_description"
                            v-model="formData.meta_description"
                            type="text"
                            class="block w-full"
                            autocomplete="meta_description"
                            :placeholder="lang().placeholder.meta_description"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.meta_description" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="meta_keywords" :value="lang().label.meta_keywords" />
                        <TextInput
                            id="meta_keywords"
                            v-model="formData.meta_keywords"
                            type="text"
                            class="block w-full"
                            autocomplete="meta_keywords"
                            :placeholder="lang().placeholder.meta_keywords"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.meta_keywords" />
                    </div>
                </form>
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    {{ lang().button.cancel }}
                </SecondaryButton>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="submit"
                >
                    {{ lang().button.save }} {{ form.processing ? "..." : "" }}
                </PrimaryButton>
            </template>
        </DialogModal>
    </div>
</template>
