import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Character from "@/views/Character.vue";
import Inventory from "@/views/Inventory";
import Reminiscence from "@/views/Reminiscence";
import Menu from "@/views/Menu";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/character",
      name: "character",
      component: Character
    },
    {
      path: "/inventory",
      name: "inventory",
      component: Inventory
    },
    {
      path: "/reminiscence",
      name: "reminiscence",
      component: Reminiscence
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    }
  ]
});
