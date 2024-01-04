<script setup>
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";

const updateItems = inject('updateItems');
const slider = inject('slider');

const show = ref(false);

const form = useForm({
    image: null,
    title: null,
    description: null,
    link: null,
    target: null,
    order: null,
    status: 1,
});

const submit = () => {
    form.post(route("slider.items.store", { slider: slider.id }), {
        preserveScroll: true,
        onSuccess: (response) => {
            updateItems(response.props.slider_items);
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
        <PrimaryButton class="flex rounded-none items-center justify-start gap-2" @click.prevent="show = true">
            <PlusIcon class="w-4 h-auto" />
            <span class="hidden md:block">{{ lang().label.add }}</span>
        </PrimaryButton>
        <DialogModal :show="show" @close="closeModal" max-width="2xl">
            <template #title>
                {{ lang().label.add }} <br>
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div id="image-preview"
                        class="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                        <input id="upload" @input="form.image = $event.target.files[0]" type="file" class="hidden" accept="image/*" />

                        <label for="upload" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                            <p class="font-normal text-sm text-gray-400 md:px-6">Photo size should be less than <b
                                    class="text-gray-600">2MB</b></p>
                            <p class="font-normal text-sm text-gray-400 md:px-6">and should be in <b
                                    class="text-gray-600">JPG, JPEG or PNG</b> format.</p>
                            <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                        </label>
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                            {{ form.progress.percentage }}%
                        </progress>
                    </div>
                    <!-- <div class="space-y-1">
                        <InputLabel for="image" :value="lang().label.image" />

                        <input type="file" @input="form.image = $event.target.files[0]" />
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                            {{ form.progress.percentage }}%
                        </progress>
                        <InputError :message="form.errors.image" />
                    </div> -->

                    <div class="space-y-1">
                        <InputLabel for="title" :value="lang().label.title" />
                        <TextInput id="title" v-model="form.title" type="text" class="block w-full" autocomplete="title"
                            :placeholder="lang().placeholder.slider_title" :error="form.errors.title" />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.description" />
                        <TextInput id="slug" v-model="form.description" type="text" class="block w-full"
                            autocomplete="description" :placeholder="lang().placeholder.description"
                            :error="form.errors.desctiption" />
                        <InputError :message="form.errors.description" />
                    </div>

                    <div class="grid grid-cols-3 gap-2 ">
                        <div class="col-span-2">
                            <InputLabel for="link" :value="lang().label.link" />
                            <TextInput id="link" v-model="form.link" type="text" class="block w-full" autocomplete="link"
                                placeholder="https://" :error="form.errors.link" />
                            <InputError :message="form.errors.link" />
                        </div>

                        <div class="col-span-1">
                            <InputLabel for="target" :value="lang().label.target" />
                            <select v-model="form.target" id="target" name="target" class="block w-full"
                                :error="form.errors.target">
                                <option :value="null">Self</option>
                                <option value="_blank">Blank</option>
                            </select>
                            <InputError :message="form.errors.target" />
                        </div>
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="status" :value="lang().label.status" />
                        <select v-model="form.status" id="status" name="status" class="block w-full">
                            <!-- Iterate over statuss and create options -->
                            <option value="1">Published</option>
                            <option value="0">Unpublished</option>
                            <option :value="null">Draft</option>
                        </select>
                        <InputError :message="form.errors.status" />
                    </div>
                </form>
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    {{ lang().button.cancel }}
                </SecondaryButton>

                <PrimaryButton class="ml-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                    @click="submit">
                {{ lang().button.save }} {{ form.processing ? "..." : "" }}
            </PrimaryButton>
        </template>
    </DialogModal>
</div></template>
