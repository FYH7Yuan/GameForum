import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/module/store";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TitleVisible:true,
    isShowLogin:false
  },
  mutations: {},
  actions: {},
  modules: {
    store,
  }
});



