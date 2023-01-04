<!-- <template>
  <aside class="h-screen elevation-2">
    <v-col cols="12" class="d-flex justify-center align-center">
      <img alt="Vue logo" src="@/assets/logo.svg" width="60" />
    </v-col>
    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.menuId" link>
        <v-list-item-icon class="d-flex justify-center align-center">
          <v-icon size="40" color="gray">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="d-flex justify-center align-center">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-col cols="12" class="d-flex justify-center align-center"> </v-col>
  </aside>
</template> -->

<template>
  <v-layout>
    <!-- <v-app-bar
      height="122"
      location="left"
      color="grey-darken-2"
      elevation="0"
    ></v-app-bar> -->
    <!-- <v-navigation-drawer
      width="72"
      color="grey-darken-2"
      permanent
    ></v-navigation-drawer> -->
    <v-navigation-drawer width="120" color="grey-darken-3" permanent>
      <v-col cols="12" class="pa-0 d-flex justify-center align-center">
        <v-btn icon color="transparent">
          <v-icon size="40" color="white">mdi-credit-card</v-icon>
        </v-btn>
        <!-- <v-card elevation="2" class="h-screen"></v-card> -->
      </v-col>
    </v-navigation-drawer>
    <!-- <v-app-bar height="48" color="grey" elevation="0"></v-app-bar> -->
    <!-- <v-navigation-drawer
      location="right"
      width="150"
      color="grey-lighten-1"
      permanent
    ></v-navigation-drawer> -->
    <!-- <v-app-bar
      location="bottom"
      height="48"
      color="grey-lighten-2"
      elevation="0"
    ></v-app-bar> -->
    <v-main> </v-main>
  </v-layout>
</template>

//
<script lang="ts">
export default {
  name: "SideMenu",
  data() {
    return {
      menuItems: [
        { menuId: 3, title: "Kredi Kartları", icon: "mdi-credit-card" },
        { menuId: 1, title: "Gelirler", icon: "mdi-account-cash" },
        { menuId: 2, title: "Krediler", icon: "mdi-bank-transfer" },
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
