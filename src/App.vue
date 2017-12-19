<template>
  <div id="app">
    <nav>
      <ul class="navigation">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333435;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2867e4;
  ul.navigation {
  text-align: center;
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: #fff;
    }
  }
}
}

a {
  color: #2867e4;
  text-decoration: none;
}
</style>
