<template>
  <h4>User2 등록</h4>
  <form @submit.prevent="user1Register">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" /></td>
      </tr>
      <tr>
        <td><input type="submit" /></td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
  rdate: "",
});

const user1Register = () => {
  axios
    .post("http://localhost:8080/Ch09/user2", user)
    .then((response) => {
      alert("등록 완료!");
      router.push("/user2/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
