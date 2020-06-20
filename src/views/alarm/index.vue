<template>
    <el-row>
  <div class="search">
      <div class="serach-t">
       <div class="serach-t_a">
          <el-row :gutter="30">
             <el-col :span="5"><div class="grid-content bg-purple"><span>案件编号:</span><el-input placeholder="请输入内容" v-model="case_police_nm" clearable style="width:47%"></el-input></div></el-col>
             <el-col :span="5"><div class="grid-content bg-purple"><span>案件名称：</span><el-input placeholder="请输入内容" v-model="case_name" clearable style="width:47%"></el-input></div></el-col>
             <el-col :span="5"><div class="grid-content bg-purple"><span>告警类型：</span><el-select v-model="warn_type_id" placeholder="请选择" style="width:47%"><el-option v-for="item in  optionlist" :key="item.warn_type_id" :label="item.warn_type_name" :value="item.warn_type_id"></el-option></el-select></div></el-col>
             <el-col :span="5"><div class="grid-content bg-purple"><span>是否处理：</span><el-select v-model="is_deal" placeholder="请选择" style="width:47%"><el-option v-for="item in options" :key="item.is_deal" :label="item.label" :value="item.is_deal"></el-option></el-select></div></el-col>
             <el-col :span="4"><el-button plain class="tosearch searbtn" @click="searchnow">查询</el-button></el-col>
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
                  prop="warn_title"
                  label="告警类型"
                  width="180"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="case_police_nm"
                  label="案件编号"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="case_name"
                  label="案件名称"
                  align="center">
                </el-table-column>
                 <el-table-column
                  prop="organiza_user_name"
                  label="主办人"
                  align="center"
                  width='200px'>
                </el-table-column>
                <el-table-column
                  prop="organiza_org_name"
                  label="主办单位"
                  align="center"
                  width='280px'>
                </el-table-column>
                <el-table-column
                  prop="warn_time"
                  label="告警时间"
                  align="center"
                  width='180px'>
                </el-table-column>
                  <el-table-column
                  prop="is_deal"
                  label="是否处理"
                  align="center"
                  width='80px'>
                        <template slot-scope="scope">
                            <span v-if="scope.row.is_deal== '0' ">未处理</span>
                            <span v-if="scope.row.is_deal== '1' ">已处理</span>
                        </template>
                </el-table-column>
                 <!-- <el-table-column
                  label="操作"
                  align="center">
                  <el-button type="primary" round size="medium" class="look" @click="tolook(1123)">查看</el-button>
                </el-table-column> -->
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
</template>
<script>
import Pagination from '@/components/Pagination'
import {gettips,option} from '@/api/table'
export default {
     components:{
         Pagination,
      },
      data(){
          return{      
               date:'', //日期
                   options: [{
                    is_deal: '0',
                    label: '未处理'
                    }, {
                    is_deal: '1',
                    label: '已处理'
                    }],
               type:'',//告警类型
               pageNum:1,
               pageSize:10,
               total:20,//信息总数
               case_police_nm:'',
               case_name:'',
               tableData: [],
               is_deal:'',
               warn_type_id:'',
               warn_type_kind:'notice',
                optionlist: [],
              }
      },
      methods:{
          searchnow(){
                  if(this.case_police_nm||this.case_name||this.warn_type_id||this.is_deal){
                       this.pageNum = 1
                        gettips(this.pageNum,this.pageSize,this.case_police_nm,this.case_name,this.warn_type_id,this.is_deal,this.warn_type_kind).then(res=>{
                              this.tableData = res.data.list
                              this.total = res.data.total
                       })
                  }else{
                       gettips(this.pageNum,this.pageSize,this.case_police_nm,this.case_name,this.warn_type_id,this.is_deal,this.warn_type_kind).then(res=>{
                        this.tableData = res.data.list
                        this.total = res.data.total                        
                        })
                  }
         
          },
          Options(){
            option().then(res=>{
              this.optionlist = res.data
              console.log(res)
            })
          },
          tolook(id){
            this.$router.push({
                path: 'Tipsdel',
                query: {
                    id: id
                }
            })
          }
      },
      created(){
        this.searchnow()
        this.Options()
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
      margin-left:2%;
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
    margin-left:70px;
    margin-right:50px;
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





