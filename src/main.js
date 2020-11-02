import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueRouter from "vue-router";
import Paginate from "vuejs-paginate";
import store from "./store/index";

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.component("paginate", Paginate);

// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
