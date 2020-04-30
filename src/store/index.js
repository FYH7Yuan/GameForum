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



