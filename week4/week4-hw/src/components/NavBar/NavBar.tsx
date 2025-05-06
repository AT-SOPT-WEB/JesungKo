import { useNavigate } from 'react-router-dom';
import { navBar } from './NavBar.css';

const NavBar = () => {
    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();
    if (!userName) {
        alert('잘못된 접근임돠');
        navigate(-1);
    }
    return (
        <nav className={navBar}>
            <section>메뉴들</section>
            <article>반갑습니다 {userName}</article>
        </nav>
    );
};

export default NavBar;
