<template>
  <v-app>
    <v-app-bar app color="primary" dark elevate-on-scroll>
      <v-toolbar-title>Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'home' }">
        Home
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <Loader v-if="loaderStatus" />
        <transition name="fade" mode="out-in" appear>
          <router-view />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Loader from "@/components/Loader.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Loader
  },

  methods: {
    loaderControl() {
      this.$store.dispatch("loaderControl", false);
    }
  },

  computed: {
    ...mapGetters(["loaderStatus"])
  },

  created() {
    let self = this;
    setTimeout(function() {
      self.loaderControl();
    }, 3000);
  }
};
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}

.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

.scale-enter-active,
.scale-leave-active {
  transform: scale(1);
  transform-origin: center;
  transition: all 1s ease;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
