<template>
 <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="告警名称:">
    <el-input v-model="form.name" style="width:80%" ></el-input>
  </el-form-item>
   <el-form-item label="特征值:">
    <el-input v-model="form.name" style="width:80%" ></el-input>
  </el-form-item>
   <el-form-item label="告警类型:">
    <el-input v-model="form.name" style="width:80%" ></el-input>
  </el-form-item>
   <el-form-item label="告警时间:">
    <el-input v-model="form.name" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item style="margin-top:150px; margin-left:20%">
     <el-button round class="bt">取消</el-button>
    <el-button round class="bt">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        textarea:'',//文本域
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
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
.el-button.is-round{
      padding: 12px 15px;
}

</style>

