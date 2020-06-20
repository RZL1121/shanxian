<template>
    <el-row>
  <div class="search">
      <div class="serach-t">
       <div class="serach-t_a">
          <el-row :gutter="50">
            <el-col :span="6"><div class="grid-content bg-purple"><span>姓名</span><el-input v-model="namess" placeholder="请输入" style="width:60%"></el-input> </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>性别</span><el-select v-model="sex" placeholder="请选择" style="width:60%"><el-option v-for="item in options" :key="item.sex" :label="item.label" :value="item.sex"></el-option></el-select></div></el-col>
            <el-col :span="12"><el-button plain class="tosearch searbtn shortbtn" @click="searchnow">查询</el-button><el-button plain class="tosearch searbtn" @click="addUser">新增用户信息</el-button></el-col>
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
                  prop="user_name"
                  label="账号"
                  width="180"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="user_true_name"
                  label="姓名"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="user_sex"
                  label="性别"
                  width="180"
                  align="center">
                       <template slot-scope="scope">
                            <span v-if="scope.row.user_sex== '0' ">女</span>
                            <span v-if="scope.row.user_sex== '1' ">男</span>
                        </template>
                </el-table-column>
                 <el-table-column
                  prop="user_tel"
                  label="手机号"
                  align="center">
                </el-table-column>
                 <el-table-column
                  label="操作"
                  align="center">
                          <template slot-scope="scope">
                            <el-button type="primary" round size="medium" class="look" @click="updateuser(scope.row.user_id,scope.row.user_name,scope.row.pass_word,scope.row.user_gonghao,scope.row.user_true_name,scope.row.user_tel,scope.row.user_age)">修改</el-button>
                            <el-button type="primary" round size="medium" class="look" @click="Deluser(scope.row.user_id)">删除</el-button>
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
  <el-dialog title="新增用户信息" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="410px">
        <Adduser  v-on:add="receives"></Adduser>
  </el-dialog>
  <el-dialog title="修改用户信息" :visible.sync="dialogTableVisibles" center :append-to-body='true' :lock-scroll="false" width="410px">
        <Updateuser  v-on:update="receive" :id='id' :name='name' :pass='pass' :gh='gh' :truename='truename' :tel='tel' :age='age'></Updateuser>
  </el-dialog>
</el-row>
</template>
<script>
import Pagination from '@/components/Pagination'
import Adduser from './adduser'
import Updateuser from './userupdate'
import {getuserlist,deluser} from '@/api/table'
export default {
     components:{
         Pagination,
         Adduser,
         Updateuser
      },
      data(){
          return{      
               dialogTableVisible: false,   //新增表单提交
               dialogTableVisibles:false,  //修改表单提交
               namess:'',//姓名
                   options: [{
                   sex: '1',
                    label: '男'
                    }, {
                    sex: '0',
                    label: '女'
                    }],
               sex:'',//性别
               pageNum:1,
               pageSize:10,
               total:20,//信息总数
               tableData: [],
               id:'',
               name:'',
               pass:'',
               gh:'',
               truename:'',
               tel:'',
               age:''
          }
      },
      methods:{
            receives: function (trues) {
              this.dialogTableVisible = trues
                this.searchnow()
            },
            receive: function (trues) {
              this.dialogTableVisibles = trues
              this.searchnow()
            },
          searchnow(){
                  if(this.namess||this.sex){
                       this.pageNum = 1
                         getuserlist(this.pageNum,this.pageSize,this.namess,this.sex).then(res=>{
                          this.tableData = res.data.list
                          this.total = res.data.total
                            console.log(res)
                        })
                  }else{
                        getuserlist(this.pageNum,this.pageSize,this.namess,this.sex).then(res=>{
                          this.tableData = res.data.list
                          this.total = res.data.total
                            console.log(res)
                        })
                  }
          },
          addUser(){
          this.dialogTableVisible=true;//默认页面不显示为false,点击按钮将这个属性变成true
         },
          updateuser(id,name,pass,gh,truename,tel,age){
          this.dialogTableVisibles=true;
          this.id = id,this.name = name,this.pass = pass,this.gh = gh,this.truename = truename,this.tel = tel, this.age = age
      },
         Deluser(id){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                    deluser(id).then(res=>{
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
  .dialog{
    height:600px;
    border-radius:20px;
  }
</style>


