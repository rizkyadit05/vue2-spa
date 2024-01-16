import Vue from "vue"
import VueRouter from "vue-router"
/** import router module */
import landingPage from "./landing_page"

Vue.use(VueRouter)

let routes: any[] = []

routes = routes.concat(landingPage, {
  path: "*",
  name: "404-not-found",
  component: () => import("@/views/pages/errors/404_.vue")
})

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: routes
})

// middleware section
router.beforeEach((to, from, next) => {
  return next()
})

export default router
