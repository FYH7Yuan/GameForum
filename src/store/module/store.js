const store = {
  state: {
    demoValue: {},
    FileIVisible: false,
    FileIIVisible: false,
    FileIIIVisible: false,
    FileIVVisible: false,

  },

  getters: {},

  mutations: {
    setDemoValue(state, demoValue) {
      state.demoValue = demoValue;
    },

    SET_FILE_I_VISIBLE(state, visible) {
      state.FileIVisible = visible;
    },
    SET_FILE_II_VISIBLE(state, visible) {
      state.FileIVisible = visible;
    },
    SET_FILE_III_VISIBLE(state, visible) {
      state.FileIVisible = visible;
    },
    SET_FILE_IV_VISIBLE(state, visible) {
      state.FileIVisible = visible;
    },
  }
};

export default store;
