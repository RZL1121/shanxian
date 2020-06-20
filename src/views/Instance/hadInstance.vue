<template>
    <el-row>
  <!-- <div class="search">
      <div class="serach-t">
       <div class="serach-t_a">
          <el-row :gutter="50">
            <el-col :span="6"><div class="grid-content bg-purple"><span>部门名称</span><el-input v-model="name" placeholder="请输入" style="width:50%"></el-input> </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>创立人</span><el-select v-model="sex" placeholder="请选择" style="width:60%"><el-option v-for="item in options" :key="item.case_type_name" :label="item.label" :value="item.case_type_name"></el-option></el-select></div></el-col>
           <el-col :span="12"><el-button plain class="tosearch searbtn shortbtn" @click="searchnow">查询</el-button></el-col> 
          </el-row>
       </div>
      </div>
  </div> -->
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
                  prop="jq_bh"
                  label="警情编号"
                  align="center"
                  width="270">
                </el-table-column>
                <el-table-column
                  prop="bj_sj"
                  label="报警时间"
                  align="center"
                   width="180">
                </el-table-column>
                <el-table-column
                  prop="bjrxm"
                  label="报警人"
                  width="180"
                  align="center">
                </el-table-column>
                 <el-table-column
                  prop="jjdw"
                  label="处警单位"
                  align="center">
                </el-table-column>
                 <el-table-column
                  prop="mj_name"
                  label="处警人"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="dj_time"
                  label="登记时间"
                  align="center"
                  width="180">
                </el-table-column>
                 <el-table-column
                  prop="zqzt"
                  label="分流结果"
                  align="center">
                </el-table-column>
                  <el-table-column
                  prop="mj_yj"
                  label="警情状态"
                  align="center">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="140"
                  align="center">
                        <template slot-scope="scope">
                    <el-button type="primary" round size="medium" class="detail" @click="todetail(scope.row.jq_bh)">详情</el-button>
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
  <!-- <el-dialog title="新增用户信息" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="26%">
        <Adduser></Adduser>
  </el-dialog> -->
</el-row>
</template>
<script>
import {JQ} from '@/api/table'
import Pagination from '@/components/Pagination'
// import Adduser from './adduser'
export default {
     components:{
         Pagination,
        //  Adduser
      },
      created(){
        this.searchnow()
      },
      data(){
          return{      
               dialogTableVisible: false,   //表单提交
               name:'',//姓名
                   options: [{
                   sex: '男',
                    label: '男'
                    }, {
                    sex: '女',
                    label: '女'
                    }],
               sex:'',//性别
               pageNum:1,
               pageSize:10,
               total:20,//信息总数
               tableData: [],
               zqzt:'已分流',
          }
      },
      methods:{
             todetail(id){
              this.$router.push({
                  name: 'haddetails',
                  query: {
                    jjdbh: id,
                  }
                })
            },
          searchnow(){
              JQ(this.pageNum,this.pageSize,this.zqzt).then(res=>{
                   this.tableData = res.data.list
                   this.total = res.data.total
                   console.log('敬请列表')
                   console.log(res)
              })
          },
          addUser(){
          this.dialogTableVisible=true;//默认页面不显示为false,点击按钮将这个属性变成true
      }
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
     margin-left:20px;
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
    margin-left:10%;
    margin-right:10%;
  }
  .searbtn{
    width:40%;
    border-radius: 10px;
    font-size: 18px;
    display: inline-block;
  }
  .shortbtn{
    width:20%;
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
  //弹出层
  // .dialog{
  //   height:600px;
  //   border-radius:20px;
  // }
</style>


