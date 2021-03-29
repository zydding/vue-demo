<template>
  <ul>
      <template v-for="(item,index) in tableData">
        <li :key="index">
            时间： {{item.time}}
            访问量： {{item.pageview}}
            IP数： {{item.ipcount}}
        </li>
      </template>
  </ul>
</template>

<script>
export default {
    data(){
        return {
            //展示的数据对象
            tableData: {},
        }
    },
    //组件挂载
    mounted(){
        //获取接口数据
        this.$axios({
            method: 'get',
            url: '/api/pageView/findByDay?day='+30,
            data: {

            },
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                //application/json
                'Zeke_Up': 1,
            },
        }).then((res)=>{
            this.tableData= res.data;
        }).catch((e)=>{
            console.log('错误',e);
        })
    },
}
</script>

<style>

</style>