import "./bootstrap";
import "../css/app.css";
import 'flowbite';

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { usePage } from "@inertiajs/vue3";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
/** Vue3 Easy Data Table */
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${usePage().props.app.setting.name}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Vue3Lottie)
            .component('EasyDataTable', Vue3EasyDataTable)
            .mixin({
                methods: {
                    can: function (permissions) {
                        var allPermissions = this.$page.props.can;
                        var hasPermission = false;
                        permissions.forEach(function (item) {
                            if (allPermissions[item]) hasPermission = true;
                        });
                        return hasPermission;
                    },
                    lang: function () {
                        return usePage().props.app.language.original;
                    },
                    num(value) {
                        return new Intl.NumberFormat("id-ID").format(value);
                    },
                },
            })
            .mount(el);
    },
    progress: {
        color: "#00ba7c",
    },
});
