import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import { loginArticle } from './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <article className={loginArticle}>
            <h1>로그인</h1>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" />
            <Button disabled={false}>로그인</Button>
            <Link to={'/'}>회원가입</Link>
        </article>
    );
};

export default Login;
