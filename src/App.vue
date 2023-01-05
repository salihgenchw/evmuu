<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "App",
  components: {
    SideMenu,
  },
};
</script>

<template>
  <v-layout>
    <SideMenu />
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
