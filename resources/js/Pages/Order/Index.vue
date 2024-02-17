<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, reactive, watch, provide, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { formatDate } from "../../Helpers/dateHelper";
import Completed from "./Completed.vue";
import Processing from './Processing.vue';
import Pending from './Pending.vue';
// import Trash from "./Trash.vue";
import { Link } from "@inertiajs/vue3";
import Breadcrumb from "../../Layouts/Authenticated/Breadcrumb.vue";

import {
    TrashIcon,
    BookmarkSlashIcon,
    BookOpenIcon,
    BriefcaseIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    orders: Object,
    breadcrumbs: Object,
});

const items = reactive(props.orders);
const completed = computed(() => items.filter(item => (item.status == true && item.deleted_at == null)));
const processing = computed(() => items.filter(item => (item.status == false && item.deleted_at == null)));
const pending = computed(() => items.filter(item => (item.status == null && item.deleted_at == null)));


const updateItems = (updatedItems) => {
    items.length = 0;
    updatedItems.forEach(item => items.push(item));
};

provide('title', props.title);
provide('orders', items);

provide('pending', pending);
provide('processing', processing);
provide('completed', completed);

provide('updateItems', updateItems);
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs" />

        <div class="py-4">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-2">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded">
                    <div class="border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                            data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg" id="completed-tab"
                                    data-tabs-target="#completed" type="button" role="tab" aria-controls="completed"
                                    aria-selected="false">
                                    <BookOpenIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BookOpenIcon>
                                    Pending
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="processing-tab" data-tabs-target="#processing" type="button" role="tab"
                                    aria-controls="processing" aria-selected="false">
                                    <BookmarkSlashIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BookmarkSlashIcon>
                                    Processing
                                </button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="pending-tab" data-tabs-target="#pending" type="button" role="tab"
                                    aria-controls="pending" aria-selected="false">
                                    <BriefcaseIcon
                                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300">
                                    </BriefcaseIcon>
                                    Completed
                                </button>
                            </li>
                            <li class="me-2" role="presentation">

                                <Link :href="route('orders.trash')"
                                    class="inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600  hover:border-gray-300 dark:hover:text-gray-300"
                                    type="button">
                                <TrashIcon
                                    class="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300">
                                </TrashIcon>
                                Trash
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="completed" role="tabpanel"
                            aria-labelledby="completed-tab">
                            <Pending></Pending>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="processing" role="tabpanel"
                            aria-labelledby="processing-tab">
                            <Processing></Processing>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="pending" role="tabpanel"
                            aria-labelledby="pending-tab">
                            <Completed></Completed>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
