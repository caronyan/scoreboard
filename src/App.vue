<template>
  <div id="app">
    <input type="button" value="press me!" @click="toggleSidebar(!sidebar.opened)" />
    <nprogress-container></nprogress-container>
    <sidebar v-show="sidebar.opened"></sidebar>
    <app-container></app-container>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { Sidebar, AppContainer } from '@/components/layout/'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Sidebar,
    AppContainer,
    NprogressContainer
  },

  beforeMount() {
    
  },

  computed: mapGetters({
    sidebar: 'sidebar'
  }),

  methods: mapActions([
    'toggleSidebar'
  ])
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
