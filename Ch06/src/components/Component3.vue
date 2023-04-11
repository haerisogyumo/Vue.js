<template>
  <h4>component3</h4>
  <p>Vuex count : {{ store.getters.getCount }}</p>
  <input type="number" v-model="count" />
  <button @click="btnInit">초기화</button>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = ref(0);

const btnInit = function () {
  const payload = Number(count.value);
  // store action 호출
  store.dispatch("initCount", payload);
};
</script>
<style scoped></style>
