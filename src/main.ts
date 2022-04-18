import "element-plus/dist/index.css";
import "@zeesuu-v3/search-table/dist/style.css";

import axios from "axios";
import LoginPlugin from "@zeesuu-v3/login";
import Permission from "@zeesuu-v3/permission";
import ZeesuuSearchTable from "@zeesuu-v3/search-table";
import ZeesuuSelect from "@zeesuu-v3/select";
import ZeesuuService from "@zeesuu-v3/service";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

const app = createApp(App);

console.log("123");

app.use(store);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(LoginPlugin, {
  store,
});
app.use(Permission);
app.use(ZeesuuSearchTable);
app.use(ZeesuuSelect, {
  custom: {
    testEl: [
      { label: "test1", value: "1" },
      { label: "test2", value: "2" },
    ],
  },
});
app.use(ZeesuuService, {
  $http: axios,
  appRoot: "",
  apis: ["login|post"],
  debug: import.meta.env.MODE === "development",
});

app.mount("#app");
