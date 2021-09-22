/*
 * @Author: wangshan
 * @Date: 2021-09-22 14:38:01
 * @LastEditors: wangshan
 * @LastEditTime: 2021-09-22 14:40:28
 * @Description:  .vue文件类型适配ts
 */
// 此类型文件声明，用于ts识别.vue文件类型，进而类型检测
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
