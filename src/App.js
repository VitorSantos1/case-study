import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { AppProvider } from './AppContext';
import AppRoutes from './routes/AppRoutes';
import NavBarComponent from './pages/components/NavBarComponent';

const App = (props) => {
  return (
    <BrowserRouter> 
      <AppProvider>
        <NavBarComponent />
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>     
  );
}

export default App;
