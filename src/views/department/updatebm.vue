<template>
 <el-form ref="form"  label-width="80px">
  <el-form-item label="部门名称">
    <el-input v-model="rzlname" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
    <!-- <el-form-item label="创立人">
    <el-input v-model="rzlpl" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item> -->
  <el-form-item style="margin-top:150px; margin-left:15%">
     <el-button round class="bt" @click="canbu">取消</el-button>
    <el-button round class="bt" @click="onSubmit">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {updatedepar} from '@/api/table'
  export default {
     props:['orznameid','orzname','orzplid','orzpl'],
          watch:{
            orznameid(val){
                this.newid = val
            },
            orzname(val){
                 this.rzlname = val
            },
            orzplid(val) {
                this.rzlplid = val;
            },
            orzpl(val) {
                this.rzlpl = val;
            },
      },
    data() {
      return {
        newid :this.orznameid,
        rzlname:this.orzname,
        rzlpl:this.orzpl,
        rzlplid:this.orzplid

      }
    },
    methods: {
      onSubmit() {
        if(!this.rzlname){
               this.$message({
                          message: '请填写所有信息',
                          type: 'warning'
                        });
        }else{
           updatedepar(this.newid,this.rzlname).then(res=>{
                console.log(res.code)
                if(res.code == 0){
                        this.$emit("update",false)
                                this.$message({
                                  type: 'success',
                                  message: '添加成功!'
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
.el-form-item{
    width:500px;

}
.el-input__inner{
  width:200px!important;
}
.el-dialog__body{
    border-top: 1px solid red
}
.bt{
    background:rgb(81, 93, 191);
    color:#fff;
}

</style>

