import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import DevTools from 'containers/DevTools'
import rootReducer from 'reducers'

const developmentComposeFunctions = __DEVELOPMENT__ ? [DevTools.instrument()] : []
const composeFunctions = [applyMiddleware(thunkMiddleware), ...developmentComposeFunctions]

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...composeFunctions)
  )

  return store
}

export default configureStore
