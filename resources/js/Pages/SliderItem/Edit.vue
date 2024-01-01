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

const updateItem = inject('updateItem');

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
    form.put(route("slider.items.update",{slider: props.item?.slider_id, item: props.item?.id}), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            // updateItem(props.item?.id, formData);
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
                        <InputLabel for="image" :value="lang().label.image" />
                        <TextInput
                            id="image"
                            v-model="form.image"
                            type="text"
                            class="block w-full"
                            autocomplete="image"
                            :placeholder="lang().placeholder.slider_image"
                            :error="form.errors.image"
                        />
                        <InputError :message="form.errors.image" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="title" :value="lang().label.title" />
                        <TextInput
                            id="title"
                            v-model="form.title"
                            type="text"
                            class="block w-full"
                            autocomplete="title"
                            :placeholder="lang().placeholder.slider_title"
                            :error="form.errors.title"
                        />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.description" />
                        <TextInput
                            id="slug"
                            v-model="form.description"
                            type="text"
                            class="block w-full"
                            autocomplete="description"
                            :placeholder="lang().placeholder.description"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.description" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="link" :value="lang().label.link" />
                        <TextInput
                            id="link"
                            v-model="form.link"
                            type="text"
                            class="block w-full"
                            autocomplete="link"
                            :placeholder="lang().placeholder.link"
                            :error="form.errors.link"
                        />
                        <InputError :message="form.errors.link" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="target" :value="lang().label.target" />
                        <TextInput
                            id="target"
                            v-model="form.target"
                            type="text"
                            class="block w-full"
                            autocomplete="target"
                            :placeholder="lang().placeholder.target"
                            :error="form.errors.target"
                        />
                        <InputError :message="form.errors.target" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="status" :value="lang().label.status" />
                        <select
                            v-model="form.status"
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
