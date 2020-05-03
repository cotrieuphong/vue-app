<template>
  <router-link :to="{ name: 'item', params: { id: 'Phong' } }">
    <div>
      <h1>Item {{ item }}</h1>
    </div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      item: "Jooger"
    };
  }
};
</script>
