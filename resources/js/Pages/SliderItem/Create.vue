<script setup>
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";

const updateItems = inject('updateItems');
const slider = inject('slider');

const show = ref(false);

const form = useForm({
    image: null,
    title: null,
    description: null,
    link: null,
    target: null,
    order: null,
    status: 1,
});

const submit = () => {
    form.post(route("slider.items.store", { slider: slider.id }), {
        preserveScroll: true,
        onSuccess: (response) => {
            updateItems(response.props.slider_items);
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
        <PrimaryButton class="flex rounded-none items-center justify-start gap-2" @click.prevent="show = true">
            <PlusIcon class="w-4 h-auto" />
            <span class="hidden md:block">{{ lang().label.add }}</span>
        </PrimaryButton>
        <DialogModal :show="show" @close="closeModal" max-width="2xl">
            <template #title>
                {{ lang().label.add }}
            </template>

            <template #content>
                <form class="space-y-2" @submit.prevent="submit">
                    <div class="space-y-1">
                        <InputLabel for="image" :value="lang().label.image" />
                        <!-- <TextInput id="image" v-model="form.image" type="file" class="block w-full"
                            @input="form.image = $event.target.files[0]" autocomplete="image"
                            :placeholder="lang().placeholder.slider_image" :error="form.errors.image" />
                        <InputError :message="form.errors.image" /> -->
                        <input type="file" @input="form.image = $event.target.files[0]"/>
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                            {{ form.progress.percentage }}%
                        </progress>
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="title" :value="lang().label.title" />
                        <TextInput id="title" v-model="form.title" type="text" class="block w-full" autocomplete="title"
                            :placeholder="lang().placeholder.slider_title" :error="form.errors.title" />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.description" />
                        <TextInput id="slug" v-model="form.description" type="text" class="block w-full"
                            autocomplete="description" :placeholder="lang().placeholder.description"
                            :error="form.errors.desctiption" />
                        <InputError :message="form.errors.description" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="link" :value="lang().label.link" />
                        <TextInput id="link" v-model="form.link" type="text" class="block w-full" autocomplete="link"
                            :placeholder="lang().placeholder.link" :error="form.errors.link" />
                        <InputError :message="form.errors.link" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="target" :value="lang().label.target" />
                        <TextInput id="target" v-model="form.target" type="text" class="block w-full" autocomplete="target"
                            :placeholder="lang().placeholder.target" :error="form.errors.target" />
                        <InputError :message="form.errors.target" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="status" :value="lang().label.status" />
                        <select v-model="form.status" id="status" name="status" class="block w-full">
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

                <PrimaryButton class="ml-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                    @click="submit">
                    {{ lang().button.save }} {{ form.processing ? "..." : "" }}
                </PrimaryButton>
            </template>
        </DialogModal>
    </div>
</template>
