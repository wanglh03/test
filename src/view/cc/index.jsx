import React, { Fragment, useState } from 'react';
import renderRoutes from '../../router/routes'


const Cc = (props) => {

  const [data, setData] = useState([])

  return (
    <Fragment>
      {renderRoutes(props.route.children)}
    </Fragment>
  )
}

export default Cc
