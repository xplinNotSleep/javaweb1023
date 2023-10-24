<template>
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  -->
  <div>
    <View1></View1>>
  </div>
</template>

<script>
import View1 from './views/mainPage/EmpView.vue'

export default {
  components: {View1},
  data() {
    return {
      message: "Hello vue222"
    }
  },
  methods: {
    
  }
}
</script>


<style>



/*
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
}*/
</style>
