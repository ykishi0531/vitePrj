import { useRoutes } from 'react-router-dom';
import { LinkButton } from '../components/Elements/LinkButton';
import { HomeRoutes } from './home';

export const AppRoutes = () => {
  const routes = HomeRoutes;
  const commonRoutes = [{ path: '/', element: <Test /> }];
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};

const Test = () => {
  return <LinkButton to="/home">home</LinkButton>;
};
