<template>
 <div id="detailbox">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="案件信息" name="first">
            <div class="things">
                <div class="it"><span>案件编号：</span><span style="color:#999">{{del.case_police_nm	}}</span></div>
                <div class="it" style="min-width:328px"><span>警情编号：</span><span style="color:#999">{{del.jq_bh}}</span></div>
                <div class="it"><span>案件来源：</span><span style="color:#999">{{del.case_from}}</span></div>
                <div class="it"><span>案件名称：</span><span style="color:#999">{{del.case_name}}</span></div>
                <div class="it"><span>案件类型：</span><span style="color:#999">{{del.case_type_name}}</span></div>
                <div class="it"><span>案件状态：</span><span style="color:#999">{{del.case_status}}</span></div>
                <div class="it"><span>案由：</span><span style="color:#999">{{del.case_ay}}</span></div>
                <div class="it"><span>警种类别：</span><span style="color:#999">{{del.case_jzlb}}</span></div>
                <div class="it"><span>案发地点：</span><span style="color:#999">{{del.case_fadd}}</span></div>
                <div class="it"><span>案发时间：</span><span style="color:#999">{{del.fa_time}}</span></div>
                <div class="it"><span>受案时间：</span><span style="color:#999">{{del.sa_time}}</span></div>
                <div class="it"><span>受案单位：</span><span style="color:#999">{{del.sa_org_name}}</span></div>
                <div class="it" v-if="del.case_type_name == '刑事'"><span>立案时间：</span><span style="color:#999">{{del.la_time}}</span></div>
                <div class="it" v-else><span>调解时间：</span><span style="color:#999">{{del.la_time}}</span></div>
                <div class="it" v-if="del.case_type_name == '刑事'"><span>移送起诉时间：</span><span style="color:#999">{{del.ysqs_time}}</span></div>
                <div class="it" v-else><span>处罚时间：</span><span style="color:#999">{{del.ysqs_time}}</span></div>
                <div class="it"><span>结案时间：</span><span style="color:#999">{{del.ja_time}}</span></div>      
                <div class="it"><span>主办单位：</span><span style="color:#999">{{del.organiza_org_name}}</span></div>
                <div class="it"><span>主办人：</span><span style="color:#999">{{del.organiza_user_name}}</span></div>
                <div class="it"><span>协办单位：</span><span style="color:#999">{{del.join_org_name}}</span></div>
                <div class="it"><span>协办人：</span><span style="color:#999">{{del.join_user_name}}</span></div>
                <div class="it"><span>拆分情况：</span><span style="color:#999">{{del.cfqk}}</span></div>
                <div class="it"><span>暂缓案情原因：</span><span style="color:#999">{{del.zhlayy}}</span></div>
            </div>
            <div class="desc"><span>简要案情：</span><span style="color:#999">{{del.case_desc}}</span></div>
               <div class="wrap">
          <div class="title">案件办理流程</div>
        <div class="titleup">
            <div class='toleft' @click="select(-5)"><i class="el-icon-arrow-left"></i></div>           
            <el-link :underline="false" v-for="(item,i) in lists" :key="i" @click="add(i)" >{{item.flow_name}}&nbsp; <i class="el-icon-arrow-right"  v-if=" i+1 != lists.length"></i>&nbsp;</el-link>
            <div class="toright" @click="select(5)"><i class="el-icon-arrow-right"></i></div>         
        </div>
              <transition name="fade">
            <div class="d" v-show="this.show" >       
                 <div  v-for="(item,i) in lists.slice(count,count+5)" :key="item.case_flow_id" class="itembox">
                       <div class="item" v-if="i > 0 && i+1 != lists.slice(count,count+5).length && lists.slice(count,count+5).length !=1"></div>
                        <div class="fir" v-if="i <= 0"></div>
                        <div class="firs" v-if=" i+1 == lists.slice(count,count+5).length && lists.slice(count,count+5).length != 0"></div>
                        <div  class="items" @click="toitem(item.flow_code)">{{item.flow_name}}</div>
                        <div class='deal'>
                            <div class="people">处理人：<span></span></div>
                            <div class="time"><div style="float:left">处理时间：</div><span class="ts">2020.05.20 13:34</span></div>
                        </div>
                </div>         
            </div>
          </transition>    
     
    </div>
        </el-tab-pane>
        <el-tab-pane label="涉案人员信息" name="second">
            <div class="things">
                <div class="jcbox">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">                        
                        </el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                    </el-table>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="涉案财务" name="third" style="padding-bottom:50px">
             <div class="jcbox">
                 <el-table :data="money" border style="width:100%" >
                    <el-table-column type="index" width="50" align="center"></el-table-column>
                    <el-table-column prop="case_police_nm" label="案件编号"  align="center"></el-table-column>
                    <el-table-column prop="police_wp_num" label="财物编号"  align="center"></el-table-column>
                    <el-table-column prop="exhibit_name" label="财物名"  align="center"></el-table-column>
                    <el-table-column prop="exhibit_quantity" label="数量"  width='80px' align="center"></el-table-column>
                    <el-table-column prop="exhibit_danwei" label="单位" width='80px' align="center"></el-table-column>
                    <el-table-column prop="exhibit_desc" label="描述"  align="center"></el-table-column>
                    <el-table-column prop="exhibit_lrsj" label="录入时间" width='180px' align="center"></el-table-column>
                </el-table>
             </div>
        </el-tab-pane>
        <el-tab-pane label="卷宗" name="fourth">
            <div class="things">
                <div class="jcbox">
                    <el-table :data="tableData" border style="width: 100%" stripe :row-style="{height:'100px'}" :cell-style="{padding:'2px'}">
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">                        
                        </el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                    </el-table>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>

</div>

</template>
<script>
import {cassework,money} from '@/api/table'
  export default {
     data () {
            return {
                count: 0,
                lists:[],
                del:0,
                show:true, 
                money:[],
                activeName: 'first',
                lok:0,    
            }
        },
        methods: {
             handleClick(tab) {
                    console.log(tab.name );
                    if(tab.name == 'second'){
                        
                    }else if(tab.name == 'third'){
                            this.getmoney()
                    }else if(tab.name =='fourth'){

                    }
                },
            getmoney(){ 
                money(this.del.case_police_nm).then(res=>{
                    this.money = res.data
                    console.log(this.money)
                })
            },
            toitem(flow_code){
                this.$router.push({ name: 'item', query: {jjdbh:this.del.jq_bh,code:flow_code }})
              
            },
            select (num) {
                this.lok += num  
                if(this.lok < 0){
                    this.lok = 0
                }
                if(this.lok > this.lists.length){
                     this.lok = this.lists.length
                }
                this.show = false
                var that =  this
                console.log(this.lok)
                setTimeout(function(){      
                         if(that.lok<5){
                            that.count = 0;
                        }else if(5<=that.lok && that.lok<10){
                            that.count = 5;
                        }else if(10<=  that.lok &&   that.lok<15){
                            that.count = 10;
                        }else if(15<=  that.lok &&   that.lok<20){
                            that.count = 15;
                        }else if(20<=  that.lok &&   that.lok<25){
                            that.count = 20;
                        }else if(25<=  that.lok &&   that.lok<30){
                            that.count = 25;
                        }else if(30<=  that.lok &&   that.lok<35){
                            that.count = 30;
                        }else if(35<=  that.lok &&   that.lok<40){
                            that.count = 35;
                        }else if(40<=  that.lok &&   that.lok<45){
                            that.count = 40;
                        }else if(45<=  that.lok &&   that.lok<50){
                            that.count = 45;
                        }else if(50<=  that.lok &&   that.lok<55){
                            that.count = 50;
                        }
                         that.show = true
                }, 100);
            
                     
            },
            add (i) {
                this.show = false
                var that =  this
                setTimeout(function(){      
                         if(i<5){
                            that.count = 0;
                            that.lok = 0
                        }else if(5<=i && i<10){
                            that.count = 5;
                            that.lok = 5
                        }else if(10<=i && i<15){
                            that.count = 10;
                            that.lok = 10
                        }else if(15<=i && i<20){
                            that.count = 15;
                            that.lok = 15
                        }else if(20<=i && i<25){
                            that.count = 20;
                            that.lok = 20
                        }else if(25<=i && i<30){
                            that.count = 25;
                            that.lok = 25
                        }else if(30<=i && i<35){
                            that.count = 30;
                            that.lok = 30
                        }else if(35<=i && i<40){
                            that.count = 35;
                            that.lok = 35
                        }else if(40<=i && i<45){
                            that.count = 40;
                            that.lok = 40
                        }else if(45<=i && i<50){
                            that.count = 45;
                            that.lok = 45
                        }else if(50<=i && i<55){
                            that.count = 50;
                            that.lok = 50
                        }
                         that.show = true
                }, 100);
            
                     
            },
            casedetail(){
            let id = this.$route.query.id
            cassework(id).then(res=>{
              console.log(res)
              this.lists = res.data
            })

          }
        },
        created(){
            this.casedetail()
            this.del = JSON.parse(this.$route.query.row);
            console.log(this.del)
        }
  }

</script>

<style scoped lang='scss'>
#detailbox{
      width:96%;
      overflow: hidden;
      border-radius: 30px;
      background: #fff;
      margin:0 auto;
}
    .things{
        width:100%;
        // height:250px;
        margin:0 auto;
       padding-top:30px;
        background:#fff;
        overflow: hidden;
        // margin-bottom:50px;
    }
    
    .d {
            width:100%;
            height: 300px;
            display:flex;
            background:#fff;
        }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
        }
        .wrap {
            position: relative;
            width: 100%;
            height: 500px;
            padding-bottom:60px;
            background:#fff;
            border-top:2px solid rgb(245,245,245);
            padding-top:20px;
            margin-top:30px;

        }
    .container{
            height: 600px;
            margin:0 auto;
            margin-top:200px;
        }
        .dot{
            border:2px solid #007Aff;
            width: 50px;
            height: 50px;
            border-radius:50%;
            line-height: 50px;
            text-align: center;
            background: white;
            margin: auto;
            margin-bottom: -4px;
            margin-top:30px;
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
            // background:pink;
            margin-bottom:10px;
            padding-left:5%;
        }
        .itembox{
            width: 20%;
            // height:100px;
            position: relative;
            overflow: hidden;
      
      
        }
        .item{
            width:100%;
            border-bottom:2px solid rgb(81,93,191);
             position: relative;
              top:40px;
              z-index: 20;           
        }
        .fir{
            width:38%;
            border-bottom:2px solid rgb(81,93,191);
            position: absolute;
            right:0;
            top:40px;
        }
        .firs{
            width:38%;
            border-bottom:2px solid rgb(81,93,191);
            position: absolute;
           left:0;
            top:40px;
        }
        .items{
            width:80px;
            height:80px;
            border-radius:50%;
            background:rgb(81,93,191);
            line-height: 80px;
            text-align: center;
            color: #fff;
            margin:0 auto;
              position: relative;
             z-index: 200;
             cursor: pointer;
        }
        .deal{
            width:90%;
            height:140px;
            margin:0 auto;
            margin-top:50px;
            background:rgb(242,242,242);
            border-radius: 30px;
            padding-left:30px;
            // line-height: 60px;
            color: rgb(81,93,191);
            overflow: hidden;
        }
        .people{
            margin-top:10%;
            height:30px;
        }
        .time .ts{
            display: inline-block;
            float:left;
        }
        .title{
            width:100;
            margin:0 auto;
            text-align: center;
            font-size:30px;
        }
        .titleup{
            width:100%;
            height:100px;
            font-size: 20px;
            line-height: 120px;
            background: #fff;
            color: #007Aff;
            margin:0 auto;
            display:flex;
            justify-content:center;
            // position: relative;
        }
        .titleup a {
            font-size:15px;
            color:rgb(81,93,191)
        }
        .toleft{
            position:absolute;
            width:25px;
            height:120px;
            color:#fff;
            background:#999;
            text-align: center;
            line-height:120px;
            top:100px;
            left:10px;
           opacity: 0.3;
            z-index: 9999;
            cursor: pointer;
        }
        .toright{
            position:absolute;
            width:25px;
            height:120px;
            color:#fff;
            background:#999;
            text-align: center;
            line-height:120px;
            right:10px;
            top:100px;
            opacity: 0.3;
            z-index: 9999;
            cursor: pointer;
        }
        .desc{
            background:#fff ;
            // float:left; 
            width:100% ;
            min-height:30px;
            margin-bottom:20px;
            // height:30px;
            // overflow: hidden;
            // text-overflow:ellipsis;
            // white-space: nowrap;
            padding-left:5%;
        }
        /deep/ .el-tabs__nav-wrap {
            overflow: hidden;
            margin-bottom: -1px;
            margin-left: 80px;
            position: relative;
            margin-top:20px;
           
        }
       /deep/ .el-tabs__item{
            font-size: 16px;
        }
        .jcbox{
            width:90%;
            margin:0 auto;
            margin-bottom:20px;
        }
</style>



