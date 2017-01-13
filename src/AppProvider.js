import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

const AppProvider = (props) => {
  return (
    <Provider store={props.store}>
      <App/>
    </Provider>
  )
}
export default AppProvider
