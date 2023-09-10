import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom'

import { TransactionProvider } from './context/TransactionContext'

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </TransactionProvider>,
  document.getElementById('root')
)
