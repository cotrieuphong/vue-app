import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Create from "../views/Create.vue";
// import Item from "../components/Item.vue";
import ItemDetail from "../components/ItemDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/list",
    name: "list",
    component: List
  },
  {
    path: "/create",
    name: "create",
    component: Create
  },
  {
    path: "/item/:id",
    name: "item",
    component: ItemDetail,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
