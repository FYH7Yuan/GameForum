import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/module/store";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    TitleVisible: true,
    isShowLogin: false,
    isLogin: false
  },
  mutations: {
    changeLoginWindowStatus(state) {
      state.isShowLogin = !state.isShowLogin
    },
    changeLoginStatus(state) {
      if (sessionStorage.getItem('loginToken')) {
        state.isLogin = true;
      }
    },
    changeTitleStatus(state,flag){
      state.TitleVisible = flag
    }
  },
  actions: {},
  modules: {
    store,
  }
});