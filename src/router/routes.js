const routes = [
  {
    path: "/",
    component: () => import("layouts/CleanLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "repositorios",
        component: () => import("pages/repositorios/repositoriosPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
