<template>
 <el-form ref="form"  label-width="80px">
  <el-form-item label="账号:">
    <el-input v-model="newname"  style="width:200px"></el-input>
  </el-form-item>
   <el-form-item label="密码:">
    <el-input v-model="newpass"  style="width:200px"></el-input>
  </el-form-item>
   <el-form-item label="警号:">
    <el-input v-model="newgh" style="width:200px"></el-input>
  </el-form-item>
   <el-form-item label="真实姓名:">
    <el-input v-model="newtruename" style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="手机号:">
    <el-input v-model="newtel" style="width:200px"></el-input>
  </el-form-item>
  <el-form-item label="年龄:">
    <el-input v-model="newage" style="width:200px"></el-input>
  </el-form-item>
  <el-form-item style="margin-top:50px; margin-left:100px">
     <el-button round class="bt" @click='canbu'>取消</el-button>
    <el-button round class="bt" @click="update">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {updateuser} from '@/api/table'
  export default {
      props:['id','name','pass','gh','truename','tel','age'],
      created(){
              console.log('名字')
                console.log(this.newpass)
      },
      watch:{
            id(val){
                this.newid = val
            },
            name(val){
                 this.newname = val
            },
            pass(val) {
                this.newpass = val;
            },
            gh(val){
                this.newgh = val;
            },
            truename(val){
                this.newtruename = val;
            },
            tel(val){
                this.newtel = val;
            },
            age(val){
                this.newage = val;
            },

      },
    data() {
      return {
          newid:this.id,
          newname:this.name,
          newpass:this.pass,
          newgh:this.gh,
          newtruename:this.truename,
          newtel:this.tel,
          newage:this.age
  
         
      }
    },
    methods: {
      update() {
        if(!this.newid||!this.newname||!this.newpass||!this.newgh||!this.newtruename||!this.newtel||!this.newage){
                 this.$message({
                  message: '请填写所有信息',
                  type: 'warning'
                });
        }else{
                 updateuser(this.newid,this.newname,this.newpass,this.newgh,this.newtruename,this.newtel,this.newage).then(res=>{
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

