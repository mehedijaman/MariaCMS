<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watchEffect, inject } from "vue";

const removeAllItems = inject('removeAllItems');

const emit = defineEmits(["close"]);
const show = ref(false);
const props = defineProps({
    title: String,
});

const form = useForm({});

const submit = () => {
    form.post(route("product-categories.restore.all"), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            emit("close");
            removeAllItems();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

const closeModal = () => {
    show.value = false;
};
</script>
<template>
    <div>
        <PrimaryButton
            class="rounded-none"
            @click.prevent="show = true"
        >
            Restore All
        </PrimaryButton>
        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                {{ lang().label.restore_selected }} {{ props.title }}
            </template>

            <template #content>
                {{ lang().label.restore_confirm }}
                {{ props.selectedId?.length }} {{ props.title }}?
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
                    {{ lang().button.restore }}
                    {{ form.processing ? "..." : "" }}
                </PrimaryButton>
            </template>
        </ConfirmationModal>
    </div>
</template>
