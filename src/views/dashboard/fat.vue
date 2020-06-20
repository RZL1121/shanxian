<template>
    <div class="cox">
            <div class="item" v-for="(it,index) in list" :key="index" :class="[index >=4 && index <=6 || index >=11 && index <=13 ?'toright':'']">
                {{it.wd}}
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {id:1,wd:'1'},
                {id:2,wd:'2'},
                {id:3,wd:'3'},
                {id:4,wd:'4'},
                {id:5,wd:'5'},
                {id:6,wd:'6'},
                {id:7,wd:'7'},
                {id:8,wd:'8'},
                {id:9,wd:'9'},
                {id:10,wd:'10'},
                {id:11,wd:'11'},
                {id:12,wd:'12'},
                
                

            ]
        }
    },
    created(){
 
    }
}
</script>
<style scoped lang='scss'>
 .cox{
  width:100%;
  overflow: hidden;
  background:skyblue;
  .item{
      width:20%;
      height:150px;
      background:pink;
      float:left;
      margin-left:2.5%;
      margin-right:2.5%;
      margin-top:30px;
  }
  .toright{
      float:right;
      margin-left:6%;
      margin-right:6%;
  }
 }
</style>


