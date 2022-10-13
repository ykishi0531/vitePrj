import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';

export const HomeRouter = () => (
  <Routes>
    <Route path="" element={<Home />} />
  </Routes>
);
