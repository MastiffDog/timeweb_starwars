import NotFound from "@/views/NotFound.vue"

const Page = () => import("@/views/Page.vue")

const routes = [
    {
      path: "/page/:id",
      component: Page
    },
    {
      path: "*",
      component: NotFound
    }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
};**/

export default routes;