import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
