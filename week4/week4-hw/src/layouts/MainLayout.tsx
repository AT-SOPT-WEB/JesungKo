import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default MainLayout;
