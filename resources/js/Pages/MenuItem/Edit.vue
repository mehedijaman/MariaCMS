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
import { toTitleCase } from "../../Helpers/textHelper";

const updateItems = inject('updateItems');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item: Object,
});

const formData = reactive({
    menu_id: props.item?.menu_id,
    parent_id: props.item?.parent_id,
    name: props.item?.name,
    url: props.item?.url,
    target: props.item?.target,
});

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.put(route("menu.items.update", { menu: props.item?.menu_id, item: props.item?.id }), {
        preserveScroll: true,
        onSuccess: (response) => {
            closeModal();
            updateItems(response.props.items);
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
        <ActionButton @click.prevent="(show = true), emit('open')">
            <PencilIcon class="w-4 h-auto" />
        </ActionButton>
        <DialogModal :show="show" @close="closeModal" max-width="md">
            <template #title>
                {{ lang().label.edit }} {{ props.title }}
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div class="space-y-1 grid grid-cols-3">
                        <InputLabel for="name" :value="lang().label.name" class="col-span-1" />
                        <TextInput id="name" v-model="formData.name" type="text" class="block w-full h-9 col-span-2"
                            autocomplete="name" :placeholder="lang().placeholder.menu_name" :error="form.errors.name" />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1 grid grid-cols-3">
                        <InputLabel for="url" :value="lang().label.url" class="col-span-1" />
                        <TextInput id="url" v-model="formData.url" type="text" class="block w-full h-9 col-span-2"
                            autocomplete="url" placeholder="https://" :error="form.errors.url" />
                        <InputError :message="form.errors.url" />
                    </div>

                    <div class="space-y-1 grid grid-cols-3">
                        <InputLabel for="target" :value="lang().label.target" class="col-span-1 items-center" />
                        <select v-model="formData.target" id="target" name="target" class="block w-full h-9 col-span-2">
                            <option :value="null">Self Tab</option>
                            <option value="_blank">Blank Tab</option>
                        </select>
                        <InputError :message="form.errors.target" />
                    </div>

                    <!-- <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="submit">
                        {{ lang().button.save }} {{ form.processing ? "..." : "" }}
                    </PrimaryButton> -->
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
