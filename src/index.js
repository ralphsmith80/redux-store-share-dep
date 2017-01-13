import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

const AppProvider = (props) => {
  return (
    <App/>
  )
//   return (
//     <Provider store={props.store}>
//       <App/>
//     </Provider>
//   )
}
export default AppProvider
