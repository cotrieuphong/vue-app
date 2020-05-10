import axios from "axios";

const apiKey = "af58dc20bb2f429aa75f0f6799ca69da";
const NewsPaperApi = axios.create({
  baseURL: "https://newsapi.org"
});

export default {
  getNewsPaper() {
    return NewsPaperApi.get("/v2/top-headlines?country=us&apiKey=" + apiKey);
  }
};
