<template>
  <main>
    <ul>
      <item />
    </ul>
  </main>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    return {};
  },
};
</script>

<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding-left: 0;
  box-sizing: border-box;
}
main > ul > li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px;
  margin: 6px 0;
}
main > ul > li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
  border-radius: 0 15px 15px 0;
}
</style>
