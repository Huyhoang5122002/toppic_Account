import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import NavHeader from '../components/NavHeader';
import Notification from '../pages/Newfeeds/Newfeeds';
import Newfeeds from '../pages/Newfeeds/Newfeeds'


const Page404 = lazy(() => import('../pages/404'))

function DefaultLayout() {

  return (
    <div className={`flex flex-col h-screen bg-gray-50 dark:bg-gray-900 `}>

      <NavHeader />
      
      <div className="flex flex-1">

      <div className="flex flex-col flex-1 w-full">
        <Main>

            <Newfeeds/>

        </Main>
      </div>
      </div>
    </div>
  )
}

export default DefaultLayout
