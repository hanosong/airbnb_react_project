import React, { memo } from 'react'
import { Route, useRoutes } from 'react-router-dom'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      {/* <div className='header'>header</div> */}
      <AppHeader />
      <div  className='page'>
        {useRoutes(routes)}
      </div>
      {/* <div className='footer'>footer</div> */}
      <AppFooter/>
    </div>
  )
})

export default App