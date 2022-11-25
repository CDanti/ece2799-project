import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Power from "../views/PowerSystems.vue";
import CE from "../views/ComputerEngineering.vue";
import Analog from "../views/AnalogDevices.vue";
import Signals from "../views/Comms_Signals.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/power",
    name: "power",
    component: Power,
  },
  {
    path: "/ce",
    name: "ce",
    component: CE,
  },
  {
    path: "/analog",
    name: "analog",
    component: Analog,
  },
  {
    path: "/signals",
    name: "signals",
    component: Signals,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
