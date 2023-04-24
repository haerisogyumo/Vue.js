<template>
  <header>
    <div>
      <input type="text" v-model="newTodo" placeholder="할일을 입력 하세요." />
      <button v-on:click="btnAddTodo">등록</button>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");
    const btnAddTodo = () => {
      console.log(newTodo.value);

      if (newTodo.value !== "") {
        const inputValue = newTodo.value && newTodo.value.trim();
        context.emit("addTodo", inputValue);
        newTodo.value = "";
      }
    };
    return {
      newTodo,
      btnAddTodo,
    };
  },
};
</script>

<style scoped>
header {
  widows: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
}

header > div {
  position: relative;
  width: 100%;
  height: 100%;
}

header > div > input {
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
}

header > div > button {
  position: absolute;
  right: 5px;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: #44ba81;
  color: white;
  border: none;
  border-radius: 10px;
}
</style>
