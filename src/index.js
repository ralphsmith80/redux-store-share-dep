import React from 'react'
import App from './AppProvider'
import configureStore from './configureStore'

const store = configureStore()

const AppProvider = (props) => {
  console.log(props)
  return (
    <App store={props.store || store}/>
  )
}
export default AppProvider
