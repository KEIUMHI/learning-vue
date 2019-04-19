var routes = [
    {
        path: '/',
        component: {
            template: `<div>
                <h1>首页</h1>
            </div>`,
        },
    },
    {
        path: '/about',
        component: {
            template: `<div>
                <h1>关于我们</h1>
            </div>`,
        },
    },
    {
        path: '/user/:name',
        name: 'user',
        component: {
            template: `<div>
                <div>我叫{{$route.params.name}}</div>
                <router-link :to="'/user/' + $route.params.name + '/more'">更多</router-link>
                <router-view></router-view>
            </div>`,
        },
        children: [
            {
                path: 'more',
                component: {
                    template:`<div>
                        <div>名为{{$route.params.name}}的详细信息:</div>
                        <div>Laborum officia est irure aliquip cillum esse veniam. Anim elit nisi ut dolor ipsum consequat est do nulla duis. Et do cupidatat duis deserunt elit magna nisi non irure pariatur excepteur cillum. Ullamco nulla sint excepteur aute. Cillum pariatur eu eu sunt. Nisi officia officia magna dolor laboris officia non minim elit ad amet. Pariatur magna aliquip laboris eiusmod aliqua culpa nostrud incididunt nulla velit velit laborum culpa.
    
    Id sint exercitation quis ea consectetur quis exercitation deserunt sit irure eiusmod. Lorem officia ex anim sint amet excepteur reprehenderit aute est. Dolore fugiat excepteur laborum qui occaecat ullamco officia exercitation occaecat exercitation officia adipisicing proident irure.
    
    Duis dolore aute Lorem occaecat. Dolor veniam magna ex esse nostrud est ea consectetur excepteur voluptate dolor dolor. Et laborum sit amet laborum veniam. Exercitation voluptate aliqua eiusmod quis ipsum enim aliqua reprehenderit velit minim anim quis consectetur.
    
    Commodo dolore esse deserunt eu cupidatat consequat consectetur ullamco amet commodo. Esse duis eu duis excepteur qui. Ad incididunt ullamco ipsum quis voluptate adipisicing laborum. Amet qui nisi labore nisi ad aliqua culpa dolor excepteur nisi. Culpa et mollit mollit nostrud occaecat. Sunt minim velit consectetur enim. Nisi amet culpa labore sint deserunt quis laborum exercitation aute dolore veniam et cillum laborum.
    
    Dolore tempor elit adipisicing officia ut ut ullamco ex nulla magna. Adipisicing sit occaecat laboris laborum veniam occaecat et nulla id id occaecat. Dolor reprehenderit dolore culpa amet. Occaecat Lorem et cillum eu eu consequat fugiat quis et anim amet.
    
    Elit cupidatat incididunt exercitation nulla ut consequat id cillum esse officia non Lorem aliquip. Duis incididunt laborum commodo sint cillum culpa reprehenderit. Amet Lorem aute labore non velit culpa. Sunt proident incididunt pariatur eiusmod aute adipisicing anim. Reprehenderit nostrud sit enim ut sunt aliquip incididunt cupidatat minim esse quis.
    
    Eu deserunt commodo et occaecat aute. Exercitation anim pariatur officia esse. Culpa sit commodo laboris proident irure sit dolore culpa exercitation et velit.
    
    Non occaecat mollit dolore aliqua fugiat eiusmod commodo proident consequat consectetur exercitation ullamco. Laborum enim amet ea Lorem magna duis mollit esse. Velit deserunt eiusmod duis cillum consectetur velit tempor est voluptate consequat sunt anim dolore occaecat. Et incididunt ad exercitation non id et labore ea non.
    
    Cillum Lorem exercitation reprehenderit ullamco elit culpa consectetur nisi labore fugiat amet. Nulla dolor dolore non magna ipsum deserunt culpa labore laboris. Laborum aliqua commodo in aute occaecat consequat nostrud ea adipisicing sunt. Enim aute dolor reprehenderit sint commodo sit non laboris quis dolore qui ut voluptate.
    
    Magna est et fugiat id veniam officia minim ut enim ad exercitation elit id esse. Et incididunt dolore consequat officia cillum aliqua. Dolor adipisicing adipisicing irure non eiusmod fugiat consequat do amet do. Sit ut do et ut veniam in officia amet velit do. Amet minim ad magna nulla do ipsum ipsum est nostrud labore labore.
    </div>
                    </div>`,
                },
            },
        ],
    },
];

 var router = new VueRouter({
    routes: routes,
 });

 var app = new Vue({
    el: '#app',
    router: router,
    data: {
        nameList: {
            name1: 'whh',
            name2: 'lsd',
            name3: 'zqd',
        },
    },
    methods: {
        surf: function(){
            setTimeout(function(){
                this.router.push('/about');
                setTimeout(() => {
                    this.router.push({name: 'user', params: {name: 'lsd'}})
                }, 2000)
            ,2000})
        },
    },
 });