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
import { reactive, ref, inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { generateSlug } from "../../Helpers/textHelper";

const title = inject('title');
const updateItems = inject('updateItems');

const show = ref(false);

const formData = reactive({
    name: null,
    slug: null,
    description: null,
    status: 1,
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
    form.post(route("sliders.store"), {
        preserveScroll: true,
        onSuccess: (response) => {
            updateItems(response.props.sliders);
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
        <DialogModal :show="show" @close="closeModal" max-width="xl">
            <template #title>
                {{ lang().label.add }} {{ title }}
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="w-full">
                            <InputLabel for="name" :value="lang().label.name" />
                            <TextInput id="name" v-model="formData.name" type="text" class="block w-full"
                                autocomplete="name" :placeholder="lang().placeholder.slider_name"
                                :error="form.errors.name" />
                            <InputError :message="form.errors.name" />
                        </div>

                        <div class="w-full">
                            <InputLabel for="slug" :value="lang().label.slug" />
                            <TextInput id="slug" v-model="formData.slug" type="text" class="block w-full"
                                autocomplete="slug" :placeholder="lang().placeholder.slug" :error="form.errors.slug" />
                            <InputError :message="form.errors.slug" />
                        </div>
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.description" />
                        <TextAreaInput id="slug" v-model="formData.description" type="text" class="block w-full"
                            autocomplete="description" :placeholder="lang().placeholder.description"
                            :error="form.errors.desctiption" />
                        <InputError :message="form.errors.description" />
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
