<!--
 * @Author: wangshan
 * @Date: 2021-09-22 16:39:56
 * @LastEditors: wangshan
 * @LastEditTime: 2021-09-22 22:46:43
 * @Description: 
-->
<script lang="ts" setup>
import {
  onMounted,
  toRefs,
  defineProps,
  defineEmits,
  computed,
  nextTick,
} from "vue";

const props = defineProps<{
  todos: {
    id: number;
    content: string;
    completed: boolean;
  };
}>();

const emit = defineEmits<{
  (e: "deleteTodo", id: number): void;
  (e: "confirmAll"): void;
}>();

const isCom = computed(() => props.todos);

onMounted(() => console.log(props.todos));

function handleCom(e: Event) {
  if ((e.target as HTMLInputElement).checked) {
    isCom.value.completed = true;
    return nextTick(() => emit("confirmAll"));
  } else {
    isCom.value.completed = false;
    nextTick(() => emit("confirmAll"));
  }
}

function handleClose(id: number): void {
  emit("deleteTodo", id);
}
</script>
<template>
  <li class="todo" :class="{ completed: isCom.completed }">
    <div class="view">
      <input
        type="checkbox"
        class="toggle"
        :checked="isCom.completed as any"
        @change="handleCom($event)"
      />
      <label>{{ isCom.content }}</label>
      <button class="destroy" @click="handleClose(isCom.id)"></button>
    </div>
    <input type="text" class="edit" />
  </li>
</template>
