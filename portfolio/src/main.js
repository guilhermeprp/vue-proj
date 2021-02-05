import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import VueTilt from "vue-tilt.js";

const app = createApp(App);

AOS.init();
app.use(VueTilt);
app.mount("#app");
