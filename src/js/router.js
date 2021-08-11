import {createRouter, createWebHashHistory} from "vue-router";
import login from "@/components/login";
import home from "@/components/home";

const routes = [
    {
        path: "/home",
        name: "home",
        component: home
    },

    {
        path: "/",
        name: "login",
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;