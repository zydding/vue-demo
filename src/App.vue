<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {asyncMethod} from './assets/js/commonApi';
import moment from 'moment';
export default {
  async created(){

    let userInfo = {
      user: 'admin',
      pwd: '123456',
    };
      //登录 打包前注释
    // let res1ob=await asyncMethod(this.$qs.stringify(userInfo),"/api/login/check",'post');
    // localStorage.setItem('Admin-Data', JSON.stringify(res1ob.data.data));
    // sessionStorage.setItem("logined", true);
    // localStorage.setItem('Admin-Token',true);
  },
  mounted(){
    // this.fixRem();
  },
  methods:{
    //字体自适应
    fixRem() {
      var windowWidth = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
      // windowWidth = windowWidth > 750 ? 750 : windowWidth;
      var rootSize = 12 * (windowWidth / 1366);
      var htmlNode = document.getElementsByTagName("html")[0];
      htmlNode.style.fontSize = rootSize + 'px';
      // $('body').css("font-size",  rootSize + 'px')
    },
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

</style>
