var routes = [
    {
        path: '/',
        component: {
            template: `<div>
                <h1>Home</h1>
            </div>`,
        },
    },
    {
        path: '/about',
        component: {
            template: `<div>
                <h1>About Us</h1>
            </div>`,
        },
    },
    {
        path: '/post',
        component: {
            template: `<div>
                <h1>帖子管理</h1>
            </div>`,
        },
    },
    {
        path: '/login',
        component: {
            template: `<div>
                <h1>登陆</h1>
            </div>`,
        },
    },
];

var router = new VueRouter({
    routes: routes,
});

router.beforeEach((to, from, next) => {
    var logged_in = true;
    if (!logged_in && to.path == '/post')
        next('/login');
    else
        next();
});

var app = new Vue({
    el: '#app',
    router: router,
});