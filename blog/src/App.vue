<template>
  <div id="app">
    <my-container></my-container>
  </div>
</template>

<script>
import MyContainer from './components/container/my-container'
export default {
  components: {
    'my-container': MyContainer
  },
  data () {
  	return {

  	}
  }
}
</script>

<style>
  #app {
    height: 100%;
  }
</style>
