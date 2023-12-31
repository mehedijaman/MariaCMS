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
import { EyeIcon } from "@heroicons/vue/24/outline";
import { toTitleCase, generateSlug } from "../../Helpers/textHelper";
import { onMounted } from "vue";

const updateItem = inject('updateItem');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item: Object,
    update: Boolean,
});

const form = useForm({
    id: props.item?.id,
    status: 1,
});

const submit = () => {
    form.put(route("messages.update", props.item?.id), {
        preserveScroll: true,
        onSuccess: () => {
            updateItem(props.item?.id, form);
        },
        onError: () => null,
        onFinish: () => null,
    });
};

const closeModal = () => {
    show.value = false;

    if (props.update != false) {
        submit();
        form.errors = {};
        form.reset();
    }
};
</script>
<template>
    <div>
        <ActionButton variant="info" @click.prevent="(show = true), emit('open')">
            <EyeIcon class="w-4 h-auto" />
        </ActionButton>
        <DialogModal :show="show" @close="closeModal" max-width="md">
            <template #title>
                {{ lang().label.show }} {{ props.title }}
            </template>

            <template #content>
                <div>
                    <span class="font-semibold">Email</span>: {{ props.item.email }}
                </div>
                <div>
                    <span class="font-semibold">Phone</span>: {{ props.item.phone }}
                </div>
                <div>
                    <span class="font-semibold">Subject</span>: {{ props.item.subject }}
                </div>
                <div>
                    <span class="font-semibold">Message</span>: {{ props.item.message }}
                </div>
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    {{ lang().button.cancel }}
                </SecondaryButton>
            </template>
        </DialogModal>
    </div>
</template>
