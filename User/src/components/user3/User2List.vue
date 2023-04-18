<template>
  <h4>User1 목록</h4>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>휴대폰</td>
      <td>나이</td>
      <td>관리</td>
    </tr>
    <tr>
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#">수정</a>&nbsp;/
        <a href="#">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup></script>
<style scoped></style>
