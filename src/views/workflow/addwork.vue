<template>
 <el-form ref="form"  label-width="80px">
  <el-form-item label="流程名称:">
    <el-input v-model="flow_name" ></el-input>
  </el-form-item>
   <el-form-item label="流程编码:">
    <el-input v-model="flow_code" ></el-input>
  </el-form-item>
   <el-form-item label="流程排序:">
    <el-input v-model="flow_order" ></el-input>
  </el-form-item>
  <el-form-item style="margin-top:50px; margin-left:20%">
     <el-button round class="bt" @click='canbu'>取消</el-button>
    <el-button round class="bt" @click="onSubmit">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {addeworkflow} from '@/api/table'
  export default {
   props:['tableData'],
    data() {
      return {
        flow_name:'',
        flow_code:'',
        flow_order:'',
      }
    },
    methods: {
      onSubmit() {
              if(!this.flow_name||!this.flow_code||!this.flow_order){
                         this.$message({
                          message: '请填写所有信息',
                          type: 'warning'
                        });
              }else{
                   addeworkflow(this.flow_name,this.flow_code,this.flow_order).then(res=>{
                        if(res.code == 0){
                                this.$emit("updates",false)
                                this.$message({
                                  type: 'success',
                                  message: '添加成功!'
                                });           
                        this.flow_name='',this.flow_code='',this.flow_order=''
                        }
                        
                  })
              }
      

         
      },
         canbu(){
              this.$emit("updates",false)
      },
    }
  }
</script>
<style scoped lang="scss">
.bt{
    width:45%;
    text-align: center;
    background:rgb(81, 93, 191);
    color:#fff;

}
.el-button.is-round{
      padding: 12px 2px;
}
.el-input{
    line-height: 0;
}
.el-form-item__content{
  margin-left:0px;
}

</style>

