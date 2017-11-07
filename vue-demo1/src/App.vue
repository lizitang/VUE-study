<template>
  <div>
    <input type="text" v-model="myData">
    <componentA :dataA="dataA" :data="myData">
      <p>123</p>
    </componentA>
    <p v-text="hello"></p>
    <p v-html="hello "></p>
    <ul>
      <li v-for="(item, index) in list" :class="{odd: index%2}">{{item.name}}-{{item.price}}-{{index}}</li>
    </ul>
    <button @click="addItem">add item</button>
    <p v-for="(value, key) in objList">{{key}} - {{value}}</p>
    <a v-bind:href="link">to Baidu</a>
    <a href="" v-if="isPartA">partA</a>
    <a href="" v-show="!isPartA">partB</a>
    <button @click="toggle">toggle</button>
    <input type="text" @keydown.13="onKeydown">
    <componentB @my-event="onComaMyEvent"></componentB>
    <input type="text" v-model="myValue"> {{ myValue }}
    <div>{{ computedMyValue }}</div>
    <input type="text" v-model="myVal">
  </div>
</template>

<script>
import Vue from 'vue'
import componentA from './components/a'
import componentB from './components/b'
export default {
  components: {
    componentA: componentA,
    componentB: componentB
  },
  data () {
    return {
      myData: '',
      myVal: '',
      hello: '<h3>world</h3>',
      link: 'https://www.baidu.com',
      dataA: 'HAHAHA',
      isPartA: true,
      myValue: 1,
      list: [
      {
        name: 'apple',
        price: 34
      },
      {
        name: 'banana',
        price: 12
      }],
      objList: {
        name: 'apple',
        price: 16,
        color: 'red'
      }
    }
  },
  computed: {
    computedMyValue () {
      return this.myValue;
    }
  },
  watch: {
    myVal: function (val, oldVal) {
      console.log(val, oldVal);
    }
  },
  methods: {
    addItem () {
      // this.list.push({name: 'orange', price: 16});
      // this.list.length = 10;
      Vue.set(this.list, 1, {
        name: 'orange',
        price: 16
      })
      // this.list[1] = {
      //   name: 'orange',
      //   price: 16
      // }
    },
    toggle () {
      this.isPartA = !this.isPartA;
    },
    onKeydown () {
      console.log('this is keydown');
    },
    onComaMyEvent (data) {
      console.log('click ' + data);
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
