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
    form.put(route("faqs.update", props.item?.id), {
        preserveScroll: true,
        onSuccess: (response) => {
            closeModal();
            updateItems(response.props.faqs);
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
                        <InputLabel for="question" :value="lang().label.name" />
                        <TextInput
                            id="question"
                            v-model="formData.question"
                            type="text"
                            class="block w-full"
                            autocomplete="question"
                            :placeholder="lang().placeholder.faq_question"
                            :error="form.errors.question"
                        />
                        <InputError :message="form.errors.question" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="answer" :value="lang().label.answer" />
                        <TextInput
                            id="answer"
                            v-model="formData.answer"
                            type="text"
                            class="block w-full"
                            autocomplete="answer"
                            :placeholder="lang().placeholder.answer"
                            :error="form.errors.answer"
                        />
                        <InputError :message="form.errors.answer" />
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
