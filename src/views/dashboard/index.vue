<template>
   <div class="dashboard-editor-container">
     <!-- 上半部分 -->
        <!-- <el-row :gutter="10"> -->
            <!-- <el-col :span="8">
              <div class="grid-content bg-purple">
                   <div class="imagebox">
                     <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="xx">
                          <span>告警数量</span>
                          <span>{{ggnums}}</span>
                   </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                    <div class="imagebox">
                         <img src="../../assets/two.png" alt="">
                    </div>
                    <div class="xx">
                          <span>近期提醒</span>
                          <span>10</span>
                    </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                    <div class="imagebox">
                       <img src="../../assets/first.png" alt="">
                    </div>
                   <div class="xx">
                          <span>姓名：{{userinfo.user_true_name}}</span>
                          <span v-if='userinfo.userOrg.length == 0'>部门：</span>
                          <span v-else>部门：{{userinfo.userOrg[0].org_name}}</span>
                          <span>手机号：{{userinfo.user_tel}}</span>
                   </div>
              </div>
            </el-col> -->
            <!-- <el-col :span="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
              </div>
            </el-col> -->
        <!-- </el-row> -->
        <div class="top">
          <!-- <div class="top_title">数据看板</div> -->
          <div class="top_item" :style="yujing">
            <div class="top_item_top">
              <div class="imagebox">
                     <img src="../../assets/yujingicon.png" alt="">
              </div>
              <div class="onep">预警数量<span class="onepright">{{notice_quantity.case_warn_notice}}</span></div>
            </div>
            <div class="top_item_bottom">
              <div class="top_iten_bt"><span class="onepleft">24</span><span class="onepright">未分流</span></div>
              <div class="fg"></div>
              <div class="top_iten_bt"><span class="onepleft">24</span><span class="onepright">未归档</span></div>
               <div class="fg"></div>
              <div class="top_iten_bt"><span class="onepleft">24</span><span class="onepright">未立案</span></div>
            </div>
          </div>
          <div class="top_item" :style="jinji">
            <div class="top_item_top">
              <div class="imagebox">
                     <img src="../../assets/jinjiicon.png" alt="">
              </div>
              <div class="onep">紧急催办<span class="onepright">{{cases_bl.case_total}}</span></div>
            </div>
            <div class="top_item_bottom">
              <div class="top_iten_bt"><span class="onepleft">{{cases_bl.case_no_end}}</span><span class="onepright">未分流</span></div>
                <span class="fg"></span>
              <div class="top_iten_bt"><span class="onepleft">{{cases_bl.case_end}}</span><span class="onepright">未办案</span></div>

           </div>
          </div>
          <div class="top_item" :style="gaojing">
            <div class="top_item_top">
              <div class="imagebox">
                     <img src="../../assets/gaojingicon.png" alt="">
              </div>
              <div class="onep">告警数量<span class="onepright">{{warn_quantity.case_warn_warn}}</span></div>
            </div>
            <div class="top_item_bottom">
              <div class="top_iten_bt"><span class="onepleft">24</span><span class="onepright">未分流</span></div>
                <div class="fg"></div>
              <div class="top_iten_bt"><span class="onepleft">24</span><span class="onepright">未归档</span></div>
               <div class="fg"></div>
              <div class="top_iten_bt"><span class="onepleft">24</span><span class="onepright">未立案</span></div>
            </div>
          </div>
          <div class="top_item" :style="anjian">
            <div class="top_item_top">
              <div class="imagebox">
                     <img src="../../assets/anjianicon.png" alt="">
              </div>
              <div class="onep">案件数量<span class="onepright">{{cases_quantity.case_total}}</span></div>
            </div>
            <div class="top_item_bottom">
              <div class="top_iten_bt"><span class="onepleft">{{cases_quantity.case_xz}}</span><span class="onepright">行政案件</span></div>
               <div class="fg"></div>
              <div class="top_iten_bt"><span class="onepleft">{{cases_quantity.case_xs}}</span><span class="onepright">刑事案件</span></div>
     
            </div>
          </div>
          <div class="top_item" :style="zhuangtai">
            <div class="top_item_top">
              <div class="imagebox">
                     <img src="../../assets/anjianzhuangtaiicon.png" alt="">
              </div>
              <div class="onep">案件状态<span class="onepright">{{cases_bl.case_total}}</span></div>
            </div>
            <div class="top_item_bottom">
              <div class="top_iten_bt"><span class="onepleft">{{cases_bl.case_no_end}}</span><span class="onepright">办理中</span></div>
                <span class="fg"></span>
              <div class="top_iten_bt"><span class="onepleft">{{cases_bl.case_end}}</span><span class="onepright">已办结</span></div>
    
            </div>
          </div>
        </div>
    <!-- 中间快速入口 -->
        <div class="bind">
          <div class="bind_title">快速入口</div>
          <div class="bind_item" @click="tothree('http://56.3.124.139/zfpt/zfpt/login?toShuntPage=false')">
             <div class="imgbox">
                <img src="../../assets/zhifabihuan.png" alt="">
             </div>
             <div class="title">执法闭环</div>
          </div>
          <div class="bind_item" @click="tothree('http://56.212.7.253/#/login')">
             <div class="imgbox">
                <img src="../../assets/sheancaiwu.png" alt="">
             </div>
             <div class="title" style="color:#eb6100">涉案财物管理</div>
          </div>
          <div class="bind_item">
             <div class="imgbox" @click="tothree('http://56.212.7.252/#/login')">
                <img src="../../assets/juanzongguanli.png" alt="">
             </div>
             <div class="title" style="color:#00cfb4">卷宗管理</div>
          </div>
          <div class="bind_item"  @click="tothree('http://56.212.65.182/inquest')">
             <div class="imgbox">
                <img src="../../assets/bananqu.png" alt="">
             </div>
             <div class="title"  style="color:#6b5af4">办案区管理</div>
          </div>
      
      
        </div>
    <!-- 下半部分 -->
              <div >
                 <div class="bottom_title">分析数据</div>
                 <el-link :underline="false" @click="tomoretu" class="lookmore">查看更多  >></el-link>
                 <div class="status">
                  <div class='succ'></div>告警
                  <div class="warn"></div>预警
                  <div class='end'></div>完成
                 </div>
              </div>

             
         
        <div class="bottom">
            <div id="zhutu" style="width:100%;height:100%" class="zhutu"></div>
        </div>
        <div class="quxianbox">
          <div class="leftqu">
               <div class="leftqutitle">一派出所数量统计</div>
               <div id="data-left" style="width:90%;height:180px" class="qut"></div>
          </div>
          <div class="rightqu">
              <div class="leftqutitle">二派出所数量统计</div>
              <div id="data-right" style="width:90%;height:180px" class="qut"></div>
          </div>
        </div>

  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import echarts from 'echarts'
import {ggnum,home,homezhu,homequ} from '@/api/table'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created(){
     
    this.gethome()
    // this.getggnum()
       const Userinfo = 'userinfo'
       this.userinfo =  JSON.parse(Cookies.get(Userinfo))
       console.log('这是user info')
       console.log(this.userinfo)
  },
  data(){
    return{
       zhutuname:'',
       zhutuwc:'',
       zhutuyj:'',
       zhutugj:'',
       qutime:'',
       qugj:'',
       quyj:'',
       activeName: 'first',
       userinfo:"",
       ggnums:0,
       notice_quantity:{},//预警
       cases_bl:{},//办理情况
       cases_quantity:{},//案件数量
       warn_quantity:{},//告警
        yujing: {
        backgroundImage: "url(" + require("../../assets/yujingbg.png") + ")",
        backgroundRepeat: "no-repeat",
        },
        gaojing: {
        backgroundImage: "url(" + require("../../assets/jinjibg.png") + ")",
        backgroundRepeat: "no-repeat",
        },
        jinji: {
        backgroundImage: "url(" + require("../../assets/gaojingbg.png") + ")",
        backgroundRepeat: "no-repeat",
        },
        anjian: {
        backgroundImage: "url(" + require("../../assets/anjianbg.png") + ")",
        backgroundRepeat: "no-repeat",
        },
        zhuangtai: {
        backgroundImage: "url(" + require("../../assets/anjianzhuangtai.png") + ")",
        backgroundRepeat: "no-repeat",
        },
    }
  },
   mounted(){
    // this.getEchart()
    // this.getzhe()
    // this.getzhu(this.zhutuname)
    // this.drawLeftLine()
    // this.drawRightLine()
},
  methods:{ 
            getzhutu(){
              homezhu().then(res=>{
                this.zhutuname = res.data.map(obj=>{
                      return obj.org_name
                })
                this.zhutuwc = res.data.map(obj=>{
                      return obj.deal_quantity
                })
                this.zhutuyj = res.data.map(objs=>{
                      return objs.notice_quantity
                })
                this.zhutugj = res.data.map(objd=>{
                      return objd.warn_quantity
                })
                console.log(this.zhutuname)
                console.log(this.zhutuwc)
                this.getzhu(this.zhutuname,this.zhutuwc,this.zhutuyj,this.zhutugj)
              })
            },
            getqutu(){
              homequ(org_code).then(res=>{
                this.qutime = res.data.map(obj=>{
                      return obj.MONTH
                })
                this.qugj = res.data.map(objs=>{
                      return objs.warn_quantity
                })
                this.quyj = res.data.map(objd=>{
                      return objd.notice_quantity
                })
                this.drawLeftLine(this.qutime,this.quyj,this.qugj)
                this.drawRightLine(this.qutime,this.quyj,this.qugj)
              })
            },
            gethome(){
              home().then(res=>{
                 console.log('所有数据')
                 console.log(res)
                 this.notice_quantity = res.data.notice_quantity
                 this.cases_bl = res.data.cases_bl
                 this.cases_quantity = res.data.cases_quantity
                 this.warn_quantity = res.data.warn_quantity
              })
            },
            // getggnum(){            
            //     ggnum().then(res=>{
            //       console.log(res)
            //       this.ggnums = res.data
            //     })
            //   },
           tothree(url){
             window.open(url,'_blank')
           },
           tomoretu(){
               this.$router.push({ name:'Moretu'  })
        
           },
            getEchart(){       
                  const  myChart = echarts.init(document.getElementById("chart-part1"));
                  const option = {
                                  tooltip: {
                                      trigger: 'item',
                                      formatter: '{a} <br/>{b}: {c} ({d}%)'
                                  },
                                  legend: {
                                      orient: 'vertical',
                                      left: 10,
                                      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                                  },
                                  series: [
                                      {
                                          name: '访问来源',
                                          type: 'pie',
                                          radius: ['50%', '70%'],
                                          avoidLabelOverlap: false,
                                          label: {
                                              show: false,
                                              position: 'center'
                                          },
                                          emphasis: {
                                              label: {
                                                  show: true,
                                                  fontSize: '30',
                                                  fontWeight: 'bold'
                                              }
                                          },
                                          labelLine: {
                                              show: false
                                          },
                                          data: [
                                              {value: 335, name: '直接访问'},
                                              {value: 310, name: '邮件营销'},
                                              {value: 234, name: '联盟广告'},
                                              {value: 135, name: '视频广告'},
                                              {value: 1548, name: '搜索引擎'}
                                          ]
                                      }
                                  ]
                              };
                     myChart.setOption(option);  //调用图
                    window.addEventListener("resize", function() {     //监听浏览器窗口大小自适应
                        myChart.resize();
                    });
           
            },
            getzhe(){
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                  
                                xAxis: [{
                                    type: 'category',
                                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                        axisLabel:{ 
                                                  interval:0,//横轴信息全部显示     
                                              },
                                }],
                                yAxis:[ {
                                    type: 'value',
                                    // offset:5 ,
                                    // axisLabel: { interval:0} 
                                }],
                                grid: {
                                    left: "5",
                                    containLabel: true
                                },
                                series: [{
                                    data: [120, 200, 150, 80, 70, 110, 130],
                                    type: 'bar',
                                    itemStyle: {
                                        color: 'skyblue'
                                    },
                                }]
                            };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                     window.addEventListener("resize", function() {     //监听浏览器窗口大小自适应
                        myChart.resize();
                    });
            },
            getzhu(name,wc,yj,gj){
                var myChart = echarts.init(document.getElementById('zhutu'));
                // 指定图表的配置项和数据
                var option = {
                        // backgroundColor: '#12cf96',
                              tooltip: {
                                  trigger: 'axis',
                                  axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                      type: 'line'        // 鼠标滑过阴影默认为直线，可选为：'line' | 'shadow'
                                  }
                              },
                             grid: {
                                  top: '10px',
                                  bottom:'20px',
                                  left:'80px',

                              },
                              xAxis: [
                                  {
                                      type: 'category',
                                      axisTick:{
                                          show:false,//不显示刻度线
                                      },
                                      fontSize:16,
                                      data: name,
                                      axisLabel:{ 
                                                  //interval:0,//横轴信息全部显示  
                                                    show: true,
                                                    interval: 0,
                                                    formatter: function (value) {
                                                      return (value.length > 6 ? (value.slice(0,6)+"...") : value )
                                                    },   
                                      },
                                       triggerEvent: true // 设置为true后，可触发事件。实现x轴文字过长，显示省略号，hover上去显示全部的功能
                                  }
                              ],
                              yAxis: [
                                  {
                                      type: 'value',
                                      axisTick:{
                                          show:false,//不显示刻度线
                                      },
                                  }
                                  
                              ],
                              series: [
                                    {
                                      name: '完成',
                                      type: 'bar',
                                      barWidth: 10,
                                      barGap:'0', //多个柱子之间距离
                                      // stack: '广告',
                                      data: wc,
                                      itemStyle:{
                                  normal:{color:'#866ff5'}
                                }
                                  },
                              
                                  {
                                      name: '预警',
                                      type: 'bar',
                                         barWidth: 10,
                                      // stack: '广告',
                                      data: yj,
                                      itemStyle:{
                                  normal:{color:'#40ebe5'}
                                }
                                  },
                                  {
                                      name: '告警',
                                      type: 'bar',
                                         barWidth: 10,
                                      // stack: '广告',
                                      data: gj,
                                        itemStyle:{
                                  normal:{color:'#f1a363'}
                                }
                                  },
                              


                              ]
                          };

                              // 使用刚指定的配置项和数据显示图表。
                              myChart.setOption(option);
                                  window.addEventListener("resize", function() {     //监听浏览器窗口大小自适应
                                      myChart.resize();
                                  });
                          },
              drawLeftLine(time,yj,gj){
                      let drawLine = echarts.init(document.getElementById('data-left'));
                      let option = null;
                      option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        color:['#ff9fb9','#7126D4'], //图标颜色
                        icon: "circle",        //图标形状
                        legend: {
                            x:'200px',
                            y:'10px',
                            data:['预警','告警'],
                            textStyle:{
                              fontSize: 14,//字体大小
                              color: 'blue'//字体颜色
                            },
              
                        },
                        grid: {
                            left: '0px',
                            bottom: '0px',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            name:'小时',
                            nameGap:'15',
                            show:true,
                            boundaryGap:false,
                            axisLabel:{
                              textStyle:{
                                color:'black'  //X轴颜色字体
                              }
                            },
                            axisTick:{
                                show:false, //不显示刻度线
                            },
                            splitArea : {
                              show : false,
                            },
                            splitLine : {
                              show :false,
                            },
                            axisLine:{
                              lineStyle:{
                                  color:'black', //x轴颜色
                                  width:0,
                              },
                              // symbol:['none','arrow']
                            },
                              data: time,
                        },
                        yAxis: {
                            type: 'value',
                            name:'数量',
                            show:true,
                            axisLabel:{
                              textStyle:{
                                color:'black'  //y轴字体颜色
                              }
                            },
                            axisTick:{
                                show:false,//不显示刻度线
                            },
                            splitArea : {
                              show : false, //是否要平行于x周阴影
                            },
                            splitLine : {
                              show :false,  //是否要平行于x周横线
                            },
                            axisLine:{
                              lineStyle:{
                                  color:'black', //y轴颜色
                                  width:0,
                              },
                              // symbol:['none','arrow']
                            },
                        },
                        series: [
                            {
                                name:'进车辆',
                                type: 'line',
                                smooth: true,
                                lineStyle:{
                                  normal:{
                                    color:'#ff9fb9',
                                    width:3
                                  }
                                },
                                   areaStyle: {    //曲线下样式 
                                      normal: {
                                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                              offset: 0,
                                              color: 'rgb(236,204,218)'
                                          }, {
                                              offset: 1,
                                              color: 'rgb(236,204,218)'
                                          }]),
                                      },
                                  },
                                data:yj,
                            },
                            {
                                name:'出车辆',
                                type:'line',
                                smooth: true,
                                lineStyle:{
                                  normal:{
                                    color:'#7126D4',
                                    width:3
                                  }
                                },
                                areaStyle: {
                                      normal: {
                                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                              offset: 0,
                                              // color: '#ff9fb9'
                                              color:'rgb(197,205,239)'
                                          }, {
                                              offset: 1,
                                              // color: '#7126D4'
                                              color:'rgb(197,205,239)'
                                          }]),
                                      },
                                  },
                                data:gj,
                            }
                        ]
                    };
                          if (option && typeof option === "object") {
                              drawLine.setOption(option);
                          }
                    },
             drawRightLine(time,yj,gj){
                      let drawLine = echarts.init(document.getElementById('data-right'));
                      let option = null;
                           option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        color:['#ff9fb9','#7126D4'], //图标颜色
                        icon: "circle",        //图标形状
                        legend: {
                            x:'200px',
                            y:'10px',
                            data:['预警','告警'],
                            textStyle:{
                              fontSize: 14,//字体大小
                              color: 'blue'//字体颜色
                            },
              
                        },
                        grid: {
                            left: '0px',
                            bottom: '0px',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            name:'小时',
                            nameGap:'15',
                            show:true,
                            boundaryGap:false,
                            axisLabel:{
                              textStyle:{
                                color:'black'  //X轴颜色字体
                              }
                            },
                            axisTick:{
                                show:false, //不显示刻度线
                            },
                            splitArea : {
                              show : false,
                            },
                            splitLine : {
                              show :false,
                            },
                            axisLine:{
                              lineStyle:{
                                  color:'black', //x轴颜色
                                  width:0,
                              },
                              // symbol:['none','arrow']
                            },
                              data: time,
                        },
                        yAxis: {
                            type: 'value',
                            name:'数量',
                            show:true,
                            axisLabel:{
                              textStyle:{
                                color:'black'  //y轴字体颜色
                              }
                            },
                            axisTick:{
                                show:false,//不显示刻度线
                            },
                            splitArea : {
                              show : false, //是否要平行于x周阴影
                            },
                            splitLine : {
                              show :false,  //是否要平行于x周横线
                            },
                            axisLine:{
                              lineStyle:{
                                  color:'black', //y轴颜色
                                  width:0,
                              },
                              // symbol:['none','arrow']
                            },
                        },
                        series: [
                            {
                                name:'进车辆',
                                type: 'line',
                                smooth: true,
                                lineStyle:{
                                  normal:{
                                    color:'#ff9fb9',
                                    width:3
                                  }
                                },
                                   areaStyle: {    //曲线下样式 
                                      normal: {
                                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                              offset: 0,
                                              color: 'rgb(236,204,218)'
                                          }, {
                                              offset: 1,
                                              color: 'rgb(236,204,218)'
                                          }]),
                                      },
                                  },
                                data:yj,
                            },
                            {
                                name:'出车辆',
                                type:'line',
                                smooth: true,
                                lineStyle:{
                                  normal:{
                                    color:'#7126D4',
                                    width:3
                                  }
                                },
                                areaStyle: {
                                      normal: {
                                          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                              offset: 0,
                                              // color: '#ff9fb9'
                                              color:'rgb(197,205,239)'
                                          }, {
                                              offset: 1,
                                              // color: '#7126D4'
                                              color:'rgb(197,205,239)'
                                          }]),
                                      },
                                  },
                                data:gj,
                            }
                        ]
                    };
                          if (option && typeof option === "object") {
                              drawLine.setOption(option);
                          }
                    },
            
              
    }
  
}
</script>

<style lang="scss" scoped>
.zhutu{
  background:rgb(230,241,241);
  margin:0 auto;
}
.top{
  width:100%;
  // min-width:1400px;
  height:130px;
    display: flex;
  margin-bottom:15px;
  .top_item{
    width:18%;
    // min-width: 240px;
    height:130px;
    margin-left:1%;
    margin-right:1%;
    float: left;
    overflow: hidden;
    cursor:pointer;
    border-radius: 10px;
    .top_item_top{
      height:50%;
      color: #fff;
      .imagebox{
        margin-top:10px;
        width:20%;
        height:80%;
        float:left;
        margin-left:7%;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .top_item_bottom{
      width:100%;
      height:30px;
      display: flex;
      justify-content: space-around;
      align-items:center;
      .top_iten_bt{
        display: flex;
        flex-direction: column;
          align-items:center;
      }
      .onepleft{
        font-size: 30px;
        color:#fff;
        font-family: 'SimHei'
      }
     
      .fg{
        width:1px;
        height:40%;
        border-left:1px solid #fff;
      }
      .onepright{
        font-size:18px;
         color:#fff;
      }
    }
    .onep{
        float:left;
        width:60%;
        margin-left:5%;
        height:80px;
        // font-weight:600;
        font-size: 20px;
        line-height:80px;
        display: flex;
        justify-content: space-between;
         .onepright{
        font-size: 21px;
      }
    }
  }
}
.bind{
  width:98%;
  background:rgb(210,225,240);
  margin:0 auto;
  margin-bottom:15px;
  overflow: hidden;
  border-radius: 10px;
  .bind_title{
    width:50%;
    font-size: 22px;
    margin-left:30px;
    border-left:3px solid rgb(73,99,200);
    padding-left:10px;
    line-height:20px;
    height:20px;
    color: rgb(73,99,200);
    margin-bottom:10px;
    margin-top:10px;
  }
  .bind_item{
    width:90px;
    height:90px;
    border-radius: 10px;
    margin-left:2%;
    background:#fff;
    float: left;
    margin-top:5px;
    margin-bottom:10px;
    cursor:pointer;
    font-size:13px;
    color:#0080ff;
    .imgbox{
      width:50%;
      height:60%;
      margin:0 auto;
      margin-top:10px;
      margin-bottom:6px;
      img{
        width:100%;
        height:100%;
      }
    }
    .title{
      width:100%;
      text-align: center;
    }
  }
}
.lookmore{
  width:200px;
  float:right;
}
.status{
  width:300px;
  font-size: 12px;
  float:right;
  margin-right:300px;
  margin-left:80px;
     display: flex;
    justify-content: space-between;
    align-self: center;
    line-height: 2;
  div{
    display: inline-block;
    text-align: center;
    width:26px;
    height:26px;
    border-radius: 5px;
  }
  .succ{
    background: #f1a363;
        cursor: pointer;
  }
  .warn{
    background:#40ebe5;
        cursor: pointer;
  }
  .end{
    background:#866ff5;
        cursor: pointer;
  }
}
.bottom{
  width:100%;
  height:200px;
  margin-top:40px;
  margin-bottom:10px;
}
.bottom_title{
    color: rgb(73,99,200);
    padding-left: 10px;
    border-left: 3px solid rgb(73,99,200);
    width: 300px;
    margin-left: 40px;
    font-size: 20px;
    float:left;
}
.quxianbox{
  width:100%;
  // min-width:1300px;
  height:210px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
 .qut{
   margin:0 auto;
 }
  .leftqu{
    width:45%;
    // min-width:600px;
    height:100%;
    // float:left;
    // margin-left:30px;
    background:#fff;
    box-shadow:5px 5px 10px gray;
  
    .leftqutitle{
      color: #515dfb;
      margin-left:30px;
      margin-top:10px;
    }
  }
  .rightqu{
    width:45%;
    // min-width:600px;
    
    height:100%;
    // float:left;
    background: #fff;
    margin-left:30px;
    box-shadow:5px 5px 10px gray;
    .leftqutitle{
      color: #515dfb;
      margin-left:10px;
      margin-top:10px;
    }
  }
}
.icon{
  width:130px;
  height:100px;
  margin:0 auto;

  margin-top:20px;
  margin-bottom:10px;
}
.dashboard-editor-container{
    padding: 5px 20px;
    background-color: rgb(236,236,236);
    position: relative;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height:150px;
    overflow: hidden;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.grid-contentb {
    border-radius: 4px;
    min-height: 36px;
    height:500px;
  }
  // .echar{
  //     min-height: 600px;
  // }
  .til{
    width:100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
  /deep/ .el-tabs__nav-wrap
.el-tabs__nav-scroll
.el-tabs__nav {
    width: 100%;
    margin-top:10px;
    display: flex;
    justify-content: space-around;

}
/deep/ .el-tabs__item{
      font-size: 20px;
}
.xx{
  min-width:200px;
  height:100%;
  // float:left;
  display: flex;
  margin-left:50%;
  flex-direction: column;
  justify-content: space-around;
  color: rgb(74,86,188);
  font-size:20px;
}
.quick{
  width:40%;
  margin-left:5%;
  margin-top:3%;
  margin-bottom:1%;
  // line-height:20px;
  padding-bottom:20px;
  display: flex;
  background: rgb(240,242,245);
  flex-direction: column-reverse;
  text-align: center;
  float:left;
   a{
     font-size: 20px;
   }
}
</style>
