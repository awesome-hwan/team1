import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Vuex from 'Vuex'
=======
>>>>>>> fe309722181fba95de06aae16e3ba1fa0472be35
import {routes} from './routes'
import App from './App.vue'

Vue.use(VueRouter)
<<<<<<< HEAD
// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     books: [
//      {
//        "book":{
//        id: "x_5KAQAAIAAJ",
//        title: "개",
//        author:"김훈",
//        cover_thumbnail: "http://books.google.com/books/content?id=x_5KAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//      },
//       comment:{
//         content: " ",
//       },
//       star:{
//         content:" 5",
//       },
//       mark:{
//         content:[ "dfdfdf"],
//       },
//     }
//    ],
//    selected_book: {
//        title: '',
//        author: '',
//        cover_thumbnail:'',
//        mark:'',
//        comment:'',
//
//     },
//   },
//   mutations: {
//     // selectedBook(state) {
//     //   state.selected_book = state.books;
//   }
// });
=======
>>>>>>> fe309722181fba95de06aae16e3ba1fa0472be35


const router = new VueRouter({
  mode: 'history',
  routes,
});

<<<<<<< HEAD
new Vue({
  el: '#app',
  router,

  render: h => h(App)
})
// export default new Vuex.Store({
//   state,
//   mutations
// })
=======
// router.beforeEach((to, from, next) => {
//
// });

new Vue({
  el: '#app',
  router,
  // jquery,
  render: h => h(App)
})
>>>>>>> fe309722181fba95de06aae16e3ba1fa0472be35
