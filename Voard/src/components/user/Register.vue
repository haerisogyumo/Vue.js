<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>SignUp</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-card class="mb-4">
            <v-card-item>
              <v-card-title>사용자 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="ID"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn color="success">중복확인</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="password"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="password check"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <v-card class="mb-8">
            <v-card-item>
              <v-card-title>개인정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="name"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn color="success">중복확인</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="nick"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="email"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="hp"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      label="우편번호"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn color="success" block>search</v-btn>
                  </v-col>
                  <v-col cols="6"> </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="기본주소"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="상세주소"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-sheet>

        <v-sheet max-width="800" class="mb-8 mx-auto text-center">
          <v-btn @click="btnCancel">back</v-btn>
          <v-btn @click="btnRegister" class="ml-2" color="primary"
            >SignUp</v-btn
          >
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
const btnRegister = () => {
  router.push("/list");
};
</script>
<style scoped></style>
