<template>
  <v-navigation-drawer width="110" color="" permanent>
    <RouterLink to="/" exact>
      <v-col class="pa-0 d-flex justify-center align-center my-3">
        <img alt="Vue logo" src="@/assets/logo.svg" width="50" />
      </v-col>
    </RouterLink>
    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.menuId" :to="item.path" exact router active-class="active-class"
        class="d-flex justify-center align-center my-3">
        <v-list-item-icon class="d-flex justify-center align-center">
          <v-icon size="30" color="gray">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-caption">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar app dark style="z-index: 0" height="68" elevation="1" class="d-flex justify-center align-center">
    <v-toolbar-title class="font-weight-bold d-flex justify-end text-caption mx-3">Salih <v-avatar
        color="surface-variant"></v-avatar></v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "SideMenu",
  data() {
    return {
      menuItems: [
        {
          menuId: 3,
          title: "Kredi Kartları",
          icon: "mdi-credit-card",
          path: "/credit-cards",
        },
        {
          menuId: 1,
          title: "Gelirler",
          icon: "mdi-account-cash",
          path: "/incomes",
        },
        {
          menuId: 2,
          title: "Krediler",
          icon: "mdi-bank-transfer",
          path: "/credits",
        },
        { menuId: 4, title: "Hesaplar", icon: "mdi-bank", path: "/accounts" },
        {
          menuId: 5,
          title: "Kategoriler",
          icon: "mdi-tag",
          path: "/categories",
        },
        { menuId: 6, title: "Ayarlar", icon: "mdi-cog", path: "/settings" },
      ],
    };
  },
};
</script>

<style scoped>
.active-class {
  background: rgb(9, 121, 107);
  background: linear-gradient(32deg,
      rgba(9, 121, 107, 1) 0%,
      rgba(86, 187, 52, 1) 100%);
  color: aliceblue;
}
</style>
