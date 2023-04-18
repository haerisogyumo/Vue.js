<template>
  <h4>User2 목록</h4>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>휴대폰</td>
      <td>나이</td>
      <td>관리</td>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#" @click.prevent="modifyUser(user)">수정</a>&nbsp;/
        <a href="#" @click.prevent="deleteUser(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { onBeforeMount, ref } from "vue";

const router = useRouter();
const users = ref([]);
const modifyUser = (user) => {
  router.push({ name: "User2Modify", params: user });
};
const deleteUser = (user) => {
  const result = confirm("정말 삭제?");
  if (!result) {
    return;
  }
  axios
    .delete(`http://localhost:8080/Ch09/user2/${user.uid}`)
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user2s")
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
