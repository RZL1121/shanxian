<template>
<div>
    <div class="goback">
     <el-link :underline="false" type="primary" @click="goback">已分流</el-link>  <i class="el-icon-arrow-right"></i> <el-link :underline="false" type="primary" >详情</el-link>
    </div>
    <div class="detailbox">
       <div class="top">
           <div class="top_title">110接警信息</div>
           <div class="top_body">
                <div class="body_item"><span class="tl">接警单编号:</span><span>{{jiejing.jjdbh}}</span></div>
                <div class="body_item"><span class="tl">接警单位:</span><span>{{jiejing.jjdw}}</span></div>
                <div class="body_item"><span class="tl">接警时间:</span><span>{{jiejing.jjsj}}</span></div>
                <div class="body_item"><span class="tl">报警人姓名:</span><span>{{jiejing.bjrxm}}</span></div>
                <div class="body_item"><span class="tl">报警人性别:</span><span>{{jiejing.bjrxb}}</span></div>
                <div class="body_item"><span class="tl">报警方式:</span><span>{{jiejing.bjfs}}</span></div>
                <div class="body_item"><span class="tl">联系电话:</span><span>{{jiejing.lxdh}}</span></div>
                <div class="body_item"><span class="tl">报警人住址:</span><span>{{jiejing.bjrzz}}</span></div>
                <div class="body_item"><span class="tl">管辖单位:</span><span>{{jiejing.gxdw}}</span></div>
                <div class="body_item"><span class="tl">报警类别:</span><span>{{jiejing.bjlb}}</span></div>
                <div class="body_item"><span class="tl">警情地址:</span><span>{{jiejing.jqdz}}</span></div>
                <div class="body_item" style="width:98% "><span class="tl">报警内容:</span><span>{{jiejing.bjnr}}</span></div>
           </div>
       </div>
       <div class="center">
            <div class="center_title">110处警信息</div>
            <div class="center_body">
                  <el-table
                    :data="chujing"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="pjdw_mc"
                    label="派警单位"             
                     align="center">
                    </el-table-column>
                    <el-table-column
                    prop="pjr"
                    label="派警人"         
                     align="center">
                    </el-table-column>
                    <el-table-column
                    prop="pjsj"
                    label="派警时间"
                     align="center">
                    </el-table-column>
                      <el-table-column
                    prop="pjyj"
                    label="派警意见"
                     align="center">
                    </el-table-column>
                      <el-table-column
                    prop="cddw_mc"
                    label="出动单位"
                     align="center">
                    </el-table-column>
                      <el-table-column
                    prop="cdry"
                    label="出动人员"
                     align="center">
                    </el-table-column>
                </el-table>
            </div>
       </div>
        <div class="center">
            <div class="center_title">110反馈信息</div>
            <div class="center_body">
                  <el-table
                    :data="fankui"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="fkdw_mc"
                    label="反馈单位"             
                     align="center">
                    </el-table-column>
                    <el-table-column
                    prop="fkr"
                    label="反馈人"         
                     align="center">
                    </el-table-column>
                    <el-table-column
                    prop="fksj"
                    label="反馈时间"
                     align="center">
                    </el-table-column>
                      <el-table-column
                    prop="jqcljg"
                    label="警情处理结果"
                     align="center">
                    </el-table-column>
                </el-table>
            </div>
       </div>
        <div class="center" >
            <div class="center_title">分流情况</div>
            <div class="center_body" style="margin-bottom:30px;">
                  <el-table
                    :data="fenliu"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="flr"
                    label="分流人"             
                     align="center">
                    </el-table-column>
                    <el-table-column
                    prop="fljg"
                    label="分流结果"         
                     align="center">
                    </el-table-column>
                    <el-table-column
                    prop="flsj"
                    label="分流时间"
                     align="center">
                    </el-table-column>
                      <el-table-column
                    prop="ysdw_bm"
                    label="移送单位"
                     align="center">
                    </el-table-column>
                      <el-table-column
                    prop="ysjsr"
                    label="移送接收人"
                     align="center">
                    </el-table-column>
                </el-table>
            </div>
       </div>
    </div>
</div>
</template>
<script>
import {JQcj, JQfk,JQjj,JQfl} from '@/api/table'
export default {
    data(){
        return{
            jjbdh:this.$route.query.jjdbh,
            jiejing:'',
            chujing:[],
            fankui:[],
            fenliu: []
        }
    },
    methods:{
        goback(){
            window.history.back();
        },
        JJ(){
            JQjj(this.jjbdh).then(res=>{
               this.jiejing = res.data
            })
        },
        CJ(){
              JQcj(this.jjbdh).then(res=>{
               this.chujing = res.data            
            })
        },
        FK(){
            JQfk(this.jjbdh).then(res=>{
                this.fankui = res.data

            })
        },
        FL(){
            JQfl(this.jjbdh).then(res=>{
                 this.fenliu = res.data
            })
        }
    },
    created(){
      this.JJ()
      this.CJ()
      this.FK()
      this.FL()
    }

}
</script>
<style scoped lang="scss">
.goback{
    width:100%;
    margin-top:25px;
    padding-left: 50px;
    height:30px;
    line-height:30px;
    a{
        font-size: 18px;
    }
}
.detailbox{
    width:98%;
    min-width:1500px;
    // height:1000px;
    background:#fff;
    border-radius: 15px;
    margin:0 auto;
    margin-top:10px;
    margin-bottom: 50px;
    border-radius: 10px;
}
.top{
    overflow: hidden;
    .top_title{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 4px solid rgb(81,93,191);
        margin-left: 20px;
        height: 30px;
        line-height: 30px;
    }
}
.top_body{
    .body_item{
        width:31%;
        margin-left:2%;
        float:left;
        margin-top:10px;
        margin-bottom:10px;
        .tl{
             display: inline-block;
             width:100px;
            // margin-right:30px;
        }
    }
}
.center{
        overflow: hidden;
    .center_title{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 4px solid rgb(81,93,191);
        margin-left: 20px;
        height: 30px;
        line-height: 30px;
    }
    .center_body{
        width:1450px;
        min-width:1400px;
        margin:0 auto;
        // min-width: 1500px;
        margin-bottom:10px;
        .center_item{
            display: flex;
            width: 14%;
            height:60px;
            text-align: center;
            flex-direction: column;
            justify-content: space-around;
            float: left;
            .item_top{
                font-weight: 600;
            }
        }
    }
}
</style>

