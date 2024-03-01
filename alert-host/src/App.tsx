import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

const AlertApp = lazy(() => import('alert_app/App'));

import './index.css'

const App = () => (
  <div className="container">
    <h1>Alert Host</h1>
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/app/*" element={<AlertApp />} />
        {/* otras rutas aquí */}
      </Routes>
    </Suspense>
  </div>
)
//const rootElement = document.getElementById('app')
//if (!rootElement) throw new Error('Failed to find the root element')

//const root = ReactDOM.createRoot(rootElement as HTMLElement)

//root.render(<App />)

export default App