import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages/home';
import { FavoritesPage } from '../../pages/favorites';
import { MemberProfilePage } from '../../pages/member-profile';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/favorites", element: <FavoritesPage /> },
  { path: "/member/:id", element: <MemberProfilePage /> },
  { path: "*", element: <Navigate to="/" /> },
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