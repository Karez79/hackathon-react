import { Routes, Route } from 'react-router-dom';
import { HomePage, FavoritesPage, MemberProfilePage, NotFoundPage } from '../../pages';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/favorites", element: <FavoritesPage /> },
  { path: "/member/:id", element: <MemberProfilePage /> },
  { path: "*", element: <NotFoundPage /> }
];

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};