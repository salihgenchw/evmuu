<template>
  <v-navigation-drawer width="100" color="" permanent>
    <RouterLink to="/" exact>
      <v-col class="pa-0 d-flex justify-center align-center my-3">
        <img alt="Vue logo" src="@/assets/logo.svg" width="50" />
      </v-col>
    </RouterLink>
    <v-divider></v-divider>
    <v-col
      v-for="item in menuItems"
      class="pa-0 d-flex justify-center align-center my-4"
    >
      <RouterLink :to="item.path">
        <v-icon size="35" color="gray">{{ item.icon }}</v-icon>
      </RouterLink>
    </v-col>
  </v-navigation-drawer>
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
aside {
  width: 130px;
  min-width: 80px;
}
</style>
