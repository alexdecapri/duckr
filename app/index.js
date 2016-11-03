import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'

const store = createStore(users)

// gives all components access to store that needs a piece
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
