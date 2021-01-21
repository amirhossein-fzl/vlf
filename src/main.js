import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueScrollProgress from "vue-scroll-progress";
import Riple from 'vue-ripple-directive';
import { VuelidatePlugin } from "@vuelidate/core";
import VuePlyr from 'vue-plyr';
import VueTippy from "vue-tippy";
import routes from './routes';
import App from './App.vue';

import "./css/grid/bootstrap-grid.min.css";
import "./css/style.css";
import "./assets/icons/all.min.css";
import 'vue-plyr/dist/vue-plyr.css';

let router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App);

app.use(router);
app.directive('ripple', Riple);
app.use(VueScrollProgress);
app.use(VueTippy);
app.use(VuelidatePlugin);
app.use(VuePlyr);
app.mount('#app');
