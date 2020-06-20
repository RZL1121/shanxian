<template>
     <div>
        <div class="code" v-show="this.code == 'jj'">
            <div class="things">
                        <div class="it"><span>接警单编号：</span><span style="color:#999">{{table.jjdbh}}</span></div>
                        <div class="it" style="min-width:328px"><span>接警单位：</span><span style="color:#999">{{table.jjdw}}</span></div>
                        <div class="it"><span>接警时间：</span><span style="color:#999">{{table.jjsj}}</span></div>
                        <div class="it"><span>报警人姓名：</span><span style="color:#999">{{table.bjrxm}}</span></div>
                        <div class="it"><span>报警人性别：</span><span style="color:#999">{{table.bjrxb}}</span></div>
                        <div class="it"><span>报警方式：</span><span style="color:#999">{{table.bjfs}}</span></div>
                        <div class="it"><span>联系电话：</span><span style="color:#999">{{table.lxdh}}</span></div>
                        <div class="it"><span>报警人住址：</span><span style="color:#999">{{table.bjrzz}}</span></div>
                        <div class="it"><span>管辖单位：</span><span style="color:#999">{{table.gxdw}}</span></div>
                        <div class="it"><span>报警类别：</span><span style="color:#999">{{table.bjlb}}</span></div>
                        <div class="it"><span>警情地址：</span><span style="color:#999">{{table.jqdz}}</span></div>
                        <div class="it"><span>地理坐标：</span><span style="color:#999">{{table.ddzb}}</span></div>
            </div>
            <div class="desc"><span>报警内容：</span><span style="color:#999">{{table.bjnr}}</span></div>
        </div>
     </div>
</template>
<script>
import {jj} from '@/api/table'
export default {
    data(){
        return{
            bh:this.$route.query.jjdbh,
            code:this.$route.query.code,
            table:[],
        }
    },
    methods:{
        getitemdeal(){
            if(this.code == 'jj'){  //如果有接警传过来的编号
                      jj(this.bh).then(res=>{
                        console.log(res)
                        this.table = res.data
                    })
            }else if(this.code == 'cj'){

            }
      
        }
    },
    created(){
        this.getitemdeal()
        
    }
}
</script>

<style scoped lang='scss'>
   .code{

   }
   .things{
        width:100%;
        margin:0 auto;
        padding-top:30px;
        background:#fff;
        overflow: hidden;
        // margin-bottom:50px;
    }
    .it{
            width:33.3%;;
            min-width:300px;
            height:30px;
            float:left;
            color: rgb(49,49,49);
            font-size: 15px;
            // text-align: center;
            line-height:30px;
            margin-bottom:10px;
            padding-left:5%;
        }
     .desc{
            background:#fff ;
            float:left; 
            width:100% ;
            min-height: 50px;
            // height:30px;
            // overflow: hidden;
            // text-overflow:ellipsis;
            // white-space: nowrap;
            padding-left:5%;
        }
</style>

