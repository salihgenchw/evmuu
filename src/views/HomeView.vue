<script setup lang="ts">
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <v-container>
    <SideMenu />
    <v-col class="pa-4">
      <v-row>
        <v-spacer></v-spacer>
        <v-select
          label="Select"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          clearable
          variant="outlined"
        ></v-select>
      </v-row>
    </v-col>
  </v-container>
</template>
