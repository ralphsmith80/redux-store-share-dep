import {
  createStore,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)
const storeEnhancers = [middlewareEnhancer]
const composedEnhancer = composeWithDevTools(...storeEnhancers)

export default function configureStore() {
  return createStore(
    reducers,
    composedEnhancer,
  )
}
