<script setup>
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import ActionButton from "@/Components/ActionButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, defineEmits, watch } from "vue";
import { PencilIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";

const title = inject('title');
const updateItems = inject('updateItems');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    item: Object,
});

const form = useForm({
    image: null,
    name: props.item?.name,
    designation: props.item?.designation,
    company: props.item?.company,
    description: props.item?.description,
    rating: props.item?.rating,
    status: props.item?.status,
    _method: "PUT",
});
const submit = () => {
    form.post(route("testimonials.update", props.item?.id), {
        preserveScroll: true,
        onSuccess: (response) => {
            closeModal();
            updateItems(response.props.testimonials);
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

const fileChange = (value) => {
    if (value.source === "image") {
        form.image = value.file;
    }
};
</script>
<template>
    <div>
        <ActionButton @click.prevent="(show = true), emit('open')">
            <PencilIcon class="w-4 h-auto" />
        </ActionButton>
        <DialogModal :show="show" @close="closeModal" max-width="2xl">
            <template #title>
                {{ lang().label.edit }} {{ props.title }}
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div class="grid grid-cols-3 space-x-2">
                        <div class="col-span-1">
                            <InputLabel for="image" value="Image" />
                            <ImageInput source="image" class="mt-1 block w-36 h-36 rounded-full"
                                :image="props.item.media[0]?.original_url" @fileChange="fileChange" />
                            <InputError :message="form.errors.image" class="mt-2" />
                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                {{ form.progress.percentage }}%
                            </progress>
                        </div>

                        <div class="col-span-2">
                            <div class="flex flex-col md:flex-row gap-4">
                                <div class="space-y-1 w-full">
                                    <InputLabel for="rating" :value="lang().label.rating" />
                                    <select v-model="form.rating" id="rating" name="rating" class="block w-full">
                                        <option value="5">***** (5) </option>
                                        <option value="4">**** (4) </option>
                                        <option value="3">*** (3) </option>
                                        <option value="2">** (2) </option>
                                        <option value="1">* (1) </option>
                                        <option :value="null">None</option>
                                    </select>
                                    <InputError :message="form.errors.rating" />
                                </div>

                                <div class="space-y-1 w-full">
                                    <InputLabel for="status" :value="lang().label.status" />
                                    <select v-model="form.status" id="status" name="status" class="block w-full">
                                        <option value="1">Published</option>
                                        <option value="0">Unpublished</option>
                                        <option :value="null">Draft</option>
                                    </select>
                                    <InputError :message="form.errors.status" />
                                </div>
                            </div>

                            <div class="">
                                <InputLabel for="name" :value="lang().label.name" />
                                <TextInput id="name" v-model="form.name" type="text" class="block w-full"
                                    autocomplete="name" :placeholder="lang().placeholder.name" :error="form.errors.name" />
                                <InputError :message="form.errors.name" />
                            </div>

                            <div class="flex flex-col md:flex-row md:gap-4">
                                <div class="space-y-1 w-full">
                                    <InputLabel for="designation" :value="lang().label.designation" />
                                    <TextInput id="designation" v-model="form.designation" type="text"
                                        class="block w-full" autocomplete="designation"
                                        :placeholder="lang().placeholder.designation" :error="form.errors.designation" />
                                    <InputError :message="form.errors.designation" />
                                </div>

                                <div class="space-y-1 w-full">
                                    <InputLabel for="company" :value="lang().label.company" />
                                    <TextInput id="company" v-model="form.company" type="text" class="block w-full"
                                        autocomplete="company" :placeholder="lang().placeholder.company"
                                        :error="form.errors.company" />
                                    <InputError :message="form.errors.company" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.description" />
                        <TextAreaInput id="slug" v-model="form.description" type="text" class="block w-full"
                            autocomplete="description" :placeholder="lang().placeholder.description"
                            :error="form.errors.desctiption" />
                        <InputError :message="form.errors.description" />
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
    </div>
</template>
