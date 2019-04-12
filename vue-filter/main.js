Vue.filter('currency',function(val,unit = '元'){
    val = val || 0;
    unit = unit;
    return val + unit

})

var app = new Vue({
    el: '#app',
    data: {
        price: 10,
    },
});                                                                                                                                    