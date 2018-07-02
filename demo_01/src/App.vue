<template>
  <div id="app">
    {{msg}}
    <div v-if="show">hello</div>
    <p>{{lab}}</p>
    <button v-on:click="changeLab">逆转消息</button>
    <input type="text" v-model="lab">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 12,
      show: false,
      lab: 'hello'
    }
  },
  methods: {
    changeLab: function () {
      this.lab = this.lab.split('').reverse().join('');
    }
  }
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
