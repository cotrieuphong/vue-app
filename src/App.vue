<template>
  <v-app>
    <v-app-bar app color="primary" dark elevate-on-scroll>
      <v-btn text :to="{ name: 'home' }">
        Home
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'list' }">
        List
      </v-btn>
      <v-btn text :to="{ name: 'create' }">
        Create
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
