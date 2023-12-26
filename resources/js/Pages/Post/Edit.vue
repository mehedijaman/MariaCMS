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

const updateItem = inject('updateItem');

const emit = defineEmits(["open"]);
const show = ref(false);
const props = defineProps({
    title: String,
    item:Object,
});

const formData = reactive(props.item);

// Watch for changes in the 'name' property
watch(() => formData.name, (newName) => {
  // Update the 'slug' property based on the new 'name'
  formData.slug = generateSlug(newName);
});

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.put(route("posts.update", props.item?.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            updateItem(props.item?.id, formData);
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
                        <InputLabel for="name" :value="lang().label.name" />
                        <TextInput
                            id="name"
                            v-model="formData.name"
                            type="text"
                            class="block w-full"
                            autocomplete="name"
                            :placeholder="lang().placeholder.page_name"
                            :error="form.errors.name"
                        />
                        <InputError :message="form.errors.name" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.slug" />
                        <TextInput
                            id="slug"
                            v-model="formData.slug"
                            type="text"
                            class="block w-full"
                            autocomplete="slug"
                            :placeholder="lang().placeholder.slug"
                            :error="form.errors.slug"
                        />
                        <InputError :message="form.errors.slug" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="slug" :value="lang().label.content" />
                        <TextInput
                            id="slug"
                            v-model="formData.content"
                            type="text"
                            class="block w-full"
                            autocomplete="content"
                            :placeholder="lang().placeholder.content"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.content" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="excerpt" :value="lang().label.excerpt" />
                        <TextInput
                            id="excerpt"
                            v-model="formData.excerpt"
                            type="text"
                            class="block w-full"
                            autocomplete="excerpt"
                            :placeholder="lang().placeholder.excerpt"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.excerpt" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="password" :value="lang().label.password" />
                        <TextInput
                            id="password"
                            v-model="formData.password"
                            type="text"
                            class="block w-full"
                            autocomplete="password"
                            :placeholder="lang().placeholder.password"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.excerpt" />
                    </div>
                    <div class="space-y-1">
                        <InputLabel for="allow_comment" :value="lang().label.allow_comment" />
                        <select
                            v-model="formData.allow_comment"
                            id="allow_comment"
                            name="allow_comment"
                            class="block w-full"
                        >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <InputError :message="form.errors.allow_comment" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="is_featured" :value="lang().label.is_featured" />
                        <select
                            v-model="formData.is_featured"
                            id="is_featured"
                            name="is_featured"
                            class="block w-full"
                        >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <InputError :message="form.errors.is_featured" />
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

                    <div class="space-y-1">
                        <InputLabel for="meta_title" :value="lang().label.meta_title" />
                        <TextInput
                            id="meta_title"
                            v-model="formData.meta_title"
                            type="text"
                            class="block w-full"
                            autocomplete="meta_title"
                            :placeholder="lang().placeholder.meta_title"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.meta_title" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="meta_description" :value="lang().label.meta_description" />
                        <TextInput
                            id="meta_description"
                            v-model="formData.meta_description"
                            type="text"
                            class="block w-full"
                            autocomplete="meta_description"
                            :placeholder="lang().placeholder.meta_description"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.meta_description" />
                    </div>

                    <div class="space-y-1">
                        <InputLabel for="meta_keywords" :value="lang().label.meta_keywords" />
                        <TextInput
                            id="meta_keywords"
                            v-model="formData.meta_keywords"
                            type="text"
                            class="block w-full"
                            autocomplete="meta_keywords"
                            :placeholder="lang().placeholder.meta_keywords"
                            :error="form.errors.desctiption"
                        />
                        <InputError :message="form.errors.meta_keywords" />
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
