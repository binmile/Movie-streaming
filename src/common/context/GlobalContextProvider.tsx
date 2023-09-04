import { FC } from "react";
import { NavigationProvider } from "./NavigationContext/NavigationProvider";
import { MovieProvider } from "./MovieContext/MovieProvider";

export const GlobalContextProvider: FC<ProviderType> = ({ children }) => {
  return (
    <NavigationProvider>
      <MovieProvider>{children}</MovieProvider>
    </NavigationProvider>
  );
};
