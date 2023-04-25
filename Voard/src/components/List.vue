<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>List</v-app-bar-title>

      <p>
        OOO님 반갑습니다.
        <v-btn>logout</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-height="800" class="mx-auto mt-10">
          <v-table>
            <thead>
              <tr>
                <th class="text-center">no</th>
                <th class="text-center">title</th>
                <th class="text-center">글쓴이</th>
                <th class="text-center">hit</th>
                <th class="text-center">date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left block" @click="btnView">제목입니다</td>
                <td class="text-center">진윤희</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-25</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left">제목입니다</td>
                <td class="text-center">진윤희</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-25</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left">제목입니다</td>
                <td class="text-center">진윤희</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-25</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="primary" @click="btnWrite">Write</v-btn>
          </v-sheet>
          <v-pagination
            :length="100"
            :total-visible="5"
            rounded="circle"
          ></v-pagination>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnWrite = () => {
  router.push("/write");
};

const btnView = () => {
  router.push("/view");
};
</script>
<style scoped></style>
