import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("@/views/Main.vue")
      },
      {
        path: "/eBook",
        name: "eBook",
        component: () => import("@/views/Ebook.vue")
      },
      {
        path: "/multimedia",
        name: "multimedia",
        component: () => import("@/views/Multimedia.vue")
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact.vue")
      },
    ]
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/error/Error404.vue")
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/Error500.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
