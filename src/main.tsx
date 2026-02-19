import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style'
import { Routers } from './routes/index'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>
)
