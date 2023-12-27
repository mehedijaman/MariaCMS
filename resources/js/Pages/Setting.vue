<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import FormSection from "@/Components/FormSection.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import ImageInput from "@/Components/ImageInput.vue";

const props = defineProps({
    title: String,
    setting: Object,
});

const form = useForm({
    favicon: null,
    logo: null,
    name: props.setting?.name,
    short_name: props.setting?.short_name,
    tagline: props.setting?.tagline,
    description: props.setting?.description,
    homepage: props.setting?.homepage,
    background_color: props.setting?.background_color,
    additional_css: props.setting?.additional_css,
    header: props.setting?.header,
    footer: props.setting?.footer,
    address: props.setting?.address,
    google_map: props.setting?.google_map,
    contact_no: props.setting?.contact_no,
    email: props.setting?.email,
    facebook: props.setting?.facebook,
    twitter: props.setting?.twitter,
    instagram: props.setting?.instagram,
    youtube: props.setting?.youtube,
    whatsapp: props.setting?.whatsapp,
    _method: "PUT",
});
const update = () => {
    form.post(route("setting.update", props.setting?.id), {
        preserveScroll: true,
        onSuccess: () => null,
        onError: () => null,
        onFinish: () => null,
    });
};

const fileChange = (value) => {
    if (value.source === "favicon") {
        form.favicon = value.file;
    } else if (value.source === "logo") {
        form.logo = value.file;
    }
};
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs"/>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <FormSection>
                    <template #title> {{ lang().label.web_setting }} </template>

                    <template #description>
                        {{ lang().label.web_setting_description }}
                    </template>

                    <template #form class="grid grid-cols-6 gap-6 ">
                        <div class="col-span-6 grid grid-cols-6 gap-4">
                            <div class="col-span-6 sm:col-span-1">
                                <InputLabel for="favicon" value="Favicon" />
                                <ImageInput
                                    source="favicon"
                                    v-model="form.favicon"
                                    :image="props.setting.full_path_favicon"
                                    tooltip="Click to select/change favicon"
                                    class="mt-1 block w-14 h-14"
                                    @fileChange="fileChange"
                                />
                                <InputError
                                    :message="form.errors.favicon"
                                    class="mt-2"
                                />
                            </div>
                            <div class="col-span-6 sm:col-span-1">
                                <InputLabel for="logo" value="Logo" />
                                <ImageInput
                                    source="logo"
                                    v-model="form.logo"
                                    :image="props.setting.full_path_logo"
                                    tooltip="Click to select/change logo"
                                    class="mt-1 block w-24 h-24"
                                    @fileChange="fileChange"
                                />
                                <InputError
                                    :message="form.errors.logo"
                                    class="mt-2"
                                />
                            </div>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel for="name" :value="lang().label.name" />
                            <TextInput
                                id="name"
                                v-model="form.name"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.name"
                                :error="form.errors.name"
                            />
                            <InputError
                                :message="form.errors.name"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="short_name"
                                :value="lang().label.short_name"
                            />
                            <TextInput
                                id="short_name"
                                v-model="form.short_name"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.short_name"
                                :error="form.errors.short_name"
                            />
                            <InputError
                                :message="form.errors.short_name"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="tagline"
                                :value="lang().label.tagline"
                            />
                            <TextInput
                                id="tagline"
                                v-model="form.tagline"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.tagline"
                                :error="form.errors.tagline"
                            />
                            <InputError
                                :message="form.errors.tagline"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-6">
                            <InputLabel
                                for="description"
                                :value="lang().label.description"
                            />
                            <TextAreaInput
                                id="description"
                                rows="4"
                                v-model="form.description"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.description"
                                :error="form.errors.description"
                            />
                            <InputError
                                :message="form.errors.description"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="homepage"
                                :value="lang().label.homepage"
                            />
                            <TextInput
                                id="homepage"
                                v-model="form.homepage"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.homepage"
                                :error="form.errors.homepage"
                            />
                            <InputError
                                :message="form.errors.homepage"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="background_color"
                                :value="lang().label.background_color"
                            />
                            <TextInput
                                id="background_color"
                                v-model="form.background_color"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.background_color"
                                :error="form.errors.background_color"
                            />
                            <InputError
                                :message="form.errors.background_color"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="additional_css"
                                :value="lang().label.additional_css"
                            />
                            <TextInput
                                id="additional_css"
                                v-model="form.additional_css"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.additional_css"
                                :error="form.errors.additional_css"
                            />
                            <InputError
                                :message="form.errors.additional_css"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="header"
                                :value="lang().label.header"
                            />
                            <TextInput
                                id="header"
                                v-model="form.header"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.header"
                                :error="form.errors.header"
                            />
                            <InputError
                                :message="form.errors.header"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="footer"
                                :value="lang().label.footer"
                            />
                            <TextInput
                                id="footer"
                                v-model="form.footer"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.footer"
                                :error="form.errors.footer"
                            />
                            <InputError
                                :message="form.errors.footer"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="address"
                                :value="lang().label.address"
                            />
                            <TextInput
                                id="address"
                                v-model="form.address"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.address"
                                :error="form.errors.address"
                            />
                            <InputError
                                :message="form.errors.address"
                                class="mt-2"
                            />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="google_map"
                                :value="lang().label.google_map"
                            />
                            <TextInput
                                id="google_map"
                                v-model="form.google_map"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.google_map"
                                :error="form.errors.google_map"
                            />
                            <InputError
                                :message="form.errors.google_map"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="contact_no"
                                :value="lang().label.contact_no"
                            />
                            <TextInput
                                id="contact_no"
                                v-model="form.contact_no"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.contact_no"
                                :error="form.errors.contact_no"
                            />
                            <InputError
                                :message="form.errors.contact_no"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="email"
                                :value="lang().label.email"
                            />
                            <TextInput
                                id="email"
                                v-model="form.email"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.email"
                                :error="form.errors.email"
                            />
                            <InputError
                                :message="form.errors.email"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="facebook"
                                :value="lang().label.facebook"
                            />
                            <TextInput
                                id="facebook"
                                v-model="form.facebook"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.facebook"
                                :error="form.errors.facebook"
                            />
                            <InputError
                                :message="form.errors.facebook"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="twitter"
                                :value="lang().label.twitter"
                            />
                            <TextInput
                                id="twitter"
                                v-model="form.twitter"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.twitter"
                                :error="form.errors.twitter"
                            />
                            <InputError
                                :message="form.errors.twitter"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="instagram"
                                :value="lang().label.instagram"
                            />
                            <TextInput
                                id="instagram"
                                v-model="form.instagram"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.instagram"
                                :error="form.errors.instagram"
                            />
                            <InputError
                                :message="form.errors.instagram"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="youtube"
                                :value="lang().label.youtube"
                            />
                            <TextInput
                                id="youtube"
                                v-model="form.youtube"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.youtube"
                                :error="form.errors.youtube"
                            />
                            <InputError
                                :message="form.errors.youtube"
                                class="mt-2"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <InputLabel
                                for="whatsapp"
                                :value="lang().label.whatsapp"
                            />
                            <TextInput
                                id="whatsapp"
                                v-model="form.whatsapp"
                                type="text"
                                class="mt-1 block w-full"
                                :placeholder="lang().placeholder.whatsapp"
                                :error="form.errors.whatsapp"
                            />
                            <InputError
                                :message="form.errors.whatsapp"
                                class="mt-2"
                            />
                        </div>

                    </template>

                    <template #actions>
                        <ActionMessage
                            :on="form.recentlySuccessful"
                            class="mr-3"
                        >
                            {{ lang().label.saved }}
                        </ActionMessage>

                        <PrimaryButton
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="update"
                        >
                            {{ lang().button.save }}
                            {{ form.processing ? "..." : "" }}
                        </PrimaryButton>
                    </template>
                </FormSection>
            </div>
        </div>
    </AppLayout>
</template>
