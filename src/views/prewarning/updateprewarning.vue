<template>
 <el-form ref="form"  label-width="80px">
  <el-form-item label="告警名称:">
    <el-input v-model=" names"  ></el-input>
  </el-form-item>
   <el-form-item label="告警编码:">
    <el-input v-model="codes"  ></el-input>
  </el-form-item>
   <el-form-item label="预警时间:">
    <el-input v-model="times" ></el-input>
  </el-form-item>
    <el-form-item label="超时时间:">
    <el-input v-model=" expire_times" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="单位:">
          <el-select v-model="units" placeholder="请选择" style="width:80%"><el-option v-for="item in options" :key="item.units" :label="item.label" :value="item.units"></el-option></el-select>
  </el-form-item>
  <el-form-item label="是否启用:">
    <el-select v-model="alives" placeholder="请选择" style="width:80%"><el-option v-for="item in tims" :key="item.is_alive" :label="item.label" :value="item.alives"></el-option></el-select>
  </el-form-item>
  <el-form-item label="来源系统">
    <el-input v-model="syss" ></el-input>
  </el-form-item>
  <el-form-item label="描述:">
    <el-input type="textarea" :rows="8" v-model="descs" ></el-input>
  </el-form-item>
  <el-form-item style="margin-top:50px; margin-left:100px">
     <el-button round class="bt" @click='canbu'>取消</el-button>
    <el-button round class="bt" @click=" onSubmit">确定</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import {updateprewarning} from '@/api/table'
  export default {
      props: ['id','name','code','time','unit','desc','sys','expire_time','alive'],
            watch:{
            id(val){
                this.ids = val
            },
            name(val){
                 this.names = val
            },
            code(val) {
                this.codes = val;
            },
            time(val){
                this.times = val;
            },
             desc(val){
                this.descs = val;
            },
            sys(val){
                this.syss = val;
            },
            unit(val){
                this.units = val;
            },
            expire_time(val){
                this.expire_times = val;
            },
            alive(val){
                this.alives = val;
            }
      },
    data() {
      return {
            options: [{
            units: 'hour',
            label: '小时'
            }, {
            units: 'day',
            label: '天'
        },{
           units: 'week',
            label: '周'
            },
            {
            units: 'month',
            label: '月'
            }
        ],
        tims: [{
          alives: 1,
            label: '启用'
            }, {
         alives: 2,
            label: '不启用'
        } ],
          ids:this.id,
          descs:this.desc,//文本域
          names:this.name,
          codes: this.code,
          times: this.time,
          units: this.unit,
          syss:this.sys,
          expire_times:this.expire_time,
          alives:this.alive

       
      }
    },
    methods: {
      onSubmit() {
        if(this.names == ''||this.codes == ''||this.times == ''|| this.units == ''||this.descs ==''||this.syss ==""||this.expire_times == ""||this.alives ==""){
                  this.$message({
                    message: '请填写所有信息',
                    type: 'warning'
                  });
        }else{
                updateprewarning(this.id,this.names,this.codes,this.times,this.units,this.descs,this.syss,this.expire_times,this.alives).then(res=>{
                    if(res.code == 0){
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

