<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import DialogModal from "@/Components/DialogModal.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { reactive, ref, inject, watch } from "vue";

const updateItems = inject('updateItems');
const menu = inject('menu');
const items = inject('items');

const formData = reactive({
    menu_id: menu.id,
    parent_id: null,
    order: null,
    name: null,
    url: null,
    target: null,
    status: 1,
});

let form = useForm(formData);
watch(formData, (newValues) => {
    form = useForm(newValues);
});

const submit = () => {
    form.post(route("menu.items.store", menu.id), {
        preserveScroll: true,
        onSuccess: (response) => {
            updateItems(response.props.items);
        },
        onError: () => null,
        onFinish: () => null,
    });
};
</script>
<template>
    <form class="space-y-2" @submit.prevent="submit">
        <div class="grid grid-cols-3 items-center">
            <InputLabel for="parent_id" :value="lang().label.parent" class="col-span-1 items-center" />
            <select v-model="formData.parent_id" id="parent_id" name="parent_id" class="block w-full h-9 col-span-2">
                <option :value="null">/</option>
                <template v-for="(item, index) in items" :key="index">
                    <option :value="item.id">{{ item.name }}</option>
                    <template v-if="item.children" v-for="(child, index) in item.children" :key="index">
                        <option :value="child.id">&nbsp;&nbsp;&nbsp;&nbsp;- {{ child.name }}</option>

                        <template v-if="child.children" v-for="(child, index) in child.children" :key="index">
                            <option :value="child.id">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- {{ child.name }}
                            </option>
                        </template>
                    </template>
                </template>
            </select>
            <InputError :message="form.errors.parent_id" />
        </div>
        <div class="grid grid-cols-3 items-center">
            <InputLabel for="name" :value="lang().label.name" class="col-span-1" />
            <TextInput id="name" v-model="formData.name" type="text" class="block w-full h-9 col-span-2" autocomplete="name"
                :placeholder="lang().placeholder.menu_name" :error="form.errors.name" />
            <InputError :message="form.errors.name" />
        </div>

        <div class="grid grid-cols-3 items-center">
            <InputLabel for="url" :value="lang().label.url" class="col-span-1" />
            <TextInput id="url" v-model="formData.url" type="text" class="block w-full h-9 col-span-2" autocomplete="url"
                placeholder="https://" :error="form.errors.url" />
            <InputError :message="form.errors.url" />
        </div>

        <div class="grid grid-cols-3 items-center">
            <InputLabel for="target" :value="lang().label.target" class="col-span-1 items-center" />
            <select v-model="formData.target" id="target" name="target" class="block w-full h-9 col-span-2">
                <option :value="null">Self Tab</option>
                <option value="_blank">Blank Tab</option>
            </select>
            <InputError :message="form.errors.target" />
        </div>

        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="submit">
            {{ lang().button.save }} {{ form.processing ? "..." : "" }}
        </PrimaryButton>
    </form>
</template>
