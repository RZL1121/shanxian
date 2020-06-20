import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/photo',
    component: Layout,
    component: () => import('@/views/dashboard/fat'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页', icon: 'dashboard',},  
    children: [
      {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
    },
    {
      path: '/moretu',
      name: 'Moretu',
      component: () => import('@/views/dashboard/moretu'), 
      meta: { title: '分所数据' }
    },
  ]
  },
  {
    path: '/three',
    name:'Three',
    component: () => import('@/views/dashboard/fat'),
    hidden: true
  },
  
  {
    path: '/caselist',
    component: Layout,
    redirect: '/caselist/index',
    meta: { title: '案件列表', icon: 'link',},
    children: [
      {
        path: 'index',
        name: 'caselist',
        component: () => import('@/views/caselist/index'),
      },
      {
        path:'detail',
        name:'detail',
        component: () => import('@/views/caselist/detail'),
        meta: { title: '详情', }
      },
      {
        path:'item',
        name:'item',
        component: () => import('@/views/caselist/item'),
        meta: { title: '流程' }
      }
    ]
  },
  {
    path: '/Instance',
    component: Layout,
    redirect: '/Instance/willInstance',
    children: [
      {
        path: 'willInstance',
        name: 'Instance',
        component: () => import('@/views/Instance/willInstance'),
        meta: { title: '未分流'},
      },
      {
        path:'willdetail',
        name: 'willdetail',
        component: () => import('@/views/Instance/willdetail'),
        meta: { title: '详情'}
       },
      {
        path:'hadInstance',
        name: 'hadInstance',
        component: () => import('@/views/Instance/hadInstance'),
        meta: { title: '已分流'},
      },
      {
        path:'haddetail',
        name: 'haddetails',
        component: () => import('@/views/Instance/haddetail'),
        meta: { title: '详情'}
       },
  
    ]
  },
  // {
  //   path: '/Instance',
  //   component: Layout,
  //   name: 'Instance',
  //   redirect:'/Instance/willistinst/will',
  //   alwaysShow: true, // will always show the root menu
  //   meta: { title: '警情列表', icon: 'dashboard' },
  //   children: [
  //     { 
  //       path: 'willistinst',
  //       component: () => import('@/views/Instance/willistinst'),
  //       name: 'willistinst',
  //       children:[      { 
  //         path: 'will',
  //         component: () => import('@/views/Instance/willInstance'),
  //         name: 'will',
  //         meta: { title: '未分流'}
  
  //       },
  // ]
  //     },
  //     { 
  //       path: 'listinstance',
  //       component: () => import('@/views/Instance/listinstance'),
  //       name: 'listinstance',
  //       children:[ 
  //       { 
  //         path: 'had',
  //         component: () => import('@/views/Instance/hadInstance'),
  //         name: 'had',
  //         meta: { title: '已分流'}
  //       }]
  //     },
  //     {
  //       path:'willdetail',
  //       name: 'willdetail',
  //       component: () => import('@/views/Instance/willdetail'),
  //       meta: { title: '未分流详情页'}
  //     },
  //     {
  //       path:'haddetail',
  //       name: 'haddetail',
  //       component: () => import('@/views/Instance/haddetail'),
  //       meta: { title: '已分流详情页'},
  //     }

  //   ]
  // },
  {
    path: '/alarm',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'alarm',
        component: () => import('@/views/alarm/index'),
        meta: { title: '预警提醒', icon: 'link' }
      }
    ]
  },
  {
    path: '/tips',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/tips/table'),
        meta: { title: '告警提醒', icon: 'gaojing' },
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: { title: '用户设置', icon: 'users' }
      }
    ]
  },

  {
    path: '/department',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'department',
        component: () => import('@/views/department/index'),
        meta: { title: '部门设置', icon: 'link' }
      }
    ]
  },
  {
    path: '/prewarning',
    component: Layout,
    children: [
      {
        path: 'prewarningtable',
        name: 'PrewarningTable',
        component: () => import('@/views/prewarning/table'),
        meta: { title: '告警设置', icon: 'dashboard' },
      }
    ]
  },

  {
    path: '/workflow',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Workflow',
        component: () => import('@/views/workflow/index'),
        meta: { title: '流程设置', icon: 'link' },
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
