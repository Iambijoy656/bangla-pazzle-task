import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Route/Routes';
import Aos from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    // aos library
    useEffect(() => {
      Aos.init();
    }, [])
  return (
    <div className="">
    <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
