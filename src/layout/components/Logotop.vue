<template>
    <div class="logoimg">
        <div class="box">
                   <img class="logo" src="@/assets/logo.png">
        </div>
        <div class="wd">单县公安执法监督管理平台</div>
    <div class="goout">
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    欢迎您：{{user_name}}
                <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">    
                    <div class="username">姓名：15122315456152</div>
                    <div class="userphom">电话：15122315456152</div>
                    <el-dropdown-item divided @click.native="logout">
                        <span style="display:block;">退出登录</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    data(){
        return{
            user_name:''
        }
    },
     methods:{
             logout(){
                const Username = 'user'
                const TokenKey = 'vue_admin_template_token'
                const Userinfo = 'userinfo'
                Cookies.remove(TokenKey);
                Cookies.remove(Username);
                Cookies.remove(Userinfo);
                location.reload()
            }
     },
     created(){
         const Username = 'user'
        this.user_name =   Cookies.get(Username)
     }
}
</script>
<style  scoped lang='scss'>
.logoimg{
    width:100%;
    min-width:1100px;
}
.box{
    width:85px;
    height:100%;
    display: inline-block;
       float: left;
    .logo{
        width:100%;
        height:100%;
        }
}
    .wd{  
        // width:800px;
        height:100%;
        color: #fff;
        font-size: 30px;
        display: inline-block;
        line-height: 70px;
        // margin-top:-20px;
        float: left;
    }
    .goout{
        color:#fff;
        float: right;
        margin-right:2%;
        margin-top:20px;
    }
    .el-dropdown{
        color:#fff
    }
    .user-dropdown{
        background:pink;
        width:300px;
    }
    .username{
    width:100%;
        height:40px;
        line-height: 40px;
        text-align: center;
    }
//   .goout :hover .el-dropdown-menu{
//         display: block!important;
//     }
</style>


