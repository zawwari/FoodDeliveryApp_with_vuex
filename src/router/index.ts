import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home1 from "../views/Home1.vue";
import defaultLayout from "../components/defaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealsByLetter from "../views/MealsByLetter.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: defaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home1,
      },

      {
        path: "/letter/:data?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingrdient?",
        name: "byIngredient",
        component: MealsByIngredients,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
