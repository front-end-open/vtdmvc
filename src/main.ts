/*
 * @Author: wangshan
 * @Date: 2021-09-22 14:21:59
 * @LastEditors: wangshan
 * @LastEditTime: 2021-09-23 00:32:06
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
const app = createApp(App);

// 自定义指令
app.directive("todofocus", {
  mounted(el, bind) {
    console.log(111);
    if (bind.value) {
      console.log(111);
      el.focus();
    }
  },
});

app.mount("#todoapp");
