var Event = new Vue();

Vue.component('huahua',{
    template:`
    <div>
        我说：<input type="text" @keyup="on_change" v-model="i_said"/>
    </div>`,
    data: function(){
        return {
            i_said: '',
        };
    },
    methods:{
        on_change: function(){
            Event.$emit('huahua-saidi_said-something',this.i_said)
        },
    }
});
Vue.component('shuandan',{
    template:`
    <div>
        花花说：{{huahua_saidi_said}}
    </div>`,
    data: function(){
        return {
            huahua_saidi_said: '',
        };
    },
    mounted: function(){
        var me = this;
        Event.$on('huahua-saidi_said-something',function(data){
            me.huahua_saidi_said = data;
        })
    },
});

var app = new Vue({
    el: '#app',
})