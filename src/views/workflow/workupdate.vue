<template>
 <el-form ref="form"  label-width="80px">
  <el-form-item label="流程名称:">
    <el-input v-model="newname"  style="width:300px"></el-input>
  </el-form-item>
   <el-form-item label="流程编码:">
    <el-input v-model="newcode"  style="width:300px"></el-input>
  </el-form-item>
   <el-form-item label="流程排序:">
    <el-input v-model="neworder" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item style="margin-top:50px; margin-left:100px">
     <el-button round class="bt" @click='canbu'>取消</el-button>
    <el-button round class="bt" @click="update">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {updateworkflow} from '@/api/table'
  export default {
      props:['id','name','code','order','tableData'],
      created(){
              console.log('名字')
                console.log(this.id)
      },
      watch:{
            id(val){
                this.newid = val
            },
            name(val){
                 this.newname = val
            },
            code(val) {
                this.newcode = val;
            },
            order(val){
                this.neworder = val;
            },
            del(val){
                this.newdel = val;
            }
      },
    data() {
      return {
         textarea:'',//文本域
           newid:this.id,
          newname:this.name,
          newcode:this.code,
          neworder:this.order,
  
         
      }
    },
    methods: {
      update() {
        if(!this.newid||!this.newname||!this.newcode||!this.neworder){
                 this.$message({
                  message: '请填写所有信息',
                  type: 'warning'
                });
        }else{
                 updateworkflow(this.newid,this.newname,this.newcode,this.neworder).then(res=>{
                  if(res.code == 0) {
                    this.$emit("update",false)  
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                  }
              })
        }
     
      },
         canbu(){
         this.$emit("update",false)
      },
    }
  }
</script>
<style scoped lang="scss">
.bt{
    background:rgb(81, 93, 191);
    color:#fff;
}
.el-input{
    line-height: 0;
}

</style>

