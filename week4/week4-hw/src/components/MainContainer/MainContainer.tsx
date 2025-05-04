import React from 'react';
import { loginContainer, mypageContainer } from './MainContainer.css';
import { useLocation } from 'react-router';

interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    return <main className={isLoginPage ? loginContainer : mypageContainer}>{children}</main>;
};

export default MainContainer;
