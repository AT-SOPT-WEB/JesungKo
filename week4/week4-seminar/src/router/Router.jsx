import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/pokemon/:name',
        element: <PokemonDetail />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
