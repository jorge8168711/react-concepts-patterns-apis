import App from './App'
import './style.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Main = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

createRoot(document.getElementById('app')).render(<Main />)
