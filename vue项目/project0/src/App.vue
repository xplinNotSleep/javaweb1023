<template>
  <div id="app">
    <!--<nav>
      <router-link to="/">vuehome</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>-->
    <h1>{{message}}</h1>
    <ElementView></ElementView>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

  import ElementView from './views/ElementView.vue';
  export default
  {

    components:{ElementView},
    data() {
      return {
        message:"hello vue"
      };
    },
    methods:
    {

    }
  }

</script>