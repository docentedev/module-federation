import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Hi = () => <div>Hi</div>
const Bye = () => <div>Bye</div>

// listen a CHANGE_ROUTE event
const useListen = () => {
    React.useEffect(() => {
        console.log('useListen');
        const listener = (e: any) => {
            console.log('listener', e);
        }
        window.addEventListener('CHANGE_ROUTE', listener);
        return () => {
            window.removeEventListener('CHANGE_ROUTE', listener);
        }
    });
}

const sendAppReady = (location?: any) => {
    console.log('SEND -> location', location);
    // dispatch a new custom with a callback and clear event called CHANGE_ROUTE
    const event = new CustomEvent('APP_READY', {
      detail: {
        datetime: new Date().toISOString(),
      }
    });
    window.dispatchEvent(event);
  }

const DeliveryIndex = () => {
    useListen();
    const navitage = useNavigate();

    useEffect(() => {
        sendAppReady();
    }, []);

    return (
        <div>
            <h1>Delivery Index</h1>
            <button onClick={() => navitage('/delivery/routes/hi')}>Hi</button>
            <button onClick={() => navitage('/delivery/routes/bye')}>Bye</button>
            <button onClick={() => navitage('/')}>Index</button>
            <button onClick={() => navitage('/alert/app/section1')}>Alert App</button>
            <Routes>
                <Route path="/hi" element={<Hi />} />
                <Route path="/bye" element={<Bye />} />
            </Routes>
        </div>
    );
}
export default DeliveryIndex;