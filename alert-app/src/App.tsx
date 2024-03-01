import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import './index.css'

const Sec1 = () => {
  // link to section 2 use react-router-dom
  return (
    <div>
      <h1>Sección 1</h1>
      <Link to="/alert/app/section2">Ir a la sección 2</Link>
      <Link to="/contact">Ir a la Contact</Link>
    </div>
  )
}
const Sec2 = () => <div>Sección 2</div>

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/section1" element={<Sec1 />} />
      <Route path="/section2" element={<Sec2 />} />
    </Routes>
  </div>
)
// const rootElement = document.getElementById('app')
// if (!rootElement) throw new Error('Failed to find the root element')

// const root = ReactDOM.createRoot(rootElement as HTMLElement)

// root.render(<App />)

export default App