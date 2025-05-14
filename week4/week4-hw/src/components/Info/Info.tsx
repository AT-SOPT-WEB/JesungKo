import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { infoArticle } from './Info.css';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../../fetching/axios';

const Info = () => {
    const [newNickName, setNewNickName] = useState('');
    const updateNicknameMutation = useMutation({
        mutationFn: async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error('저장된 ID 없음');
            }

            const response = await apiRequest.patch(
                '/api/v1/users',
                { nickname: newNickName },
                { headers: { userId: userId } }
            );
            return response.data;
        },
        onSuccess: () => {
            localStorage.setItem('userName', newNickName);
            alert('변경 성공');
            window.location.reload();
        },
        onError: (error) => {
            alert(error.data.data.message);
        },
    });

    return (
        <article className={infoArticle}>
            <h3>내 정보 수정하기</h3>
            <Input placeholder="새 닉네임을 입력하세요" onChange={(e) => setNewNickName(e.target.value)} />
            <Button onClick={updateNicknameMutation.mutate} disabled={false}>
                수정
            </Button>
        </article>
    );
};

export default Info;
