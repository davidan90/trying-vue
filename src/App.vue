<template>
  <div id="app">
    <header class="header-container">
      <div class="logo-container">
        <img src="./assets/logo.png">
      </div>
      <div class="navbar-container">
        <NavBar />
      </div>
    </header>
    <section class="section-container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { NavBar } from './components';

export default {
  name: 'app',
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  header.header-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    background-color: #74848e;
    text-transform: uppercase;

    .logo-container,
    .navbar-container {
      display: flex;
      align-items: center;
    }

    .logo-container {
      width: 20vw;
      justify-content: center;
      img {
        width: 60px;
        height: 50px;
      }
    }

    .navbar-container {
      width: 80vw;
      justify-content: flex-start;
    }
  }

  section.section-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
