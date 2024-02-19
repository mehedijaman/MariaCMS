<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref , inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";

const title = inject('title');
const updateItems = inject('updateItems');

const show = ref(false);

const formData = reactive({
    title: null,
    url:null,
    description:null,
    status:1,
});

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.post(route("important-links.store"), {
        preserveScroll: true,
        onSuccess: (response) => {
            updateItems(response.props.important_links);
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
        <DialogModal :show="show" @close="closeModal" max-width="xl">
            <template #title>
                {{ lang().label.add }} {{ title }}
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div class="space-y-1">
                        <InputLabel for="title" :value="lang().label.title" />
                        <TextInput
                            id="title"
                            v-model="formData.title"
                            type="text"
                            class="block w-full"
                            autocomplete="title"
                            :placeholder="lang().placeholder.title"
                            :error="form.errors.title"
                        />
                        <InputError :message="form.errors.title" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="url" :value="lang().label.url" />
                        <TextInput
                            id="url"
                            v-model="formData.url"
                            type="text"
                            class="block w-full"
                            autocomplete="url"
                            :placeholder="lang().placeholder.url"
                            :error="form.errors.url"
                        />
                        <InputError :message="form.errors.url" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="description" :value="lang().label.description" />
                        <TextAreaInput
                            id="description"
                            v-model="formData.description"
                            type="text"
                            class="block w-full"
                            autocomplete="description"
                            :placeholder="lang().placeholder.faq_description"
                            :error="form.errors.description"
                        />
                        <InputError :message="form.errors.description" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="status" :value="lang().label.status" />
                        <select
                            v-model="formData.status"
                            id="status"
                            name="status"
                            class="block w-full"
                        >
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
