import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { article, title } from '../Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../../../fetching/axios';

const NicknameStage = () => {
    const navigate = useNavigate();
    const [nickNameValue, setNickNameValue] = useState<string>('');

    const getSignupInfo = () => {
        const id = sessionStorage.getItem('signup-id');
        const pw = sessionStorage.getItem('signup-pw');
        return { id, pw };
    };

    const signupMutation = useMutation({
        mutationFn: (requestBody) => {
            return apiRequest.post('/api/v1/auth/signup', requestBody);
        },
        onSuccess: async (data) => {
            if (data.data.success === true) {
                alert(`${data.data.data.nickname}님 방가요`);
                navigate('/');
                return;
            } else {
                alert(data.data.message);
                return;
            }
        },
        onError: (error) => {
            console.error('회원가입 실패', error);
        },
    });

    const handleButtonClick = () => {
        const { id, pw } = getSignupInfo();
        signupMutation.mutate({ loginId: id, password: pw, nickname: nickNameValue });
    };

    return (
        <article className={article}>
            <h3 className={title}>닉네임</h3>
            <Input
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => {
                    setNickNameValue(e.target.value);
                }}
            />
            <Button onClick={() => handleButtonClick()} disabled={nickNameValue === ''}>
                회원가입 하기
            </Button>
        </article>
    );
};

export default NicknameStage;
