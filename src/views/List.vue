<template>
  <div>
    <h1>List</h1>
    <Item v-for="paper in news" :key="paper.url" :paper="paper" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import axios from "axios";

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
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=af58dc20bb2f429aa75f0f6799ca69da"
      )
      .then(res => {
        this.news = res.data.articles;
        console.log(res.data.articles);
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
