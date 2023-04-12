<template>
  <h4>Axios 실습하기</h4>
  <h4>Get</h4>
  <button @click="getUsers">Users 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>

    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>
  <hr />

  <h4>Get 파라미터 전송예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button v-on:click="getUser">user 요청</button>
  <p>아이디: {{ user.uid }} <br /></p>
  <p>이름: {{ user.name }} <br /></p>
  <p>휴대폰: {{ user.hp }} <br /></p>
  <p>나이: {{ user.age }} <br /></p>
  <hr />

  <h4>Get 단축함수</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button v-on:click="getUser1">user 요청</button>
  <p>아이디: {{ user.uid }} <br /></p>
  <p>이름: {{ user.name }} <br /></p>
  <p>휴대폰: {{ user.hp }} <br /></p>
  <p>나이: {{ user.age }} <br /></p>
  <hr />

  <h4>Post 예제</h4>
  <form v-on:submit.prevent="postUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import axios from "axios";
import { ref, reactive } from "vue";

const users = ref([]);
const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
});
const inputText = ref("");

const getUsers = function () {
  axios({
    url: "http://localhost:8080/Ch09/user1s",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log("response : " + JSON.stringify(response));
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};

const getUser = () => {
  const jsonData = {
    uid: inputText.value,
  };
  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "get",
    params: jsonData,
    responseType: "json",
  })
    .then((response) => {
      console.log(response.data);
      user.uid = response.data.uid;
      user.name = response.data.name;
      user.hp = response.data.hp;
      user.age = response.data.age;
    })
    .catch((error) => {
      console.log(error.data);
    });
};

const getUser1 = () => {
  const jsonData = {
    uid: inputText.value,
  };

  axios
    .get("http://localhost:8080/Ch09/user1", { params: jsonData })
    .then((response) => {
      console.log(response.data);
      user.uid = response.data.uid;
      user.name = response.data.name;
      user.hp = response.data.hp;
      user.age = response.data.age;
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};

const postUser = () => {
  const jsonData = {
    uid: user.uid,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };

  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "post",
    data: jsonData,
    responseType: "json",
  })
    .then((response) => {
      alert("등록완료");
      console.log("response : " + response);
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};
</script>
<style scoped></style>
