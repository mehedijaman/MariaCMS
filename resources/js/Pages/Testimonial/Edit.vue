<script setup>
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import ActionButton from "@/Components/ActionButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, defineEmits, watch } from "vue";
import { PencilIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";

const updateItems = inject('updateItems');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item:Object,
});

const formData = reactive(props.item);

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.put(route("testimonials.update", props.item?.id), {
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
</script>
<template>
    <div>
        <ActionButton
            @click.prevent="(show = true), emit('open')"
        >
            <PencilIcon class="w-4 h-auto" />
        </ActionButton>
        <DialogModal :show="show" @close="closeModal" max-width="md">
            <template #title>
                {{ lang().label.edit }} {{ props.title }}
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
                            :placeholder="lang().placeholder.slider_name"
                            :error="form.errors.name"
                        />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="designation" :value="lang().label.designation" />
                        <TextInput
                            id="designation"
                            v-model="formData.designation"
                            type="text"
                            class="block w-full"
                            autocomplete="designation"
                            :placeholder="lang().placeholder.designation"
                            :error="form.errors.designation"
                        />
                        <InputError :message="form.errors.designation" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="company" :value="lang().label.company" />
                        <TextInput
                            id="company"
                            v-model="formData.company"
                            type="text"
                            class="block w-full"
                            autocomplete="company"
                            :placeholder="lang().placeholder.company"
                            :error="form.errors.company"
                        />
                        <InputError :message="form.errors.company" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="rating" :value="lang().label.rating" />
                        <TextInput
                            id="rating"
                            v-model="formData.rating"
                            type="text"
                            class="block w-full"
                            autocomplete="rating"
                            :placeholder="lang().placeholder.rating"
                            :error="form.errors.rating"
                        />
                        <InputError :message="form.errors.rating" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.description" />
                        <TextInput
                            id="slug"
                            v-model="formData.description"
                            type="text"
                            class="block w-full"
                            autocomplete="description"
                            :placeholder="lang().placeholder.description"
                            :error="form.errors.desctiption"
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
