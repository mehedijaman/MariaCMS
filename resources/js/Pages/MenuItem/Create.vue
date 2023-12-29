<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref , inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { toTitleCase } from "../../Helpers/textHelper";

const positions = inject('positions');
const addItem = inject('addItem');

const show = ref(false);

const formData = reactive({
    name: '',
    position:'primary',
    status:1,
});

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.post(route("menus.store"), {
        preserveScroll: true,
        onSuccess: (response) => {
            addItem(formData);
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


        <PrimaryButton
            class="flex rounded-none items-center justify-start gap-2"
            @click.prevent="show = true"
        >
            <PlusIcon class="w-4 h-auto" />
            <span class="hidden md:block">{{ lang().label.add }}</span>
        </PrimaryButton>
        <DialogModal :show="show" @close="closeModal" max-width="md">
            <template #title>
                {{ lang().label.add }}
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
                            :placeholder="lang().placeholder.menu_name"
                            :error="form.errors.name"
                        />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="position" :value="lang().label.position" />
                        <select
                            v-model="formData.position"
                            id="position"
                            name="position"
                            class="block w-full"
                        >
                            <!-- Iterate over positions and create options -->
                            <option
                                v-for="(position, index) in positions"
                                :key="index"
                                :value="position"
                            >
                                {{ toTitleCase(position) }}
                            </option>
                        </select>
                        <InputError :message="form.errors.position" />
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
