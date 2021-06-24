const RouterGuard = (router) =>{
  router.beforeEach((to, from, next) => {
    // console.log(to)
    next()
  })
}

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  else return { x: 0, y: 0 }
}

export { RouterGuard, scrollBehavior }
