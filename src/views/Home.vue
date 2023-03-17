<template>
  <h1>This is the Home Page</h1>
  <button @click="goToCounter">Counter</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "HomePage",

  setup() {
    const router = useRouter();
    function goToCounter() {
      router.push("/counter");
    }

    return {
      goToCounter,
    };
  },
};
</script>

<style></style>
