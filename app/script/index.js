require('./../css/main.scss');
require('./all.js');
require('./img');
import Vue from 'vue';
import axios from 'axios'
import Apps from './../components/App.vue'
import  Velocity from 'velocity-animate'

// function change(paremary){
//     this.name = "ss";
//     this.alert = paremary;
// }
// axios.get('http://apiqinbayou.ztxywy.net/app/service/category/index?openid=ocbOUs4UnYI7uQ4TEOG8Sr3MdsQc')
// .then(function(item){
//     console.log(item.data);
//     var ss = item.data;
//     var app = new Vue({
//         el: '#app',
//         data: {
//             message: item.data
//         }
//     })
// });
// var ss = {
//     ss:'sss'
// }
// const longChance = ['sss', 'ksksksk'];
// let alls = longChance.map((item) =>  new change(item));
// console.log( Object.assign(...alls));

    var app = new Vue({
        el: '#app',
        data: {
           test1: 'animation.css',
           show: false,
           show2: false,
        },
        components: {
            'Apps': Apps
        },
        methods:{
            buttom(){
                this.show = !this.show;
            },
            buttom2(){
                this.show2 = !this.show2;
            },
            beforeEnter(){
                console.log('beforeEnter');
            },
            enter(el){
                console.log(el);
            },
            afterEnter(){
                console.log('afterEnter');
            },
            enterCancelled(){
                console.log('enterCancelled');
            },
            beforeLeave(){
                console.log('beforeLeave');
            },
            leave(){
                console.log('leave');
            },
            afterLeave(){
                console.log('afterLeave');
            },
            leaveCancelled(){
                console.log('leaveCancelled');
            }
        }
    });

