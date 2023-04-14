<template>
  <h4>Components</h4>

  <div>
    <h4>Icons</h4>
    <v-icon icon="mdi-mailbox-open-up-outline"></v-icon>
    <v-icon icon="mdi-cat"></v-icon>
    <v-icon icon="mdi-dog-side"></v-icon>
    <v-icon icon="mdi-ring"></v-icon>
    <v-divider class="my-5"></v-divider>

    <h4>Images</h4>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-img
      :width="300"
      :height="200"
      aspect-ratio="16/9"
      cover
      src="https://picsum.photos/200/300"
    ></v-img>
    <v-divider class="my-5"></v-divider>

    <h4>Button</h4>
    <v-btn color="primary"> Button1 </v-btn>
    <v-btn color="secondary"> Button2 </v-btn>
    <v-btn prepend-icon="mdi-cat"> Button3 </v-btn>
    <v-btn size="small"> Button4 </v-btn>
    <v-btn block=""> Button5 </v-btn>
    <v-btn> Button5 </v-btn>
    <v-divider class="my-5"></v-divider>

    <h4>Cards</h4>
    <v-card text="내용입니다."></v-card>
  </div>
  <v-card class="my-2" title="제목" subtitle="부제목" text="내용입니다">
    <v-card-actions>
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>

  <v-card width="400">
    <v-img
      height="200"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      cover
      class="text-white"
    >
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>
    </v-img>
    <v-card-text> This is content </v-card-text>
  </v-card>

  <v-divider class="my-5"></v-divider>
</template>
<script setup></script>
<style></style>
