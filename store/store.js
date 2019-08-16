import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  }, actions: { //Using an action to commit your mutation
    increment: (context, payload) => {
      context.commit('increment', payload);
    },
    decrement: context => {
      context.commit('decrement');
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement')
      }, 1000)
    }
  }
});