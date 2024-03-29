import { /*applyMiddleware,*/ createStore } from 'redux'

// import logger from 'redux-logger'

import {rootReducer} from '../root reducer/rootReducer'

import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

// const middlewares = [logger]

// const enhancedComposers = applyMiddleware(...middlewares)

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['toggle', 'network', 'transaction', 'history']
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer)

export const persistor = persistStore(store)
