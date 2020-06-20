<template>
<div>
  <el-row>
      <div class="search">
          <div class="serach-t">
          <div class="serach-t_a">
              <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple" style="margin-left:5%"><span>预警类型名称</span><el-input placeholder="请输入内容" v-model="warn_type_name" clearable style='width:40%'></el-input></div></el-col>
                <!-- <el-col :span="8"><div class="grid-content bg-purple" style="margin-left:50px"><span>时间</span> <el-date-picker v-model="date" type="date" placeholder="请选择" style="width:70%"></el-date-picker></div></el-col> -->
                <!-- <el-col :span="6"><div class="grid-content bg-purple"><span>预警类型</span><el-select v-model="type" placeholder="请选择" style="width:50%"><el-option v-for="item in options" :key="item.type" :label="item.label" :value="item.type"></el-option></el-select></div></el-col> -->
                <el-col :span="10"><el-button plain class="tosearch searbtn" @click="searchnow" style="width:25%">查询</el-button><el-button plain class="tosearch searbtn"  style="width:38%" @click="addprewarning">新增预警规则</el-button></el-col>
              </el-row>
          </div>
          </div>
      </div>
      <div class="table">
          <div class="grid-content bg-purple-dark">
                    <el-table
                    :data="tableData"
                    style="width: 100%"
                    border
                    stripe
                    :row-style="{height:'10px'}"
                    :cell-style="{padding:'2px'}"
                  >
                    <el-table-column
                      type="index"
                      width="50"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="warn_type_name"
                      label="预警类型"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="warn_type_near_time"
                      label="预警时间"
                          width="80px"
                      align="center">
                           <template slot-scope="scope">
                            {{scope.row.warn_type_near_time}}
                            <span v-if="scope.row.warn_type_near_unit== 'hour' ">小时</span>
                            <span v-if="scope.row.warn_type_near_unit== 'day' ">天</span>
                            <span v-if="scope.row.warn_type_near_unit== 'week' ">周</span>
                            <span v-if="scope.row.warn_type_near_unit== 'month' ">月</span>
                        </template>
                    </el-table-column>
                       <el-table-column
                      prop="warn_type_expire_time"
                      label="超时告警时间"
                          width="180px"
                      align="center">
                           <template slot-scope="scope">
                            {{scope.row.warn_type_expire_time}}
                            <span v-if="scope.row.warn_type_near_unit== 'hour' ">小时</span>
                            <span v-if="scope.row.warn_type_near_unit== 'day' ">天</span>
                            <span v-if="scope.row.warn_type_near_unit== 'week' ">周</span>
                            <span v-if="scope.row.warn_type_near_unit== 'month' ">月</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                      prop="warn_type_code"
                      label="告警类型编码"
                      width="180"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      prop="warn_type_desc"
                      label="预警条件"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      align="center">
                          <template slot-scope="scope">
                            <el-button type="primary" round size="medium" class="look" @click="updateprewarning(scope.row.warn_type_id,scope.row.warn_type_name,scope.row.warn_type_code,scope.row.warn_type_near_time,scope.row.warn_type_near_unit,scope.row.warn_type_desc,scope.row.warn_type_sys,scope.row.warn_type_expire_time,scope.row.is_alive)">修改</el-button>
                            <el-button type="primary" round size="medium" class="look" @click="deletes(scope.row.warn_type_id,scope.$index,scope.row)">删除</el-button>
                          </template>
                    </el-table-column>
                  </el-table>
                    <pagination
                      v-show="total>0"
                      :total="total"
                      :page.sync="pageNum"
                      :limit.sync="pageSize"
                      @pagination="searchnow"
                    >
                    </pagination>
          </div>
      </div>
  </el-row>
  <el-dialog title="预警规则修改" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="480px" >
        <Updateprewarning :id='id' :name='name' :code='code' :time='time' :unit='unit' :desc='desc' :sys='sys' :expire_time='expire_time' :alive="alive" v-on:update="receive"></Updateprewarning>
  </el-dialog>
  <el-dialog title="新增预警规则" :visible.sync="dialogTableVisibles" center :append-to-body='true' :lock-scroll="false" width="480px" >
        <Addprewarning :pageNum='pageNum' :pageSize='pageSize' v-on:updates="receives"></Addprewarning>
  </el-dialog>
</div>
</template>
<script>
import {prewarningList,dellprewarning} from '@/api/table'
import Pagination from '@/components/Pagination'
import Updateprewarning from './updateprewarning'
import Addprewarning from './addprewarning'
export default {
     components:{
         Pagination,
         Updateprewarning,
         Addprewarning
      },
      data(){
          return{ 
            //条件查询
            warn_type_name:'',     
               date:'', //日期
                   options: [{
                    type: '类型一',
                    label: '类型一'
                    }, {
                    type: '类型二',
                    label: '类型二'
                    }],
               type:'',//告警类型
               pageNum:1,
               pageSize:10,
               total:0,//信息总数
               tableData: [],
               dialogTableVisible: false,   //修改提交
               dialogTableVisibles:false,  // 新增提交
               id:0,
               name:'',
               code:'',
               time:'',
               desc:'',
               unit:'',
               sys:'',
               expire_time:'',
               alive:''
          }
      },
      created(){
        this.searchnow()
       },
      methods:{
              receives: function (val) {
              
              this.dialogTableVisibles = val
                  this.searchnow()
            },
               receive: function (val) {
              
              this.dialogTableVisible = val
                  this.searchnow()
            },
          addprewarning(){
             this.dialogTableVisibles=true;
          },
          updateprewarning(id,name,code,time,unit,desc,sys,expire_time,alive){
          this.dialogTableVisible=true;//默认页面不显示为false,点击按钮将这个属性变成true
          this.id = id
          this.name = name
          this.code = code
          this.time = time
          this.unit = unit
          this.desc = desc
          this.sys = sys
          this.expire_time = expire_time
          this.alive = alive
          },
          deletes(warn_type_id,index) {
            this.$confirm('此操作将删除该信息, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
               dellprewarning(warn_type_id).then(res=>{
                    if(res.code == 0){
                       this.tableData.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                      });
                      this.searchnow()
                    }
               })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
          },
          searchnow(){
        
            let pageSize = this.pageSize
            let warn_type_name = this.warn_type_name
            if(warn_type_name){
                   let pageNum = 1
                  prewarningList(pageNum,pageSize,warn_type_name).then(res=>{
                  this.total = res.data.total
                  this.tableData = res.data.list
                  console.log(res.data)
                })
            }else{
                  let pageNum = this.pageNum
                prewarningList(pageNum,pageSize,warn_type_name).then(res=>{
                  this.total = res.data.total
                  this.tableData = res.data.list
                  console.log(res.data)
                })
            }
          },
        
      }
}
</script>
<style scoped lang='scss'>
.tablebox{
  width:100%;
  height:100%;
  background:#fff;
  border-radius: 10px;
}
  .el-table .warning-row {
    background: rgb(242, 246, 250);
  }

  .el-table .success-row {
    background: #fff;
  }
  .el-row {
    margin-bottom: 20px;
    padding-top:10px;
    background: #fff;
    border-radius: 10px;
    width: 98%;
    margin:0 auto;
    overflow: hidden;
    padding-bottom:50px;
  }
  .search{
    width:100%;
    height:50px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .table{
    width:98%;
    margin:0 auto;
    margin-top:20px;
  }
  .serach-t{
    width:90%;
    height:100%;
    display: inline-block;
  }
  .serach-f{
     width:200px;
     height:100%;
     float: right;
     margin-right:7%;
     line-height: 50px;
  }
  .el-input{
     width:150px;
     margin-left:2%;
  }
  .el-select{
      margin-left:20px
  }
  .short{
    margin-left:35px;
  }
  .searchname{
    display: inline-block;
    margin-left:30px;
    margin-right:30px;
    line-height: 80px;
  }
  .el-button{
    background:rgb(81, 93, 191);
    color:white;
  }
  .tosearch{
    margin-left:5%;
    margin-right:10%;
  }
  .searbtn{
    border-radius: 10px;
    font-size: 18px;
    display: inline-block;
  }
  .look{
    width:100px;
  }
  .cell{max-height: 38px !important;overflow: auto !important;}
  .serach-t_a{
    height:50px;
  }
  .serach-t_a .el-row{
    height:50px!important;
    margin-left:5px!important;
  }
  //弹出层
  .dialog{
    height:600px;
    border-radius:20px;
  }
</style>





