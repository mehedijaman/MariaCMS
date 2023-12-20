<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Breadcrumb from "@/Layouts/Authenticated/Breadcrumb.vue";
import { KeyIcon, ShieldCheckIcon, UserIcon } from "@heroicons/vue/24/outline";

import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

const barChartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    }
  ]
}

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const pieChartData ={
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false
}



const props = defineProps({
    userCount: Number,
    roleCount: Number,
    permissionCount: Number,
});
</script>

<template>
    <AppLayout :title="lang().label.dashboard">
        <template #title>
            <span>{{ lang().label.dashboard }}</span>
        </template>
        <template #breadcrumb>
            <Breadcrumb />
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 dark:border-gray-600 h-32 md:h-64">
                        <div
                            class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded text-slate-800 dark:text-slate-200 flex gap-4">
                            <div class="w-24 h-24 bg-sky-500 flex m-2 rounded justify-center items-center">
                                <UserIcon class="w-12 h-auto text-white" />
                            </div>
                            <div class="flex flex-col justify-center items-start">
                                <p class="truncate font-semibold max-w-full">
                                    {{ lang().label.user }}
                                </p>
                                <p class="text-3xl font-semibold text-primary">
                                    {{ num(props.userCount) }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-32 md:h-64">
                        <div
                            class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded text-slate-800 dark:text-slate-200 flex gap-4">
                            <div class="w-24 h-24 bg-emerald-500 flex m-2 rounded justify-center items-center">
                                <KeyIcon class="w-12 h-auto text-white" />
                            </div>
                            <div class="flex flex-col justify-center items-start">
                                <p class="truncate font-semibold max-w-full">
                                    {{ lang().label.role }}
                                </p>
                                <p class="text-3xl font-semibold text-primary">
                                    {{ num(props.roleCount) }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-32 md:h-64">
                        <div
                            class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded text-slate-800 dark:text-slate-200 flex gap-4">
                            <div class="w-24 h-24 bg-amber-500 flex m-2 rounded justify-center items-center">
                                <ShieldCheckIcon class="w-12 h-auto text-white" />
                            </div>
                            <div class="flex flex-col justify-center items-start">
                                <p class="truncate font-semibold max-w-full">
                                    {{ lang().label.permission }}
                                </p>
                                <p class="text-3xl font-semibold text-primary">
                                    {{ num(props.permissionCount) }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-32 md:h-64">
                        <Pie :options="pieChartOptions" :data="pieChartData" />
                    </div>
                </div>
                <div class="rounded-md bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 p-4 dark:text-white h-96 mb-4">
                    <Bar :options="barChartOptions" :data="barChartData" />
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                </div>
                <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-96 mb-4"></div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                    <div class="rounded-md bg-slate-100 dark:bg-slate-800 h-48 md:h-72"></div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
