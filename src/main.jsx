import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'

// redux
import {Provider} from 'react-redux'
import store from  './store'


import { BrowserRouter as Router } from 'react-router-dom'
import './utils/reset.css'   // css重置表


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router history={Router}>
      <App />
    </Router>
  </Provider>,
)
