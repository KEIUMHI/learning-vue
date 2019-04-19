var routes = [
    {
        path: '/',
        component: {
            template: `<div>
                <h1>首页</h1>
            </div>`
        },
    },
    {
        path: '/about',
        component: {
            template: `<div>
                <h1>关于我们</h1>
            </div>`
        }
    },
    {
        path: '/user/:name',
        component: {
            template: `<div>
                <div>我叫：{{$route.params.name}}</div>
                <div>我今年：{{$route.query.age}}岁了</div>
                <router-link :to="'/user/'+$route.params.name+'/more'">more</router-link>
                <router-view></router-view>
            </div>`
        },
        children: [
            {
                path: 'more',
                component: {
                    template:`<div>
                        Magna est et ipsum sint irure eiusmod ut consequat non. Enim officia in non cupidatat sunt nisi deserunt sit magna anim anim sint incididunt. Ullamco elit aute sunt sint dolor do ex.
Magna quis exercitation dolor aliqua. Mollit ad ea fugiat esse in ad. Officia fugiat velit proident Lorem cupidatat eu eu. Nulla laborum qui reprehenderit tempor incididunt. Incididunt nostrud sint ut elit enim minim aute magna ullamco voluptate nulla esse do eu. Nisi nisi occaecat aliqua duis velit velit nisi sunt eu veniam. Ut eiusmod proident id est dolore mollit nostrud veniam.
                    </div>
                     `
                }
            }
        ]
    },
];

var router = new VueRouter({
    routes: routes,
});

var app = new Vue({
    el: '#app',
    router: router,
    data: {
        name1: 'whh',
        name2: 'lsd',
        nameList: {
            name1: 'whh',
            name2: 'lsd',
            name3: 'egz',
            name4: 'wch',
        },
    },
})