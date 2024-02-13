<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watchEffect, inject } from "vue";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";

const removeBulkItems = inject('removeBulkItems');

const emit = defineEmits(["close"]);
const show = ref(false);
const props = defineProps({
    title: String,
    itemsSelected: Object,
});

const form = useForm({
    id: [],
});

watchEffect(() => {
    if (show) {
        if (props.itemsSelected && props.itemsSelected.length > 0) {
            form.id = props.itemsSelected.map(item => item.id);
        } else {
            // Reset form.id if itemsSelected is empty or not available
            form.id = [];
        }
    }
});

const submit = () => {
    form.post(route("clients.restore.bulk"), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            emit("close");
            removeBulkItems(form.id);
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
            <ArrowUturnLeftIcon class="w-4 h-auto" />
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
