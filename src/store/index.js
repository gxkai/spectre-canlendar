import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    theme: 'theme1',
    login: {
      name: '',
      password: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
