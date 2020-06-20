
<template>
<div style="width:450px" class="formbox">
 <el-form ref="form"  label-width="80px">
  <el-form-item label="告警名称:">
    <el-input v-model="warn_type_name" style="width:80%" ></el-input>
  </el-form-item>
   <el-form-item label="告警编码:">
    <el-input v-model="warn_type_code"  style="width:80%"></el-input>
  </el-form-item>
   <el-form-item label="预警时间:">
    <el-input v-model="warn_type_near_time" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="超时时间:">
    <el-input v-model="warn_type_expire_time" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="单位:">
     <el-select v-model="warn_type_near_unit" placeholder="请选择" style="width:80%"><el-option v-for="item in options" :key="item.warn_type_near_unit" :label="item.label" :value="item.warn_type_near_unit"></el-option></el-select>
  </el-form-item>
  <el-form-item label="是否启用:">
    <el-select v-model="is_alive" placeholder="请选择" style="width:30%"><el-option v-for="item in tim" :key="item.is_alive" :label="item.label" :value="item.is_alive"></el-option></el-select>
  </el-form-item>
   <el-form-item label="来源系统:">
    <el-input v-model="warn_type_sys" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="描述:">
    <el-input type="textarea" :rows="8" v-model="warn_type_desc" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item style="margin-top:50px; margin-left:20%">
     <el-button round class="bt" @click='canbu'>取消</el-button>
    <el-button round class="bt" @click=" onSubmit">确定</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import {addprewarning} from '@/api/table'
  export default {
    props:['pageNum','pageSize'],
    data() {
      return {
        options: [{
          warn_type_near_unit: 'hour',
            label: '小时'
            }, {
         warn_type_near_unit: 'day',
            label: '天'
        },{
          warn_type_near_unit: 'week',
            label: '周'
            },
            {
          warn_type_near_unit: 'month',
            label: '月'
            }
        ],
        tim: [{
          is_alive: 1,
            label: '启用'
            }, {
         is_alive: 2,
            label: '不启用'
        } ],
        is_alive:1,  // 是否启用超时告警
        warn_type_desc:'',//文本域
        warn_type_name:'',
        warn_type_code:'',
        warn_type_near_time:'',
        warn_type_near_unit:'',
        warn_type_sys:'',
        warn_type_expire_time:''

      }
    },
    methods: {
      onSubmit() {
          let warn_type_name = this.warn_type_name
          let warn_type_code = this.warn_type_code
          let warn_type_near_time = this.warn_type_near_time
          let warn_type_near_unit = this.warn_type_near_unit 
          let warn_type_sys = this.warn_type_sys 
          let warn_type_desc = this.warn_type_desc
          let is_alive = this.is_alive
          let warn_type_expire_time = this.warn_type_expire_time
          if(!warn_type_name||!warn_type_code||!warn_type_near_time||!warn_type_near_unit||!warn_type_sys||!warn_type_desc||!is_alive||!warn_type_expire_time){
                       this.$message.error('请填写所有的信息');
                       
          }else{
                addprewarning(warn_type_name,warn_type_code,warn_type_near_time,warn_type_near_unit,warn_type_sys,warn_type_desc,is_alive,warn_type_expire_time).then(res=>{
                    if(res.code == 0){
                         this.$emit("updates",false)
                                this.warn_type_desc = '',
                                this.warn_type_name = '',
                                this.warn_type_code = '',
                                this.warn_type_near_time = '',
                                this.warn_type_near_unit = '',
                                this.warn_type_sys = '',
                                this.is_alive = 1,
                          this.$message({
                            message: '添加成功',
                            type: 'success'
                            });
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
    background:rgb(81, 93, 191);
    color:#fff;
}
.el-input{
    line-height: 0;
}
.el-button.is-round{
      padding: 12px 16px;
}

</style>

