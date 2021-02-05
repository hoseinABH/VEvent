import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: () => import("../views/EventShow.vue"),
    props: true
  },
  {
    path: "/event/create",
    name: "event-create",
    component: () => import("../views/EventCreate.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
