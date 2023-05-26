<template>
  <h3>Parent</h3>

  <router-link to="/Parent/child1">Child1</router-link>
  <router-link to="/Parent/child2">Child2</router-link>

  <router-view></router-view>
</template>
<script>
export default {
  name: "Parent",
  setup() {
    return {};
  },
};
</script>
<style scoped></style>
