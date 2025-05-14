import { useNavigate } from 'react-router-dom';
import { menuButton, menuSection, navBar } from './NavBar.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');
    const navigate = useNavigate();

    const handleClickLogout = () => {
        localStorage.removeItem('userName');
        setUserName('');
        navigate('/');
    };

    useEffect(() => {
        if (!localStorage.getItem('userName')) {
            alert('잘못된 접근임돠, 로그인 후에 오세요!!');
            navigate('/');
        }
    }, [navigate]);

    return (
        <nav className={navBar}>
            <section className={menuSection}>
                <button onClick={() => navigate('/mypage/info')} className={menuButton}>
                    내 정보
                </button>
                <button onClick={() => navigate('/mypage/search')} className={menuButton}>
                    SOPT 회원 조회하기
                </button>
                <button onClick={() => handleClickLogout()} className={menuButton}>
                    로그아웃
                </button>
            </section>
            <article>반갑습니다 {userName}</article>
        </nav>
    );
};

export default NavBar;
