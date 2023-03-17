<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Home </router-link>
      <router-link to="/counter"> Counter </router-link>
    </div>
    <img alt="Vue logo" id="logo" src="./assets/logo.png" />
    <routerView />
    <!-- <Counter />
    <Home /> -->
  </div>
</template>

<script>
import Counter from './views/Counter.vue';
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Counter,
    Home,
  },

  // computed:{
  //   Counter(){
  //     return this.$store.getters.counter
  //   }
  // }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#logo {
  margin-top: 50px;
}
</style>
