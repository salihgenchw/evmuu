import { createRouter, createWebHistory } from "vue-router";
import CreditsView from "../views/CreditsView.vue";
import IncomesView from "../views/IncomesView.vue";
import CreditCardsView from "../views/CreditCardsView.vue";
import SettingsView from "../views/SettingsView.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
    {
      path: '/credits',
      name: 'credits',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CreditsView
    },
    {
      path: '/incomes',
      name: 'incomes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:IncomesView
    },
    {
      path: '/credit-cards',
      name: 'credit-cards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:CreditCardsView
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:SettingsView
    }
  ],
});

export default router;
