import React, { Fragment, useState } from 'react'
import renderRoutes from './router/routes'
import routes from './router/index'
const App = () => (
  <Fragment>
    {renderRoutes(routes)}
  </Fragment>
)

export default App
