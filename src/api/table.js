import request from '@/utils/request'
import Qs from 'qs'
import md5 from 'blueimp-md5'
//首页告警数量
export  function ggnum(){
  return request({
    url: '/warn/count',
    method: 'get',
   params: {
       warn_type_kind:'warn'
     }
  })
}
//查询首页头部数量
export  function home(){
  return request({
    url: '/home/getTitleData',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
data:{}

  })
}
//首页柱状图
export  function homezhu(){
  return request({
    url: '/home/getOrgWarnKindCount',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
data:{}

  })
}
//首页曲线图
export  function homequ(org_code){
  return request({
    url: '/home/getWarnByOrgCode',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
data:{
  org_code
}

  })
}
//告警设置列表查询
export  function prewarningList(pageNum,pageSize,warn_type_name){
  return request({
    url: '/warnType/getByPage',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      pageNum,
      pageSize,
      warn_type_name
     }
  })
}
//新增告警设置规则
export function addprewarning(warn_type_name, warn_type_code,warn_type_near_time,warn_type_near_unit,warn_type_sys,warn_type_desc,is_alive,warn_type_expire_time){
  return request({
     url:'/warnType/add',
     method:'post',
     transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
     data:{
      warn_type_name,
      warn_type_code,
      warn_type_near_time,
      warn_type_near_unit,
      warn_type_sys,
      warn_type_desc,
      is_alive,
      warn_type_expire_time
     }
  })
}
//告警设置规则删除
export function dellprewarning(warn_type_id){
   return request({
     url:'/warnType/del',
     method:'post',
     transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
     data:{
      warn_type_id
     }
   })
}
//告警设置规则修改
export function updateprewarning(warn_type_id,warn_type_name,warn_type_code,warn_type_near_time,warn_type_near_unit,warn_type_desc,warn_type_sys,warn_type_expire_time,is_alive){
   return request({
     url:'/warnType/update',
     method:"post",
     transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
     data:{
      warn_type_id,
      warn_type_name,
      warn_type_code,
      warn_type_near_time,
      warn_type_near_unit,
      warn_type_desc,
      warn_type_sys,
      warn_type_expire_time,
      is_alive
     }

   })
}
//案件列表查询
export function casseList( pageNum,pageSize,case_police_nm,case_name,case_type_name,case_status,sa_time,organiza_user_name,organiza_org_name,xyr_name) {
  return request({
    url: '/cases/getByPage',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      pageNum,
      pageSize,
      case_police_nm,
      case_name,
      case_type_name,
      case_status,
      sa_time,
      organiza_user_name,
      organiza_org_name,
      xyr_name
     }
  })

}
//案件流程图
export function cassework(case_id) {
  return request({
    url: '/caseFlow/get',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      case_id
     }
  })

}
//流程图item 接警
export function jj(jjdbh) {
  return request({
    url: '/jq110Jj/getById',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      jjdbh
     }
  })

}
//流程查询
export function workflowList(pageNum,pageSize,flow_name) {
  return request({
    url: '/flow/getByPage',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      pageNum,
      pageSize,
      flow_name
     }
  })

}
//流程新增
export function addeworkflow(flow_name,flow_code,flow_order) {
  return request({
    url: '/flow/add',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      flow_name,
      flow_code,
      flow_order,
     }
  })
}
//涉案财物信息
export function money(case_police_nm) {
  return request({
    url: '/exhibit/getByCaseNum',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      case_police_nm
     }
  })
}
//流程修改
export function updateworkflow(flow_id,flow_name,flow_code,flow_order) {
  return request({
    url: '/flow/update',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      flow_id,
      flow_name,
      flow_code,
      flow_order
     }
  })
}
//流程删除
export function dellworkflow(flow_id) {
  return request({
    url: '/flow/del',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      flow_id
     }
  })
}

//告警提醒列表查询
export function gettips(pageNum,pageSize,case_police_nm,case_name,warn_type_id,is_deal,warn_type_kind){
  return request({
    url:'/warn/getByPage',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data:{
      pageNum,
      pageSize,
      case_police_nm,
      case_name,
      warn_type_id,
      is_deal,
      warn_type_kind
    }
  })
}
//告警类型选项框查询
export function option(){
  return request({
    url:'/warnType/get',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
  })
}

//警情列表
export function JQ(pageNum,pageSize,zqzt){
  return request({
    url:'/jq/getByPage',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
   },
   data:{
    pageNum,
    pageSize,
    zqzt
   }
  })
}
//警情列表详情110接警
export function JQjj(jjdbh){
  return request({
    url:'/jq110Jj/getById',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
   },
   data:{
    jjdbh
   }
  })
}
//警情列表详情110处警
export function JQcj(jjdbh){
  return request({
    url:'/jq110Cj/get',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
   },
   data:{
    jjdbh
   }
  })
}
//警情列表详情110反馈
export function JQfk(jjdbh){
  return request({
    url:'/jq110Fk/get',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
   },
   data:{
    jjdbh
   }
  })
}
//警情分流
export function JQfl(jjdbh){
  return request({
    url:'/jq110Fl/get',
    method:"post",
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
   },
   data:{
    jjdbh
   }
  })
}
//新增用户
export function adduser(user_name,pass_word,user_gonghao,user_true_name,user_tel,user_sex,user_age) {
  return request({
    url: '/user/user/add',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      user_name,
      pass_word: md5(pass_word),
      user_gonghao,
      user_true_name,
      user_tel,
      user_sex,
      user_age
     }
  })
}
//修改用户
export function updateuser(user_id,user_name,pass_word,user_gonghao,user_true_name,user_tel,user_age) {
  return request({
    url: '/user/user/update',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      user_id,
      user_name,
      pass_word: md5(pass_word),
      user_gonghao,
      user_true_name,
      user_tel,
      user_age
     }
  })
}
//删除用户
export function deluser(user_id) {
  return request({
    url: '/user/user/del',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      user_id,
     }
  })
}
//查询用户列表
export function getuserlist(pageNum,pageSize,user_true_name,user_sex) {
  return request({
    url: '/user/user/getByPage',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      pageNum,
      pageSize,
      user_true_name,
      user_sex
     }
  })
}
//部门列表查询
export function departlist(pageNum,pageSize,org_name,create_user_name) {
  return request({
    url: '/org/getByPage',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      pageNum,
      pageSize,
      org_name,
      create_user_name
     }
  })
}
//部门修改
export function updatedepar(org_id,org_name) {
  return request({
    url: '/org/update',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      org_id,
      org_name
     }
  })
}
//部门删除
export function delpare(org_id) {
  return request({
    url: '/org/del',
    method: 'post',
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
   }],
   headers: {
    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
},
    data: {
      org_id
     }
  })
}