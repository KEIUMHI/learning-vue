var routes = [	//定义一个数组，数组包含基础配置信息[path,component(s)]
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
		},
	},
	{
		path: '/user/:name',
		component: {
			template: `<div>
				<div>My name is {{$route.params.name}}.</div>
		</div>`
		},
	},
];

var router = new VueRouter({ //创建一个VueRouter，Vuerouter中一个属性routes，用来存储路由基本信息
	routes: routes,
});

var app = new Vue({
	el: '#app',  //Vue实例作用对象
	router: router,  //Vue中的一个属性，用来引用VueRouter
	data: {
		nameList: {
			name1: 'whh',
			name2: 'zqd',
			name3: 'lsd',
		},
	},
});