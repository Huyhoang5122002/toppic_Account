import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
// const Dashboard = lazy(() => import('../pages/Homepage'))

const Profile = lazy(() => import('../pages/Profile/Profile.js'))

const Newfeeds = lazy(() => import('../pages/Newfeeds/Newfeeds'))
const Notification = lazy(() => import('../pages/HomePage/components/NotificationList/Notification'))
const Detailfeed = lazy(() => import('../pages/Detailfeed/detailfeed.js'))

const routes = [
  {
    path: '/homepage', // the url
    component: Notification, // view rendered
  },
  {
    path: '/profile',
    component: Profile,
  },

  {
    path: '/newfeeds',
    component: Newfeeds,
  },
  
  {
    path: '/detailfeed',
    component: Detailfeed,
  },
  // {
  //   path: '/404',
  //   component: Page404,
  // },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
