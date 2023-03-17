<template>
  <div>
    <center>
      <h1>Counter: {{ counter }}</h1>
      <div>
        <button @click="incrementCounter">Increment</button>
        <button @click="decrementCounter">Decrement</button>
      </div>
      <div>
        <button @click="resetCounter">Reset</button>
      </div>
      <form @submit.prevent="setCounter(inputCount)">
        <input v-model="inputCount" type="number" />
        <button>set value</button>
      </form>

      <div>
        <button @click="goBackHome">Go Back to Home</button>
      </div>
    </center>
  </div>
</template>

<script>
import useCounter from "@/composable/useCounter";
import router from "@/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CounterP",
  setup() {
    const inputCount = ref("");
    useRouter();

    const { increment, decrement, reset, set } = useCounter();

    function incrementCounter() {
      increment();
    }

    function decrementCounter() {
      decrement();
    }

    function resetCounter() {
      reset();
    }

    function setCounter(input) {
      set(input);
    }

    function goBackHome() {
      router.push("/");
    }

    return {
      goBackHome,
      setCounter,
      incrementCounter,
      decrementCounter,
      resetCounter,
      inputCount,
    };
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>

<style></style>
