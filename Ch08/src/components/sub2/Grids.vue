<template>
  <h3>Grids</h3>
  <v-container fluid>
    <v-row>
      <v-col class="border text-center" cols="12">12</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="6" class="border text-center">6</v-col>
      <v-col cols="6" class="border text-center">6</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="4" class="border text-center">4</v-col>
      <v-col cols="4" class="border text-center">4</v-col>
      <v-col cols="4" class="border text-center">4</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="5" class="border text-center">5</v-col>
      <v-col cols="5" class="border text-center">5</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
    </v-row>

    <h4 class="mt-4">반응형 레이아웃</h4>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="3" class="border text-center">colum1</v-col>
        <v-col cols="12" md="6" lg="3" class="border text-center">colum2</v-col>
        <v-col cols="12" md="6" lg="3" class="border text-center">colum3</v-col>
        <v-col cols="12" md="6" lg="3" class="border text-center">colum4</v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup>
// 반응형 웹에 이용, 1280px > < 1920px : Large (small, large , medium이 기본)
</script>
<style scoped></style>
