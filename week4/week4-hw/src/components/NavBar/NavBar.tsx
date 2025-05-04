import { navBar } from './NavBar.css';

// height 300px 정도?
const NavBar = () => {
    return (
        <nav className={navBar}>
            <section>메뉴들</section>
            <article>프로필</article>
        </nav>
    );
};

export default NavBar;
