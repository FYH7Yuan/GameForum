import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/module/store";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TitleVisible:true,
  },
  mutations: {},
  actions: {},
  modules: {
    store,
  }
});



// import Vue from 'vue'
// import Vuex from 'vuex'
// import book from './modules/book'
// import getters from './getters'
// import actions from './actions'
// import store from './modules/store'
// Vue.use(Vuex)
//
//
//
//
// export default new Vuex.Store({
//   modules: {
//     book,
//     store,
//   },
//   getters,
//   actions
//
//
// })
