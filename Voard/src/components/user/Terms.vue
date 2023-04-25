<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Terms</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea
            label="Terms"
            variant="outlined"
            hide-details="true"
            rows="10"
          ></v-textarea>
          <v-checkbox class="d-flex justify-end" label="Agree"></v-checkbox>
          <v-textarea
            label="Privacy"
            variant="outlined"
            hide-details="true"
            rows="10"
          ></v-textarea>
          <v-checkbox class="d-flex justify-end" label="Agree"></v-checkbox>
        </v-sheet>
        <v-sheet>
          <v-sheet max-width="800" class="mx-auto text-center">
            <v-btn @click="btnCancel">back</v-btn>
            <v-btn @click="btnNext" class="ml-2" color="primary">next</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  router.push("/user/register");
};
</script>
<style scoped></style>
