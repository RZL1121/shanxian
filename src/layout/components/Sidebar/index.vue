<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
             :default-active="defaultUrl"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              :collapse="isCollapse"
              background-color="rgb(48,65,86)"
              text-color="#fff"
              active-text-color="rgb(81,93,191)">
          <el-menu-item index="/dashboard">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">警情列表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Instance/willInstance"><i class="el-icon-error"></i>未分流</el-menu-item>
              <el-menu-item index="/Instance/hadInstance"><i class="el-icon-success"></i>已分流</el-menu-item>
            </el-menu-item-group>         
          </el-submenu>
          <el-menu-item index="/caselist/index">
            <i class="el-icon-menu"></i>
            <span slot="title">案件列表</span>
          </el-menu-item>       
          <el-menu-item index="/alarm/index">
            <i class="el-icon-bell"></i>
            <span slot="title">预警提醒</span>
          </el-menu-item>
           <el-menu-item index="/tips/table">
            <i class="el-icon-message-solid"></i>
            <span slot="title">告警提醒</span>
          </el-menu-item>
           <el-menu-item index="/user/index">
            <i class="el-icon-user"></i>
            <span slot="title">用户设置</span>
          </el-menu-item>
           <el-menu-item index="/department/index">
            <i class="el-icon-s-tools"></i>
            <span slot="title">部门设置</span>
          </el-menu-item>
           <el-menu-item index="/prewarning/prewarningtable">
            <i class="el-icon-s-tools"></i>
            <span slot="title">告警设置</span>
          </el-menu-item>
           <el-menu-item index="/workflow/index">
            <i class="el-icon-setting"></i>
            <span slot="title">流程设置</span>
          </el-menu-item>
        </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data(){
    return{
     defaultUrl:''
    }
  },
  methods:{
      handleSelect(key,keyPath){
         if(key === '/dashboard'){
           this.$router.push('/dashboard')
         }else if( key === '/caselist/index'){
           this.$router.push('/caselist/index')
         }else if( key == '/alarm/index'){
           this.$router.push('/alarm/index')
         }else if(key === '/tips/table'){
           this.$router.push('/tips/table')
         }else if(key === '/user/index'){
           this.$router.push('/user/index')
         }else if(key === '/department/index'){
           this.$router.push('/department/index')
         }else if(key === '/prewarning/prewarningtable'){
           this.$router.push('/prewarning/prewarningtable')
         }else if(key === '/workflow/index'){
           this.$router.push('/workflow/index')
         }else if(key === '/Instance/willInstance'){
           this.$router.push('/Instance/willInstance')
         }else if(key === '/Instance/hadInstance'){
           this.$router.push('/Instance/hadInstance')
         }else if(key === '/Instance/index'){
           this.$router.push('/Instance/index')
         }
      }
  },
 mounted () {
   if(this.$route.path ==='/moretu'){ 
     this.defaultUrl = '/dashboard'
    }else if(this.$route.path ==='/caselist/detail'){
      this.defaultUrl = '/caselist/index'
    }else if(this.$route.path ==='/Instance/willdetail'){
        this.defaultUrl = '/Instance/willInstance'
    }else if(this.$route.path ==='/Instance/haddetail'){
         this.defaultUrl = '/Instance/hadInstance'
    }else {
      this.defaultUrl = this.$route.path
    }
    
  },
  computed: {
    // activeMenu(){
    //      const route = this.$route
    //      const { meta, path } = route
    //     //  if (meta.activeMenu) {
    //     //   return meta.activeMenu
    //     // }
    //     //  if (meta.title == '案件列表'){
    //     //    return this.$route.matched[0].path
    //     //  }
    //       return path
        
  
    // },
    // activeMenu() {
    //       const route = this.$route
    //       const { meta, path } = route
    //   // 如果设置路径，侧边栏将突出显示您设置的高亮路径
    //         if (meta.activeMenu) {
    //           return meta.activeMenu
    //         }
    //         return this.$route.fullPath

    // },
    ...mapGetters([
      'sidebar'
    ]),
    // activeMenu() {
    //   const route = this.$route
    //   const { meta, path } = route
    //   // 如果设置路径，侧边栏将突出显示您设置的高亮路径
    //   if (meta.activeMenu) {
    //     return meta.activeMenu
    //   }
    //    return path

    // },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
}

</script>
<style scoped lang='scss'>
.el-menu{
  margin-top:100px;
}
.el-menu-item {
  background-color: rgba(48,65,86,0.1) !important;
}
.el-menu-item:hover { background-color: rgb(38,52,69) !important;}
</style>



