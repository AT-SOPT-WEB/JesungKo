import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginArticle } from './Login.css';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../../fetching/axios';
import { useState } from 'react';

interface LoginRequestBody {
    loginId: string;
    password: string;
}

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginMutation = useMutation<unknown, Error, LoginRequestBody>({
        mutationFn: (requestBody) => {
            return apiRequest.post('/api/v1/auth/signin', requestBody);
        },
        onSuccess: async (data) => {
            localStorage.setItem('userId', userId);
            try {
                const userInfoResponse = await apiRequest.get('/api/v1/users/me', {
                    headers: { userId: data.data.data.userId },
                });
                localStorage.setItem('userName', userInfoResponse.data.data.nickname);
                navigate('/mypage/info');
            } catch (error) {
                console.error('사용자 정보 가져오기 실패:', error);
            }
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        },
    });

    const handleLogin = () => {
        loginMutation.mutate({ loginId: userId, password: password });
    };

    return (
        <article className={loginArticle}>
            <h1>로그인</h1>
            <Input
                onChange={(e) => {
                    setUserId(e.target.value);
                }}
                placeholder="아이디"
            />
            <Input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                placeholder="비밀번호"
                passwordSee={false}
            />
            <Button
                onClick={() => {
                    handleLogin();
                }}
                disabled={false}
            >
                로그인
            </Button>
            <Link to={'/signup'}>회원가입</Link>
        </article>
    );
};

export default Login;
