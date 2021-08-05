<template>
   <div id = "app">
    <img src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Hello</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/todos">TodoPage</router-link>
    </div>
  </div>
  <HelloWorld msg="TodoList Test"/>
  <!-- 이런식으로 router-view 줄여 쓰는거 같음 추가로 router-view는 하나여야함 -->
  <router-view/> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name : 'app',
  components : {
    HelloWorld
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
