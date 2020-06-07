<template>
  <div>
    <v-btn raised color="primary" @click="toggleShow">Toggle</v-btn>
    <h1 v-if="isShow">123123</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },

  computed: {
    loadingStatus() {
      return "";
    }
  },

  methods: {
    toggleShow() {
      return (this.isShow = !this.isShow);
    }
  }
};
</script>
