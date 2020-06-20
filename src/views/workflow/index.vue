<template>
<el-row>
  <div class="search">
      <div class="serach-t">
       <span class="searchname">流程名称</span><el-input v-model="searchname" placeholder="请输入"></el-input> 
       <el-button plain class="tosearch searbtn" @click="searchnow">查询</el-button>
       <el-button plain class="searbtn" @click="addwork">新增流程</el-button>
      </div>
  </div>
  <div class="table">
      <div class="grid-content bg-purple-dark">
                <el-table
                :data="tableData"
                style="width: 100%"
                  border
                    :row-style="{height:'10px'}"
                :cell-style="{padding:'2px'}"
                :row-class-name="tableRowClassName"
                >
                <el-table-column
                  type="index"
                  width="50"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="flow_name"
                  label="流程名称"
                  width="180"
                  align="center">
                </el-table-column>
                <!-- <el-table-column
                  prop="name"
                  label="创建时间"
                  width="180"
                  align="center">
                </el-table-column> -->
                <el-table-column
                  prop="flow_code"
                  label="流程编码"
                  align="center">
                </el-table-column>
                <!-- <el-table-column
                  prop="gj"
                  label="告警条件"
                  align="center">
                </el-table-column> -->
                 <el-table-column
                  prop="flow_order"
                  label="流程排序"
                  align="center">
                </el-table-column>
                 <el-table-column
                  label="操作"
                  align="center">
                  <template slot-scope="scope">
                  <el-button type="primary" round size="medium" class="detail" @click="updatework(scope.row.flow_id,scope.row.flow_name,scope.row.flow_code,scope.row.flow_order,scope.$index,scope.row.is_del)">修改</el-button>
                   <el-button type="primary" round size="medium" class="detail" @click="dellwork(scope.row.flow_id,scope.$index, scope.row)">删除</el-button>
                  </template >
                </el-table-column>
              </el-table>
      </div>
        <pagination
                  v-show="total>0"
                  :total="total"
                  :page.sync="pageNum"
                  :limit.sync="pageSize"
                  @pagination="searchnow"
                >
        </pagination>
  </div>
  <el-dialog title="新增流程" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="500px">
        <Addwork :tableData='tableData' :dialogTableVisible='dialogTableVisible' v-on:updates="receives"></Addwork>
        <!-- <Addwork></Addwork> -->
  </el-dialog>
  <el-dialog title="流程修改" :visible.sync="dialogTableVisibles" center :append-to-body='true' :lock-scroll="false" width="500px">
        <Workupdate :id='id' :name='name' :code='code' :order='order' :tableData='tableData' :index='index' :del='del'  v-on:update="receive" :dialogTableVisibles='dialogTableVisibles'></Workupdate>
  </el-dialog>
</el-row>


 
</template>
<script>
import Addwork from './addwork'
import Workupdate from './workupdate'
import Pagination from '@/components/Pagination'
import {workflowList,dellworkflow} from '@/api/table'
  export default {
    inject:['reload'],
      components:{
         Pagination,
         Addwork,
         Workupdate
      },
      
    methods: {
      //子组件传递的数据
      receive: function (trues) {
        this.dialogTableVisibles = trues
        this.searchnow()
      },
      receives: function (trues) {
        this.dialogTableVisible = trues
          this.searchnow()
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2 != 0) {
          return 'warning-row';
        } else  {
          return 'success-row';
        }
       
      },
         dellwork(flow_id,index){
                  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                    dellworkflow(flow_id).then(res=>{
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
      addwork(){
          this.dialogTableVisible=true;//默认页面不显示为false,点击按钮将这个属性变成true
      },
      updatework(id,name,code,order,index,del){
          this.dialogTableVisibles=true;
          this.id = id
          this.name = name
          this.code = code
          this.order = order
          this.index = index 
          this.del = del
      },
      searchnow(){
       
        let pageSize = this.pageSize
        let  flow_name  = this.searchname
        if(flow_name){
                        let pageNum = 1
                         workflowList(pageNum,pageSize,flow_name).then(res=>{
                          console.log(res.data)
                          this.tableData = res.data.list
                          this.total = res.data.total
                      })
        }else{
                     let pageNum = this.pageNum
                   workflowList(pageNum,pageSize,flow_name).then(res=>{
                    console.log(res.data)
                    this.tableData = res.data.list
                    this.total = res.data.total
                })
        }
        

      },
      workupdate(id){
         this.$router.push({
          path: 'workupdate',
          query: {
            id: id
          }
        })
      }
    },
    data() {
      return {
        id:'',
        name:'',
        code:'',
        order:'',
        dialogTableVisible: false,   //新增表单提交
        dialogTableVisibles: false,   //修改表单提交
        searchname:'', //查找人 姓名
        pageNum:1,
        pageSize:10,
        total:0,//信息总数
        tableData:[],
        selectlistRow: [],
        index:'',
        del:''
      }
    },
    created(){
      this.searchnow()
    }
  }
</script>

<style scoped lang="scss">
.tablebox{
  width:100%;
  height:100%;
  background:#fff;
  border-radius: 10px;
}
  .el-table .warning-row {
    background: rgb(242, 246, 250);
  }
.el-pagination__jump{
  margin-top:-25px;
}
.el-pagination .el-select .el-input{
  margin-top:-25px;
}
  .el-table .success-row {
    background: #fff;
  }
  .el-row {
    margin-bottom: 20px;
    padding-top:20px;
    background: #fff;
    border-radius: 10px;
    width: 98%;
    margin:0 auto;
    /* margin-left:0 !important;
    margin-right:0 !important; */
    /* height:500px; */
    overflow: hidden;
    padding-bottom:50px;
  }
  .search{
    width:100%;
    height:80px;
    /* background:	WhiteSmoke; */
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .table{
    width:98%;
    margin:0 auto;
    margin-top:20px;
  }
  .serach-t{
    height:100%;
  }
  .el-input{
     width:200px;
     line-height: 80px;
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
  
</style>


