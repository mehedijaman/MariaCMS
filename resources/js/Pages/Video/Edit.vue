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
import { generateSlug } from "@/Helpers/textHelper";

const updateItems = inject('updateItems');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item: Object,
});

const formData = reactive({
    thumbnail: null,
    name: props.item?.name,
    url: props.item?.url,
    description: props.item?.description,
    is_featured: props.item?.is_featured,
    status: props.item?.status,
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
    form.post(route("videos.update", props.item?.id), {
        preserveScroll: true,
        onSuccess: (response) => {
            closeModal();
            updateItems(response.props.videos);
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
    if (value.source === "thumbnail") {
        formData.thumbnail = value.file;
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
                    <div class="grid grid-cols-1 md:grid-cols-3 space-x-2">
                        <div class="col-span-1">
                            <div class="space-y-1">
                                <InputLabel for="thumbnail" value="Thumbnail" />
                                <ImageInput source="thumbnail" v-model="formData.thumbnail" class="mt-1 block w-auto h-48"
                                    :image="props.item.media[0]?.original_url" @fileChange="fileChange" />
                                <InputError :message="form.errors.thumbnail" class="mt-2" />
                                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                    {{ form.progress.percentage }}%
                                </progress>
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="is_featured" :value="lang().label.is_featured" />
                                <select v-model="formData.is_featured" id="is_featured" name="is_featured"
                                    class="block w-full">
                                    <option value="1">Featured</option>
                                    <option value="0">Not Featured</option>
                                </select>
                                <InputError :message="form.errors.is_featured" />
                            </div>
                        </div>

                        <div class="grid-cols-1 md:col-span-2">
                            <div class="space-y-1">
                                <InputLabel for="name" :value="lang().label.name" />
                                <TextInput id="name" v-model="formData.name" type="text" class="block w-full"
                                    autocomplete="name" :placeholder="lang().placeholder.gallery_name"
                                    :error="form.errors.name" />
                                <InputError :message="form.errors.name" />
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="url" :value="lang().label.url" />
                                <TextInput id="url" v-model="formData.url" type="text" class="block w-full"
                                    autocomplete="url" :placeholder="lang().placeholder.url" :error="form.errors.url" />
                                <InputError :message="form.errors.url" />
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="status" :value="lang().label.status" />
                                <select v-model="formData.status" id="status" name="status" class="block w-full">
                                    <option value="1">Published</option>
                                    <option value="0">Unpublished</option>
                                    <option :value="null">Draft</option>
                                </select>
                                <InputError :message="form.errors.status" />
                            </div>

                            <div class="space-y-1">
                                <InputLabel for="slug" :value="lang().label.description" />
                                <TextAreaInput id="slug" v-model="formData.description" type="text" class="block w-full"
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
