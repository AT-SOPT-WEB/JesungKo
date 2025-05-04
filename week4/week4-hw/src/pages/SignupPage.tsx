import { Link } from 'react-router';
import MainContainer from '../components/MainContainer/MainContainer';
import Signup from '../components/Signup/Signup';

const SignupPage = () => {
    return (
        <MainContainer>
            <h1>회원가입</h1>
            <Signup />
            <section>
                <span>
                    이미 회원이신가요?<Link to={'/'}>로그인</Link>
                </span>
            </section>
        </MainContainer>
    );
};

export default SignupPage;
