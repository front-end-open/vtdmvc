<!--
 * @Author: wangshan
 * @Date: 2021-09-22 14:21:59
 * @LastEditors: wangshan
 * @LastEditTime: 2021-09-23 00:26:57
 * @Description: 
-->
<script lang="ts" setup>
import { reactive, ref, toRefs, Ref, computed } from "@vue/reactivity";
import TodoItem from "../components/TodoItem.vue";

interface TODO {
  id: number;
  content: string;
  completed: boolean;
}

defineProps({
  title: String,
});

let { todo } = toRefs(
  reactive({
    todo: "",
  })
);
let tcurr = reactive<{
  curr: string;
}>({ curr: "all" });

let isComplete: Ref<boolean> = ref(false);
let complete: Ref<boolean> = ref(false);

let todos: Ref<TODO[]> = ref([]);

// 改进： 外部声明filter key-map, 然后通过key去映射。
// computed的存在，每一次的过滤声明都用指定作用。

/**
 *  var filters = {
        all: function (todos) {
          return todos;
        },
        active: function (todos) {
          return todos.filter(function (todo) {
            return !todo.completed;
          });
        },
        completed: function (todos) {
          return todos.filter(function (todo) {
            return todo.completed;
          });
        }
      };
 *
 *  computed: {
        filteredTodos: function () {
        return filters[this.visibility](this.todos);
        },
        remaining: function () {
        return filters.active(this.todos).length;
        },
        allDone: {
        get: function () {
            return this.remaining === 0;
        },
        set: function (value) {
            this.todos.forEach(function (todo) {
            todo.completed = value;
            });
        }
        }
    },
 *

   通过a标签进行过滤处理
   我这里通过自定义数据属性来处理，重复的是，每次都要分发click事件，来更新过滤类型

   优化: 监听hash变化，来更新过滤类型。
   // handle routing
      function onHashChange() {
        var visibility = window.location.hash.replace(/#\/?/, "");
        if (filters[visibility]) {
          app.visibility = visibility;
        } else {
          window.location.hash = "";
          app.visibility = "all";
        }
      }

      window.addEventListener("hashchange", onHashChange);
      onHashChange();
 *
 *
 *
 */
let ftodos = computed(() => {
  switch (tcurr.curr) {
    case "all":
      return todos.value;
      break;
    case "active":
      return todos.value.filter((v) => !v.completed);
      break;
    case "completed":
      return todos.value.filter((v) => v.completed);
      break;
  }
});

// 原生事件对象，是类型Event
// e type -> Event
// e.target type -> HTMLInputElement
function todoConvert(e: Event): void {
  if ((e.target as HTMLInputElement).checked) {
    isComplete.value = true;
    complete.value = true;
    todos.value = todos.value.map((v) => {
      return {
        id: v.id,
        content: v.content,
        completed: true,
      };
    });
  } else {
    isComplete.value = false;
    complete.value = false;
    todos.value = todos.value.map((v) => {
      return {
        id: v.id,
        content: v.content,
        completed: false,
      };
    });
  }
}
// 添加代办项
function addTodo(): void {
  if (!todo.value) return console.log("添加待办项目不能为空");
  todos.value.unshift({
    id: new Date().getTime(),
    content: todo.value,
    completed: false,
  } as TODO);
  todo.value = "";
}

//替换监听hanchange
function checkFilter(e: Event) {
  console.log(tcurr.curr);
  switch ((e.target as HTMLInputElement).dataset.type) {
    case "all":
      tcurr.curr = (e.target as HTMLInputElement).dataset.type as string;
      break;
    case "active":
      tcurr.curr = (e.target as HTMLInputElement).dataset.type as string;
      break;
    case "completed":
      tcurr.curr = (e.target as HTMLInputElement).dataset.type as string;
      break;
  }
}

function clearCom(): void {
  todos.value = todos.value.filter((v) => !v.completed);

  if (!todos.value.length) {
    todo.value = "";
    complete.value = false;
  }
}

function confirmAll() {
  todos.value.filter((v) => v.completed).length === todos.value.length
    ? (complete.value = true)
    : (complete.value = false);

  if (todos.value.find((v) => v.completed === true)) {
    isComplete.value = true;
  } else {
    isComplete.value = false;
  }
}
</script>

<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <input
      v-model="todo"
      autocomplete="off"
      placeholder="What needs to be done?"
      class="new-todo"
      v-todofocus="true"
      @keyup.enter="addTodo"
    />
  </header>

  <section class="main">
    <input
      id="toggle-all"
      @change="todoConvert"
      :checked="complete"
      type="checkbox"
      class="toggle-all"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <TodoItem
        :todos="item"
        v-for="item in ftodos"
        :key="item.id"
        @confirm-all="confirmAll"
        @delete-todo="todos = todos.filter((v) => v.id !== $event)"
      />
    </ul>
  </section>

  <footer class="footer" v-if="todos.length">
    <span class="todo-count"
      ><strong>{{ todos.length }}</strong> items left
    </span>
    <ul class="filters">
      <li>
        <a
          href="#/all"
          :class="{ selected: tcurr.curr === 'all' }"
          data-type="all"
          @click="checkFilter"
          >All</a
        >
      </li>
      <li>
        <a
          href="#/active"
          data-type="active"
          :class="{ selected: tcurr.curr === 'active' }"
          @click="checkFilter"
          >Active</a
        >
      </li>
      <li>
        <a
          href="#/completed"
          data-type="completed"
          :class="{ selected: tcurr.curr === 'completed' }"
          @click="checkFilter"
          >Completed</a
        >
      </li>
    </ul>
    <button
      v-if="isComplete || todos.filter((v) => v.completed).length"
      class="clear-completed"
      style=""
      @click="clearCom()"
    >
      Clear completed
    </button>
  </footer>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
