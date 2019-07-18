<template>
  <div id="app">
    <input type="button" value="press me!" @click="toggleSidebar(!sidebar.opened)" />
    <nprogress-container></nprogress-container>
    <sidebar v-show="sidebar.opened" :menus="menus"></sidebar>
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
    const { body } = document
    const WIDTH = 765

    const deviceListener = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let showSidebar = rect.width >= WIDTH
        this.toggleSidebar(showSidebar)
      }
    }

    document.addEventListener('visibilitychange', deviceListener)
    window.addEventListener('DOMContentLoaded', deviceListener)
    window.addEventListener('resize', deviceListener)
  },

  computed: mapGetters({
    sidebar: 'sidebar',
    menus: 'menu'
  }),

  methods: mapActions([
    'toggleSidebar'
  ])
}
</script>

<style>
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: grey;
  margin-top: 60px;
}

.menu-item-active {
  border-left: 5px solid #42b983;
  color: #42b983;
}

</style>
