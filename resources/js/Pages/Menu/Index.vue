<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, reactive, watch, provide, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { formatDate } from "../../Helpers/dateHelper";
import Published from "./Published.vue";
import Unpublished from './Unpublished.vue';
import Draft from './Draft.vue';

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    menus: Object,
    positions: Object,
    breadcrumbs: Object,
});

const items = reactive(props.menus);
const published = computed(() => items.filter(item => item.status == true));
const unpublished = computed(() => items.filter(item => item.status == false));
const draft = computed(() => items.filter(item => item.status == null));


// Method to add an item to the array
const addItem = (newItem) => {
  items.push(newItem);
};

// Method to remove an item from the array based on its ID
const removeItem = (itemId) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === itemId);

    // Remove the item if found
    if (index !== -1) {
        items.splice(index, 1);
    }
};

const removeBulkItem = (itemIds) => {
    // Iterate over the array of item IDs
    itemIds.forEach(itemId => {
        // Find the index of the item in the items array
        const index = items.findIndex(item => item.id === itemId);

        // Remove the item if found
        if (index !== -1) {
            items.splice(index, 1);
        }
    });
};

// Method to update an item in the array based on its ID
const updateItem = (id, updatedData) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === id);
    // Update the item if found
    if (index !== -1) {
        items[index].name = updatedData.name;
        items[index].position = updatedData.position;
        items[index].status = updatedData.status;
    }
};

provide('published', published);
provide('unpublished', unpublished);
provide('draft', draft);

provide('positions', props.positions);

provide('addItem', addItem);
provide('removeItem', removeItem);
provide('removeBulkItem', removeBulkItem);
provide('updateItem', updateItem);
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <!-- <template #breadcrumb>
            <Breadcrumb />
        </template> -->

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded">
                    <div class="border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                            data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg" id="published-tab"
                                    data-tabs-target="#published" type="button" role="tab" aria-controls="published"
                                    aria-selected="false">
                                    <BookOpenIcon
                                        class="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BookOpenIcon>
                                    Published
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="unpublished-tab" data-tabs-target="#unpublished" type="button" role="tab"
                                    aria-controls="unpublished" aria-selected="false">
                                    <BookmarkSlashIcon
                                        class="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BookmarkSlashIcon>
                                    Unpublished
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="draft-tab" data-tabs-target="#draft" type="button" role="tab" aria-controls="draft"
                                    aria-selected="false">
                                    <BriefcaseIcon
                                        class="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BriefcaseIcon>
                                    Draft
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                                    id="trash-tab" data-tabs-target="#trash" type="button" role="tab" aria-controls="trash"
                                    aria-selected="false">
                                    <TrashIcon
                                        class="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </TrashIcon>
                                    Trash
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="published" role="tabpanel"
                            aria-labelledby="published-tab">
                            <Published></Published>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unpublished" role="tabpanel"
                            aria-labelledby="unpublished-tab">
                            <!-- <Table>
                                <template #table-action>
                                    <div class="flex shrink-0 rounded overflow-hidden">
                                        <Create v-show="can(['menu create'])" :title="props.title"
                                            :permissions="props.permissions" />
                                        <DeleteBulk v-show="data.selectedId.length != 0 &&
                                            can(['menu delete'])
                                            " :selectedId="data.selectedId" :title="props.title" @close="
        (data.selectedId = []),
        (data.multipleSelect = false)
        " />
                                    </div>
                                    <div class="flex justify-end items-center gap-2">
                                        <div class="flex space-x-2">
                                            <SelectInput class="h-9 text-sm" v-model="data.params.perPage"
                                                :dataSet="$page.props.app.perpage" />
                                        </div>
                                        <TextInput v-model="data.params.search" type="search" class="block h-9"
                                            :placeholder="lang().placeholder.search" />
                                    </div>
                                </template>
                                <template #table-head>
                                    <tr>
                                        <th class="p-4 text-left">
                                            <Checkbox v-model:checked="data.multipleSelect" @change="selectAll" />
                                        </th>
                                        <th class="p-4 text-center">#</th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('name')">
                                            <div class="flex justify-between items-center">
                                                <span>{{ lang().label.name }}</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('position')">
                                            <div class="flex justify-between items-center">
                                                <span>Position</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('items')">
                                            <div class="flex justify-between items-center">
                                                <span>Items</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4t text-left">
                                            {{ lang().label.updated }}
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('created_at')">
                                            <div class="flex justify-between items-center">
                                                <span>{{ lang().label.created }}</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 text-center sr-only">Action</th>
                                    </tr>
                                </template>
                                <template #table-body>
                                    <tr v-for="(menu, index) in menus.data" :key="index"
                                        class="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20">
                                        <td class="whitespace-nowrap px-4 py-2">
                                            <input
                                                class="rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"
                                                type="checkbox" @change="select" :value="menu.id"
                                                v-model="data.selectedId" />
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2 sm:py-3 text-center">
                                            {{ ++index }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.name }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.position }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            <div v-if="menu.items.length != 0">
                                                <Item
                                            v-if="
                                                menu.items.length ==
                                                props.items.reduce(
                                                    (total, data) =>
                                                        total +
                                                        data.data.length,
                                                    0
                                                )
                                            "
                                            :items="menu.items"
                                            :title="lang().label.all_permission"
                                            :caption="menu.name"
                                        /> -->
                            <!-- <Item

                                            :items="menu.items"
                                            :title="
                                                menu.items.length +
                                                ' Items'
                                            "
                                            :caption="menu.name"
                                        />
                                                {{ menu.items.length }} Items
                                            </div>
                                            <p v-else>
                                                No Item
                                            </p>
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.created_at }}
                                        </td>
                                        <td class="whitespace-nowrap flex justify-end px-4 py-2 sm:py-3">
                                            <div class="flex w-fit rounded overflow-hidden">
                                                <Edit v-show="can(['menu update'])" :title="props.title" :menu="data.menu"
                                                    @open="data.menu = menu" :permissions="props.permissions" />
                                                <Delete v-show="can(['menu delete'])" :title="props.title" :menu="data.menu"
                                                    @open="data.menu = menu" />
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <template #table-pagination>
                                    <TablePagination :links="props.menus" :filters="data.params" />
                                </template>
                            </Table> -->
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="draft" role="tabpanel"
                            aria-labelledby="draft-tab">
                            <!-- <Table>
                                <template #table-action>
                                    <div class="flex shrink-0 rounded overflow-hidden">
                                        <Create v-show="can(['menu create'])" :title="props.title"
                                            :permissions="props.permissions" />
                                        <DeleteBulk v-show="data.selectedId.length != 0 &&
                                            can(['menu delete'])
                                            " :selectedId="data.selectedId" :title="props.title" @close="
        (data.selectedId = []),
        (data.multipleSelect = false)
        " />
                                    </div>
                                    <div class="flex justify-end items-center gap-2">
                                        <div class="flex space-x-2">
                                            <SelectInput class="h-9 text-sm" v-model="data.params.perPage"
                                                :dataSet="$page.props.app.perpage" />
                                        </div>
                                        <TextInput v-model="data.params.search" type="search" class="block h-9"
                                            :placeholder="lang().placeholder.search" />
                                    </div>
                                </template>
                                <template #table-head>
                                    <tr>
                                        <th class="p-4 text-left">
                                            <Checkbox v-model:checked="data.multipleSelect" @change="selectAll" />
                                        </th>
                                        <th class="p-4 text-center">#</th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('name')">
                                            <div class="flex justify-between items-center">
                                                <span>{{ lang().label.name }}</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('position')">
                                            <div class="flex justify-between items-center">
                                                <span>Position</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('items')">
                                            <div class="flex justify-between items-center">
                                                <span>Items</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4t text-left">
                                            {{ lang().label.updated }}
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('created_at')">
                                            <div class="flex justify-between items-center">
                                                <span>{{ lang().label.created }}</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 text-center sr-only">Action</th>
                                    </tr>
                                </template>
                                <template #table-body>
                                    <tr v-for="(menu, index) in menus.data" :key="index"
                                        class="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20">
                                        <td class="whitespace-nowrap px-4 py-2">
                                            <input
                                                class="rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"
                                                type="checkbox" @change="select" :value="menu.id"
                                                v-model="data.selectedId" />
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2 sm:py-3 text-center">
                                            {{ ++index }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.name }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.position }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            <div v-if="menu.items.length != 0">
                                                <Item
                                            v-if="
                                                menu.items.length ==
                                                props.items.reduce(
                                                    (total, data) =>
                                                        total +
                                                        data.data.length,
                                                    0
                                                )
                                            "
                                            :items="menu.items"
                                            :title="lang().label.all_permission"
                                            :caption="menu.name"
                                        />
                                                <Item

                                            :items="menu.items"
                                            :title="
                                                menu.items.length +
                                                ' Items'
                                            "
                                            :caption="menu.name"
                                        />
                                                {{ menu.items.length }} Items
                                            </div>
                                            <p v-else>
                                                No Item
                                            </p>
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.created_at }}
                                        </td>
                                        <td class="whitespace-nowrap flex justify-end px-4 py-2 sm:py-3">
                                            <div class="flex w-fit rounded overflow-hidden">
                                                <Edit v-show="can(['menu update'])" :title="props.title" :menu="data.menu"
                                                    @open="data.menu = menu" :permissions="props.permissions" />
                                                <Delete v-show="can(['menu delete'])" :title="props.title" :menu="data.menu"
                                                    @open="data.menu = menu" />
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <template #table-pagination>
                                    <TablePagination :links="props.menus" :filters="data.params" />
                                </template>
                            </Table> -->
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="trash" role="tabpanel"
                            aria-labelledby="trash-tab">
                            <!-- <Table>
                                <template #table-action>
                                    <div class="flex shrink-0 rounded overflow-hidden">
                                        <Create v-show="can(['menu create'])" :title="props.title"
                                            :permissions="props.permissions" />
                                        <DeleteBulk v-show="data.selectedId.length != 0 &&
                                            can(['menu delete'])
                                            " :selectedId="data.selectedId" :title="props.title" @close="
        (data.selectedId = []),
        (data.multipleSelect = false)
        " />
                                    </div>
                                    <div class="flex justify-end items-center gap-2">
                                        <div class="flex space-x-2">
                                            <SelectInput class="h-9 text-sm" v-model="data.params.perPage"
                                                :dataSet="$page.props.app.perpage" />
                                        </div>
                                        <TextInput v-model="data.params.search" type="search" class="block h-9"
                                            :placeholder="lang().placeholder.search" />
                                    </div>
                                </template>
                                <template #table-head>
                                    <tr>
                                        <th class="p-4 text-left">
                                            <Checkbox v-model:checked="data.multipleSelect" @change="selectAll" />
                                        </th>
                                        <th class="p-4 text-center">#</th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('name')">
                                            <div class="flex justify-between items-center">
                                                <span>{{ lang().label.name }}</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('position')">
                                            <div class="flex justify-between items-center">
                                                <span>Position</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('items')">
                                            <div class="flex justify-between items-center">
                                                <span>Items</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4t text-left">
                                            {{ lang().label.updated }}
                                        </th>
                                        <th class="p-4 cursor-pointer" v-on:click="order('created_at')">
                                            <div class="flex justify-between items-center">
                                                <span>{{ lang().label.created }}</span>
                                                <ChevronUpDownIcon class="w-4 h-4" />
                                            </div>
                                        </th>
                                        <th class="p-4 text-center sr-only">Action</th>
                                    </tr>
                                </template>
                                <template #table-body>
                                    <tr v-for="(menu, index) in menus.data" :key="index"
                                        class="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20">
                                        <td class="whitespace-nowrap px-4 py-2">
                                            <input
                                                class="rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"
                                                type="checkbox" @change="select" :value="menu.id"
                                                v-model="data.selectedId" />
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2 sm:py-3 text-center">
                                            {{ ++index }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.name }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.position }}
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            <div v-if="menu.items.length != 0">
                                                <Item
                                            v-if="
                                                menu.items.length ==
                                                props.items.reduce(
                                                    (total, data) =>
                                                        total +
                                                        data.data.length,
                                                    0
                                                )
                                            "
                                            :items="menu.items"
                                            :title="lang().label.all_permission"
                                            :caption="menu.name"
                                        /> -->
                            <!-- <Item

                                            :items="menu.items"
                                            :title="
                                                menu.items.length +
                                                ' Items'
                                            "
                                            :caption="menu.name"
                                        />
                                                {{ menu.items.length }} Items
                                            </div>
                                            <p v-else>
                                                No Item
                                            </p>
                                        </td>
                                        <td class="whitespace-nowrap px-4 py-2">
                                            {{ menu.created_at }}
                                        </td>
                                        <td class="whitespace-nowrap flex justify-end px-4 py-2 sm:py-3">
                                            <div class="flex w-fit rounded overflow-hidden">
                                                <Edit v-show="can(['menu update'])" :title="props.title" :menu="data.menu"
                                                    @open="data.menu = menu" :permissions="props.permissions" />
                                                <Delete v-show="can(['menu delete'])" :title="props.title" :menu="data.menu"
                                                    @open="data.menu = menu" />
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <template #table-pagination>
                                    <TablePagination :links="props.menus" :filters="data.params" />
                                </template>
                            </Table> -->
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </AppLayout>
</template>
