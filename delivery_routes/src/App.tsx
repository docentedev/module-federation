import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'
import DeliveryIndex from './components/DeliveryIndex'

const App = () => (
  <div className="container">
    <Router>
      <Routes>
        <Route path="/delivery/routes/*" element={<DeliveryIndex />} />
      </Routes>
    </Router>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
