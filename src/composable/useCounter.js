import { useStore } from "vuex";


export default function useCounter() {

    const store = useStore()

    function increment() {
      store.dispatch('increment', 1)
    }

    function decrement() {
      store.dispatch('decrement', 1)
    }

    function reset() {
      store.dispatch('reset', 0)
    }

    function set(payload) {
        store.dispatch('setValue', payload )
        console.log(payload)
      }

  return {
    increment,
    decrement,
    reset,
    set,
  };
};
