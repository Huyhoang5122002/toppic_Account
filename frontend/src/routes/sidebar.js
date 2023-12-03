const routes = [
  {
    path: '/app/homepage', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/profile',
    icon: 'FormsIcon',
    name: 'Profile',
  },



  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
