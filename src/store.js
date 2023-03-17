import { createStore } from "vuex";

const useStore = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },

    decrement(state, payload) {
      state.counter = state.counter - payload;
    },

    reset(state, payload) {
      state.counter = state.counter * payload;
    },

    setValue(state, payload) {
      state.counter = payload;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },

    decrement(context, payload) {
      context.commit("decrement", payload);
    },

    reset(context, payload) {
      context.commit("reset", payload);
    },

    setValue(context, payload) {
      context.commit("setValue", payload);
    },
  },
});

export default useStore;
