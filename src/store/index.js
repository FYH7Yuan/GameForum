import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import actions from './actions'

import store from "@/store/module/store";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TitleVisible: true,
    isShowLogin: false
  },

  modules: {
    store,
  },
  getters,
  actions,
});
