<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, defineEmits, inject, watchEffect } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";

const removeBulkItems = inject('removeBulkItems');

const emit = defineEmits(["open"]);
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
    form.delete(route("categories.destroy.force.bulk"), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
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
        <DangerButton
            class="rounded-none"
            @click.prevent="(show = true), emit('open')"
        >
            <TrashIcon class="w-4 h-auto" />
        </DangerButton>

        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                {{ lang().label.delete }} {{ props.title }}
            </template>

            <template #content>
                {{ lang().label.delete_confirm }} {{ props.item?.name }}?
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    {{ lang().button.cancel }}
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="submit"
                >
                    {{ lang().button.delete }}
                    {{ form.processing ? "..." : "" }}
                </DangerButton>
            </template>
        </ConfirmationModal>
    </div>
</template>
