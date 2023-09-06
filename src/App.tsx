import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteManager from './Routes/RouteManager';
import { ComponentDrawer } from './components/ComponentDrawer/ComponentDrawer';
import ComponentNavBar from './components/NavBar/ComponentNavBar';
import { MovieProvider } from './common/MovieProvider';
import { NavigationProvider } from './common/NavigationProvider';
const App: React.FC = () => {
  return (
    <MovieProvider>
      <NavigationProvider>
        <BrowserRouter>
          <div className="flex h-[100vh] overflow-hidden bg-[#161615]">
            <ComponentDrawer />
            <div className="flex flex-col overflow-hidden flex-1">
              <ComponentNavBar />
              <RouteManager />
            </div>
          </div>
        </BrowserRouter>
      </NavigationProvider>
    </MovieProvider>
  );
};

export default App;
