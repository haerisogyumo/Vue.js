<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Modify</v-app-bar-title>

      <p>
        OOO님 반갑습니다.
        <v-btn>logout</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-card class="mx-auto mt-16" max-width="800">
            <v-card-item>
              <v-card-title>글 수정</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-textarea label="제목" variant="outlined" rows="1"></v-textarea>
              <v-textarea
                label="내용을 입력하세요"
                variant="outlined"
                rows="15"
                class="mb-10"
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="btnList">back</v-btn>
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
  router.push("/list");
};
</script>
<style scoped></style>
