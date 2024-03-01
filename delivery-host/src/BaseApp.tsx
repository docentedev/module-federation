import React, { Suspense, lazy } from "react"

import { Route, Routes } from 'react-router-dom';

const DeliveryRoutes = lazy(() => import('delivery_routes/App'));

const DeliveryRoutesSuspense = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <DeliveryRoutes />
  </Suspense>
)

const Hi = () => <div>Hi</div>

const BaseApp = () => {
    return (
        <div>
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route path="/routes/*" element={<DeliveryRoutesSuspense />} />
                    {/* otras rutas aquí */}
                </Routes>
            </Suspense>
        </div>
    )
}

export default BaseApp
