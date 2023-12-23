<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import ActionButton from "@/Components/ActionButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, defineEmits } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["open", "removeItem"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item: Object,
});

const form = useForm({});

const submit = () => {
    form.delete(route("menus.destroy", props.item?.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            emit('removeItem', props.item?.id);
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
        <ActionButton
            variant="danger"
            @click.prevent="(show = true), emit('open')"
        >
            <TrashIcon class="w-4 h-auto" />
        </ActionButton>
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
