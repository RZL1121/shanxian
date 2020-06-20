<template>
    <el-row>
  <div class="search">
      <div class="serach-t">
       <div class="serach-t_a">
          <el-row :gutter="50">
            <el-col :span="6"><div class="grid-content bg-purple"><span>部门名称：</span><el-input v-model="orzname" placeholder="请输入" style="width:50%"></el-input> </div></el-col>
            <!-- <el-col :span="6"><div class="grid-content bg-purple"><span>创立人：</span><el-input v-model="orzpl" placeholder="请输入" style="width:50%"></el-input> </div></el-col> -->
           <el-col :span="12"><el-button plain class="tosearch searbtn shortbtn" @click="searchnow">查询</el-button></el-col> 
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
                  prop="org_name"
                  label="部门名称"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="create_time"
                  label="创立时间"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="create_user_name"
                  label="创立人"
                  width="180"
                  align="center">
                </el-table-column>
                 <el-table-column
                  label="操作"
                  align="center">
                         <template slot-scope="scope">
                            <el-button type="primary" round size="medium" class="look" @click="updateds(scope.row.org_id,scope.row.org_name,scope.row.create_user_id,scope.row.create_user_name)">修改</el-button>
                            <el-button type="primary" round size="medium" class="look" @click="Deldepa(scope.row.org_id)">删除</el-button>
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
  <el-dialog title="修改部门信息" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="26%">
        <Updatebm  v-on:update="receive" :orznameid='orznameid' :orzname='orzname' :orzplid='orzplid' :orzpl='orzpl'></Updatebm>
  </el-dialog>
</el-row>
</template>
<script>
import {departlist,delpare} from '@/api/table'
import Pagination from '@/components/Pagination'
import  Updatebm from './updatebm'
export default {
     components:{
         Pagination,
          Updatebm
      },
      data(){
          return{      
               dialogTableVisible: false,   //修改表单提交
               orznameid:'',
               orzname:'',
               orzplid:'',
               orzpl:'',
               pageNum:1,
               pageSize:10,
               total:20,//信息总数
               tableData: [],
          }
      },
      methods:{
          receive: function (trues) {
            this.dialogTableVisible = trues
            this.searchnow()
          },
          Deldepa(id){
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                    delpare(id).then(res=>{
                         if(res.code == 0){
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
            if(this.orzname){
                    this.pageNum = 1
                   departlist(this.pageNum,this.pageSize).then(res=>{
                    this.tableData = res.data.list
                    this.total = res.data.total
                  })
            }else{
                   departlist(this.pageNum,this.pageSize,this.orzname).then(res=>{
                    this.tableData = res.data.list
                    this.total = res.data.total
                    console.log(res)
                  })
            }
           
          },
          updateds(orzid,orzname,plid,plname){
              this.dialogTableVisible = true;//默认页面不显示为false,点击按钮将这个属性变成true
              this.orznameid = orzid,
              this.orzname =  orzname,
              this.orzplid = plid,
              this.orzpl = plname

          }

      },
      created(){
        this.searchnow()
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


