<template>
 <el-form ref="form"  label-width="80px">
  <el-form-item label="账号">
    <el-input v-model="user_name" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="pass_word" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
    <el-form-item label="真实姓名">
    <el-input v-model="user_true_name" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
  <el-form-item label="警号">
    <el-input v-model="user_gonghao" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="user_tel" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="user_sex" placeholder="请选择" style="width:60%">
      <el-option label="男" value='0'></el-option>
      <el-option label="女" value="1"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="年龄">
    <el-input v-model="user_age" placeholder="请输入" style="width:60%"></el-input>
  </el-form-item>
  <el-form-item style="margin-top:150px; margin-left:15%">
     <el-button round class="bt" @click="canbu">取消</el-button>
    <el-button round class="bt" @click="onSubmit">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {adduser} from '@/api/table'
  export default {
    data() {
      return {
          user_name:'',
          pass_word:'',
          user_true_name:'',
          user_gonghao:'',
          user_tel:'',
          user_sex:'',
          user_age:''
      }
    },
    methods: {
      onSubmit() {
        if(!this.user_name||!this.pass_word||!this.user_gonghao||!this.user_true_name||!this.user_tel||!this.user_sex||!this.user_age){
               this.$message({
                          message: '请填写所有信息',
                          type: 'warning'
                        });
        }else{
           adduser(this.user_name,this.pass_word,this.user_gonghao,this.user_true_name,this.user_tel,this.user_sex,this.user_age).then(res=>{
                console.log(res.code)
                // if(res.code == 0){
                        this.$emit("add",false)
                                this.$message({
                                  type: 'success',
                                  message: '添加成功!'
                                });
                    this.user_name = '',this.pass_word = '',this.user_gonghao = '',this.user_true_name = '',this.user_tel = '',this.user_sex = '',this.user_age = ''
                // }
          })
        }
         
      },
      canbu(){
              this.$emit("add",false)
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

