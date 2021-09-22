<!--
 * @Author: wangshan
 * @Date: 2021-09-22 14:21:59
 * @LastEditors: wangshan
 * @LastEditTime: 2021-09-22 23:08:41
 * @Description: 
-->
<script lang="ts" setup>
import ToDoList from "./todos/ToDoList.vue";
</script>

<template>
  <ToDoList title="TODOS" />
  <section class="info">
    <p>written with by pachverb</p>
    <p>
      view source code from
      <code><a href="https://github.com/PachVerb">Github</a></code>
    </p>
  </section>
</template>

<style>
#todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
.info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -200px;
}
.info p {
  font-size: 24px;
}
</style>
