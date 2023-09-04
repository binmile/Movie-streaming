import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesConfig } from "../RouteConfig";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route {...RoutesConfig.Home} />
      <Route {...RoutesConfig.Favorite} />
      <Route {...RoutesConfig.Trending} />
    </Routes>
  );
};

export default PublicRoutes;
