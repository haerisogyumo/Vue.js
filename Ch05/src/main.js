import { createApp } from "vue";
import router from "./routers/index.js";
import App from "./App.vue";
const app = createApp(App);

// router 추가
app.use(router);

// app 컴포넌트 출력
app.mount("#app");
