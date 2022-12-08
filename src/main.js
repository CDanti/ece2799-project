// prettier-ignore
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import vuetify from "@/plugins/vuetify"; // path to vuetify export

// new App({
//   vuetify,
// }).$mount("#app");
createApp(App).use(router).mount("#app");
