/* Components */
import Home from './pages/home.vue';
import PostSingle from "./pages/post-single.vue";
import Register from "./pages/auth/register.vue";

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:post',
        name: 'post-single',
        component: PostSingle
    },
    {
        path: '/signup',
        name: 'signup',
        component: Register
    },
];

export default routes;
