import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store, persistor} from './utils/store/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { CheckLoggedInProvider } from './context/checkLoggedInStat.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
        <CheckLoggedInProvider>
            <App />
            </CheckLoggedInProvider>
          </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
)
