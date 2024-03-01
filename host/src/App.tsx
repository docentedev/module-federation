import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

const AlertHost = lazy(() => import('alert_host/App'));
const DeliveyHost = lazy(() => import('delivery_host/App'));

const WrapperSuspense = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <AlertHost />
  </Suspense>
)

const WrapperDelSuspense = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <DeliveyHost />
  </Suspense>
)

import './index.css'

const Contact = () => <div>Contact</div>
// link to /contact, /alert/app/section1, /alert/app/section2
// style use bootstrap 5.3
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Header</h1>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => navigate('/')}>Index</button>
        <button className="btn btn-primary" onClick={() => navigate('/alert/app/section1')}>Sección 1</button>
        <button className="btn btn-primary" onClick={() => navigate('/alert/app/section2')}>Sección 2</button>
        <button className="btn btn-primary" onClick={() => navigate('/contact')}>Contact</button>
        <button className="btn btn-primary" onClick={() => navigate('/delivery/routes')}>Routes</button>
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Index</h5>
            <p className="card-text">This is the index page</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const sendEvent = (location?: any) => {
  console.log('SEND -> location', location);
  // dispatch a new custom with a callback and clear event called CHANGE_ROUTE
  const event = new CustomEvent('CHANGE_ROUTE', {
    detail: {
      datetime: new Date().toISOString(),
      path: location?.pathname,
    }
  });
  window.dispatchEvent(event);
}

const MainRoute = () => {
  const location = useLocation();

  useEffect(() => {
    sendEvent(location)
  }, [location]);

 // listen a APP_READY event
  useEffect(() => {
    const listener = (e: any) => {
      console.log('APP READY', e);
      sendEvent(location);
    }
    window.addEventListener('APP_READY', listener);
    return () => {
      window.removeEventListener('APP_READY', listener);
    }
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/delivery/*" element={<WrapperDelSuspense />} />
        <Route path="/alert/*" element={<WrapperSuspense />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

const App = () => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">App</h5>
        <p className="card-text">This is the app</p>
      </div>
    </div>
    <Router>
      <MainRoute />
    </Router>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
