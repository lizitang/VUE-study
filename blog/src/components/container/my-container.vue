<template>
  <div class="m-container">
      <m-slider></m-slider>
      <div class="content-box">
        <my-header></my-header>
        <router-view/>
      </div>
  </div>
</template>
<script>
    import MyHeader from '../header/my-header'
    import MySlider from '../slider/my-slider'
    import MyTable from '../table/my-table'    
    export default {
        components: {
            'my-header': MyHeader,
            'm-slider': MySlider,
            'm-table': MyTable
        }
    }
</script>
<style>
    .m-container {
        
    }
    .content-box {
        margin-left: 230px;
    }
</style>


