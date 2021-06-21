
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/list', alias: '/', name: 'list', component: () => import('pages/Index.vue') },
      { path: '/character/:id', name: 'character', component: () => import('pages/Character.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
