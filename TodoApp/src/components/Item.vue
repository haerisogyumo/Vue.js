<template>
  <li v-for="(todo, index) in todos" :key="index">
    <i class="fa-solid fa-check"></i>
    {{ todo }}
    <button v-on:click="btnDelete(index)">삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);
    const btnDelete = (index) => {
      store.dispatch("removeTodo", index);
    };

    return { todos, btnDelete };
  },
};
</script>

<style scoped></style>
