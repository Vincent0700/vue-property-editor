import Vue from "vue";
import App from "./App.vue";

import PropertyEditor from "./../packages/index";

Vue.use(PropertyEditor);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
