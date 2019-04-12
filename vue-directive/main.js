Vue.directive('pin', function(el, binding){
    var pinned = binding.value;
    var position = binding.modifiers;
    var warning = binding.arg;
    // console.log(this.data);
    // console.log(position)
    if(pinned && warning){
        el.style.position = 'fixed';
        for(var key in position){
            if(position[key]){
                el.style[key] = '10px'; 
            }
        };
        el.style.background = 'yellow';
    }else{
        el.style.background = 'gray';
        el.style.position = 'static';
    };
});

var app = new Vue({
    el: '#app',
    data: {
        card1:{
            pinned: false,
        },
        card2:{
            pinned: false,
        },    
        warn: false,
    },
    methods: {
        toggle1(){
            console.log(this.warn);
            this.card1.pinned = !this.card1.pinned
            this.warn = !this.warn
        },
        toggle2(){
            console.log(this.warn);
            this.card2.pinned = !this.card2.pinned
            this.warn = !this.warn
        }
    }
});