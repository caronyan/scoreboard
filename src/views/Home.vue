<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ace-test></ace-test>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AceTest from '@/components/AceEditor.vue'

export default {
  name: 'home',
  components: {
    AceTest
  }
}
</script>
