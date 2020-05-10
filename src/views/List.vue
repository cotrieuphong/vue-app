<template>
  <div>
    <h1>List</h1>
    <Item v-for="paper in news" :key="paper.url" :paper="paper" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import NewsServices from "@/services/NewsServices.js";

export default {
  components: {
    Item
  },

  data() {
    return {
      news: []
    };
  },

  created() {
    NewsServices.getNewsPaper()
      .then(res => {
        this.news = res.data.articles;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
