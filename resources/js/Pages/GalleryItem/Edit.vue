<script setup>
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import ImageInput from "@/Components/ImageInput.vue";
import ActionButton from "@/Components/ActionButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, defineEmits, watch } from "vue";
import { PencilIcon } from "@heroicons/vue/24/outline";

const updateItems = inject('updateItems');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item: Object,
});

const form = useForm({
    image: null,
    title: props.item?.title,
    description: props.item?.description,
    order: props.item?.order,
    status: props.item?.status,
    _method: "PUT",
});

const submit = () => {
    form.post(route("gallery.items.update", { gallery: props.item?.gallery_id, item: props.item?.id }), {
        preserveScroll: true,
        onSuccess: (response) => {
            updateItems(response.props.gallery_items);
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
                            <ImageInput source="image" v-model="form.image" class="mt-1 block w-full h-48"
                                :image="props.item?.media[0].original_url"
                                @fileChange="fileChange" />
                            <InputError :message="form.errors.image" class="mt-2" />
                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                {{ form.progress.percentage }}%
                            </progress>
                        </div>

                        <div class="col-span-2">
                            <div class="space-y-1">
                                <InputLabel for="status" :value="lang().label.status" />
                                <select v-model="form.status" id="status" name="status" class="block w-full">
                                    <option :value="1">Published</option>
                                    <option :value="0">Unpublished</option>
                                    <option :value="null">Draft</option>
                                </select>
                                <InputError :message="form.errors.status" />
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="title" :value="lang().label.title" />
                                <TextInput id="title" v-model="form.title" type="text" class="block w-full"
                                    autocomplete="title" :placeholder="lang().placeholder.gallery_title"
                                    :error="form.errors.title" />
                                <InputError :message="form.errors.name" />
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="slug" :value="lang().label.description" />
                                <TextAreaInput id="slug" v-model="form.description" type="text" class="block w-full"
                                    autocomplete="description" :placeholder="lang().placeholder.description"
                                    :error="form.errors.desctiption" />
                                <InputError :message="form.errors.description" />
                            </div>
                        </div>
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
