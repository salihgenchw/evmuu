<script lang="ts">
export default {
  name: "CreditCardsView",
};
</script>

<template>
  <h1>CreditCard</h1>

  <v-col cols="6" class="elevation-2 ma-3">
    <v-card class="container" elevation="5" outlined>
      <v-col>
        <v-row class="h-screen">
          <v-col cols="1" class="bg-red">

          </v-col>
          <v-col cols="2" class="bg-blue">

          </v-col>
          <v-col cols="9" class="bg-yellow">
            <v-row>
              <v-col cols="6" class="bg-black"></v-col>
              <v-col cols="6" class="bg-blue"></v-col>

            </v-row>

          </v-col>
        </v-row>
      </v-col>

    </v-card>
  </v-col>

</template>

<style scoped>
.container {
  width: 100%;
  max-width: 400px;
  max-height: 251px;
  height: 54vw;
  background-color: orange;
}

#ccsingle {
  position: absolute;
  right: 15px;
  top: 20px;

}

#ccsingle svg {
  width: 100px;
  max-height: 60px;

}

.creditcard svg#cardfront,
.creditcard svg#cardback {
  width: 100%;
  -webkit-box-shadow: 1px 5px 6px 0px black;
  box-shadow: 1px 5px 6px 0px black;
  border-radius: 22px;

}

#generatecard {
  cursor: pointer;
  float: right;
  font-size: 12px;
  color: #fff;
  padding: 2px 4px;
  /* background-color: #909090; */
  border-radius: 4px;
  cursor: pointer;
  float: right;
  background-color: orange;

}
</style>
