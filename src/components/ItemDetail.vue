<template>
  <div>
    <h1>Item {{ item }}</h1>
    <h2>id: {{ id }}</h2>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      item: "Jooger"
    };
  }
};
</script>
