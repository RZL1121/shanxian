<template>
<el-row>
  <div class="search">
      <div class="serach-t">
       <div class="serach-t_a">
          <el-row :gutter="30">
            <el-col :span="6"><div class="grid-content bg-purple"><span>案件编号:</span><el-input v-model="case_id" placeholder="请输入"></el-input> </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>案件名称:</span><el-input v-model="case_name" placeholder="请输入"></el-input></div></el-col>
            <!-- <el-col :span="6"><div class="grid-content bg-purple"><span>案件类型:</span>&nbsp;<el-select v-model="case_type_name" placeholder="请选择" style="width:60%"><el-option v-for="item in options" :key="item.case_type_name" :label="item.label" :value="item.case_type_name"></el-option></el-select></div></el-col> -->
            <el-col :span="6"><div class="grid-content bg-purple"><span>案件类型:</span><el-input v-model="case_type_name" placeholder="请输入"></el-input></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>案件状态:</span><el-input v-model="case_status" placeholder="请输入"></el-input></div></el-col>
          </el-row>
       </div>
       <div class="serach-t_a">
          <el-row :gutter="30">
            <el-col :span="6"><div class="grid-content bg-purple"><span>受理日期:</span><el-input v-model="sa_time" placeholder="请输入"></el-input></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>主办人:</span><el-input v-model="organiza_user_name" placeholder="请输入" class="short"></el-input></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>主办单位:</span><el-input v-model="organiza_org_name" placeholder="请输入"></el-input></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>嫌疑人:</span><el-input v-model="xyr_name" placeholder="请输入" class="short"></el-input></div></el-col>
          </el-row>
       </div>     
      </div>
      <div class="serach-f">
        <el-button plain class="tosearch searbtn" @click="searchnow">查询</el-button>
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
                  label="序号"
                  width="50"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="case_police_nm"
                  label="案件编号"
                  width="220px"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="case_name"
                  label="案件名称"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="xyr_name"
                  label="嫌疑人"
                  align="center">
                </el-table-column>
                 <el-table-column
                  prop="organiza_org_name"
                  label="主办单位"
                   width="300px"
                  align="center">
                </el-table-column>
                  <el-table-column
                  prop="organiza_user_name"
                  label="主办人"
                  width='120px'
                  align="center">
                  
                </el-table-column>
                  <el-table-column
                  prop="sa_time"
                  label="受理时间"
                  width='160px'
                  align="center">
                </el-table-column>
                <el-table-column label="状态" align="center">
                    <el-table-column
                      prop="province"
                      label="案件状态"
                      align="center">
                                 <template slot-scope="scope">
                    <el-button type="primary" round size="medium" class="detail" @click="todetail(scope.row.case_id,scope.row)">详情</el-button>
                         </template>
                    </el-table-column>
                    <el-table-column
                      prop="city"
                      label="预警状态"
                      align="center">
                    </el-table-column>
                </el-table-column>
                 <!-- <el-table-column
                  label="操作"
                  align="center">
                        <template slot-scope="scope">
                    <el-button type="primary" round size="medium" class="detail" @click="todetail(scope.row.case_id,scope.row)">详情</el-button>
                         </template>
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

<style lang='scss' scoped>
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
    /* margin-left:0 !important;
    margin-right:0 !important; */
    /* height:500px; */
    overflow: hidden;
  }
  .search{
    width:100%;
    height:120px;
    /* background:	WhiteSmoke; */
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .table{
    width:98%;
    margin:0 auto;
    margin-top:20px;
  }
  .serach-t{
    width:80%;
    height:100%;
    display: inline-block;
  }
  .serach-f{
     width:10%;
     height:100%;
     /* display: inline-block; */
     float: right;
     margin-right:7%;
     line-height: 120px;
  }
  .el-input{
     width:60%;
     margin-left:2%;
  }
  .short{
    margin-left:8%;
  }
  .el-input__inner{
    border-radius: 10px;
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
  }
  .detail{
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
</style>

<script>
import {casseList} from '@/api/table'
import Pagination from '@/components/Pagination'
  export default {
      components:{
         Pagination
      },
    data() {
      return {
        case_id:'',//案件编号
         options: [{
          case_type_name: '案件类型一',
          label: '案件类型一'
        }, {
          case_type_name: '案件类型二',
          label: '案件类型二'
        }, {
          case_type_name: '案件类型五',
          label: '案件类型五'
        }],
       case_type_name: '', //案件类型
       case_name:'',//案件名称
       case_status:'',//案件状态
       sa_time:'',//受理日期
       organiza_user_name:'',//承办人
       organiza_org_name:'',//主办单位
       xyr_name:'',//嫌疑人
       pageNum:1,
       pageSize:10,
       total:0,//案件总数
       tableData: [],//
      }
    },
    methods:{
      detail(){
        this.$router.push('/detail')
      },
      //跳转详情页面
      todetail(id,row){
      this.$router.push({
          name: 'detail',
          query: {
            id: id,
            row:JSON.stringify(row)
          }
        })
    },
      searchnow(){
        let  pageNum = this. pageNum
        let  pageSize = this.pageSize
        let case_id = this.case_id
        let case_name = this.case_name
        let case_type_name = this.case_type_name
        let case_status = this.case_status
        let sa_time = this.sa_time
        let organiza_user_name = this.organiza_user_name
        let organiza_org_name = this.organiza_org_name
        let xyr_name = this.xyr_name
             if(case_id||case_name||case_type_name||case_status||sa_time||organiza_user_name||organiza_org_name||xyr_name){
                let  pageNum = 1
                casseList( pageNum,pageSize,case_id,case_name,case_type_name,case_status,sa_time,organiza_user_name,organiza_org_name,xyr_name ).then(res=>{
                      this.total = res.data.total
                      this.tableData = res.data.list
                })  
             }else{
                casseList( pageNum,pageSize,case_id,case_name,case_type_name,case_status,sa_time,organiza_user_name,organiza_org_name,xyr_name ).then(res=>{
                      this.total = res.data.total
                      this.tableData = res.data.list
                })
             }
      },
    },
    created(){
      this.searchnow()
    }
  }
</script>



