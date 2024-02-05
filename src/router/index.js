import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/components/MainComponent";
import Author from "@/components/AuthorComponent";
import Macho from "@/components/MachoComponent";
import Boy from "@/components/BoyComponent";
import Tongue from "@/components/TongueComponent";
import Contacts from "@/components/ContactsComponent";
import NotFound from "@/components/NotFoundComponent";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/author",
    name: "Author",
    component: Author,
  },
  {
    path: "/macho-na-dosuge",
    name: "Macho",
    component: Macho,
  },
  {
    path: "/pacan-k-uspehu-shel",
    name: "Boy",
    component: Boy,
  },
  {
    path: "/kostyanoy-yazik",
    name: "Tongue",
    component: Tongue,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/:CatchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
