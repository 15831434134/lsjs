export const routerList = [
  {
    path: '/',
    component: () => import('../views/hello/hello.js'),
    // alias: '/user',
    children: [
      // {
      //   path:'user',
      //   component: () =>import('../views/user/user.vue')
      // }
    ],
    meta: {
      title: '123'
    }
  },
  {
    path: '/user',
    component: () => import('../views/user/user.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
