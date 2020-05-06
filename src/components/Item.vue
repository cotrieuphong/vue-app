<template>
  <div>
    <a :href="paper.url">{{ paper.title }}</a>
    <h1>{{ paper.author }}</h1>
    <img :src="paper.urlToImage" alt="" />
    <p>{{ paper.description }}</p>
    <p>{{ paper.publishedAt }}</p>
    <p>{{ paper.content }}</p>
    <p>{{ paper.source.name }}</p>
    <router-link :to="{ name: 'item', params: { id: 'Phong' } }"
      >Read more</router-link
    >
  </div>
</template>
<script>
export default {
  props: {
    paper: Object
  },
  created() {
    return console.log(this.paper);
  }
};
</script>
