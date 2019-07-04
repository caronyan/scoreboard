<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <header></header>
    <sidebar></sidebar>
    <app-container></app-container>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { Sidebar, AppContainer, Header } from '@/components/layout/'
// import { mapGetters, mapActions } from 'vuex'


export default {
  components: {
    Header,
    Sidebar,
    AppContainer,
    NprogressContainer
  },
  beforeMount() {
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
