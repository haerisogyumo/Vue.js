<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>View</v-app-bar-title>

      <p>
        OOO님 반갑습니다.
        <v-btn>logout</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-card title="title" subtitle="진윤희" text="...">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="btnList">List</v-btn>
              <v-btn @click="btnModify">Modify</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const btnList = () => {
  router.push("/list");
};

const btnModify = () => {
  router.push("/modify");
};
</script>
<style scoped></style>
