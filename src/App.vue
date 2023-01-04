<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div>
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </div>

  <RouterView />
</template>

<style scoped></style>
