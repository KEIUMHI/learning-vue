Vue.component('balance',{
    template:`
    <div>
    <show @show-balance="show_balance"></show>
    <div v-if="show">余额还剩￥0.3</div>
    </div>
    `,
    data: function(){
        return {
            show:false,
        }
    },
    methods:{
        show_balance: function(){
            this.show = !this.show
        },
    },
})
Vue.component('show',{
    template:`<button @click="onClick">显示/隐藏余额</button>`,
    methods:{
        onClick: function(){
            this.$emit('show-balance')
        },
    }
})

var app = new Vue({
    el: '#app',
})