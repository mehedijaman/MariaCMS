<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import FormSection from "@/Components/FormSection.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import DangerButton from '@/Components/DangerButton.vue';
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import ImageInput from "@/Components/ImageInput.vue";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

const props = defineProps({
    title: String,
    hero: Object,
    breadcrumbs: Object,
});

const form = useForm({
    image: null,
    title: props.hero?.title,
    description: props.hero?.description,
    buttonText: props.hero?.button_text,
    buttonURL: props.hero?.button_url,
    buttonTarget: props.hero?.button_target,
    _method: "PUT",
});
const update = () => {
    form.post(route("heroes.update", props.hero?.id), {
        preserveScroll: true,
        onSuccess: () => null,
        onError: () => null,
        onFinish: () => null,
    });
};

const fileChange = (value) => {
    if (value.source === "image") {
        form.image = value.file;
    }
};
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs" />
        <div class="max-w-7xl mx-auto sm:px-4 lg:px-4 lg:pb-4">
            <FormSection>
                <template #form class="grid grid-cols-6 gap-6 ">

                    <div class="col-span-6 flex gap-4 w-full">
                        <div class="w-1/2">
                            <div class="">
                                <InputLabel for="title" :value="lang().label.title" />
                                <TextInput id="title" v-model="form.title" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.title" :error="form.errors.title" />
                                <InputError :message="form.errors.title" class="mt-2" />
                            </div>

                            <div class="">
                                <InputLabel for="buttonText" :value="lang().label.button_text" />
                                <TextInput id="buttonText" v-model="form.buttonText" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.button_text" :error="form.errors.buttonText" />
                                <InputError :message="form.errors.buttonText" class="mt-2" />
                            </div>

                            <div class="">
                                <InputLabel for="buttonURL" :value="lang().label.button_url" />
                                <TextInput id="buttonURL" v-model="form.buttonURL" type="text" class="mt-1 block w-full"
                                    :placeholder="lang().placeholder.button_url" :error="form.errors.buttonURL" />
                                <InputError :message="form.errors.buttonURL" class="mt-2" />
                            </div>

                            <div class="">
                                <InputLabel for="buttonTarget" :value="lang().label.button_target" />
                                <TextInput id="buttonTarget" v-model="form.buttonTarget" type="text"
                                    class="mt-1 block w-full" :placeholder="lang().placeholder.button_target"
                                    :error="form.errors.buttonTarget" />
                                <InputError :message="form.errors.buttonTarget" class="mt-2" />
                            </div>
                        </div>

                        <div class="w-1/2 h-fit">
                            <InputLabel for="image" :value="lang().label.image" />
                            <ImageInput source="image" v-model="form.image" :image="props.hero.full_path_image"
                                tooltip="Click to select/change image" class="mt-1 block w-full h-64"
                                @fileChange="fileChange" />
                            <InputError :message="form.errors.image" class="mt-2" />
                        </div>
                    </div>


                    <div class="col-span-6 sm:col-span-6">
                        <InputLabel for="description" :value="lang().label.description" />
                        <TextAreaInput id="description" rows="4" v-model="form.description" class="mt-1 block w-full"
                            :placeholder="lang().placeholder.description" :error="form.errors.description" />
                        <InputError :message="form.errors.description" class="mt-2" />
                    </div>






                </template>
                <template #actions>
                    <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                        {{ lang().label.saved }}
                    </ActionMessage>

                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="update">
                        {{ lang().button.save }}
                        {{ form.processing ? "..." : "" }}
                    </PrimaryButton>
                </template>
            </FormSection>
        </div>
    </AppLayout>
</template>
