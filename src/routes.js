/* Components */
import Home from './pages/home.vue';
import PostSingle from "./pages/post-single.vue";
import Register from "./pages/auth/register.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";
import Login from "./pages/auth/login.vue";

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
    {
        path: '/signin',
        name: 'signin',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
];

export default routes;
