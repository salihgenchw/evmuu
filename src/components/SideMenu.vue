<template>
  <aside class="h-screen bg-red">
    <v-col cols="12" class="d-flex justify-center align-center">
      <img alt="Vue logo" src="@/assets/logo.svg" width="60" />
    </v-col>
    <v-divider></v-divider>

    <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon icon="mdi-vuetify" x-large></v-icon>
    </v-col>
  </aside>
</template>

//
<script lang="ts">

export default {
  name: "SideMenu",
  data() {
    return {
      menuItems: [
        { menuId :2 ,title: "Krediler",  icon : "mdi-credit-card" },
        { menuId :3 ,title: "Kredi Kartları",  icon : "mdi-credit-card" },
        { menuId :1 ,title: "Gelirler",  icon : "mdi-credit-card" },
      ],
    };
  },
};
</script>

<style scoped>
aside {
  width: 90px;
  min-width: 80px;
}
</style>
