<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Login</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card class="mx-auto mt-16" max-width="400">
          <v-card-item>
            <v-card-title>Login</v-card-title>
          </v-card-item>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="8"
                  ><v-text-field
                    label="ID"
                    prepend-icon="mdi-account"
                    variant="underlined"
                    hide-details="true"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    prepend-icon="mdi-lock"
                    variant="underlined"
                    hide-details="true"
                  ></v-text-field
                ></v-col>
                <v-col cols="4">
                  <v-btn block height="90" color="primary" @click="btnLogin"
                    >Login</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="btnRegister">SignUp</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter;

const btnRegister = () => {
  router.push("/list");
};
const btnLogin = () => {
  router.push("user/terms");
};
</script>
<style scoped></style>
