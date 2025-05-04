import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MainLayout from './layouts/MainLayout';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/signup', element: <SignupPage /> },
    {
        path: 'mypage',
        element: <MainLayout />,
        children: [{ path: ':option', element: <MainPage /> }],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
