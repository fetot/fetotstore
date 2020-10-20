import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistedReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(thunkMiddleware))
)
export const persistor = persistStore(store)
