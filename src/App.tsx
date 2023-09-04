import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteManager from "./Routes/RouteManager";
import { GlobalContextProvider } from "./common/context/GlobalContextProvider";
import { Drawer } from "./common/components/Drawer/Drawer";
import NavBar from "./common/components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <div className="flex h-[100vh] overflow-hidden bg-[#161615]">
          <Drawer />
          <div className="flex flex-col overflow-hidden flex-1">
            <NavBar />
            <RouteManager />
          </div>
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
