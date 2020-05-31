<template>
  <v-app>
    <v-app-bar app color="primary" dark elevate-on-scroll>
      <v-btn text :to="{ name: 'home' }">
        Home
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'todo' }">
        Todo
      </v-btn>
      <v-btn text :to="{ name: 'list' }">
        List
      </v-btn>
      <v-btn text :to="{ name: 'create' }">
        Create
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <Loader v-if="loaderStatus" />
        <transition name="fade" mode="out-in">
          <router-view></router-view>
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
      this.$store.commit("LOADER_CTRL", false);
    }
  },

  computed: {
    loaderStatus() {
      return this.$store.getters.loaderStatus;
    }
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

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transform: all 1s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
