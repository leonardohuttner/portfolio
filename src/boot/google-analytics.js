import { defineRouter } from "#q-app/wrappers";
import VueGtag from "vue-gtag"; // ou o SDK gtag.js direto

export default defineRouter(({ router, app }) => {
  app.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_PROPERTY_ID },
  });

  router.afterEach((to) => {
    // Rastrear pageviews manualmente, se necessário
    app.config.globalProperties.$gtag.pageview({
      page_path: to.fullPath,
    });
  });
});
