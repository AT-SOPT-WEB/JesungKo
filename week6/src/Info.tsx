import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const Info = () => {
    const [inputValue, setInputValue] = useState('');
    const queryClient = useQueryClient();
    const userId = 100;

    const getMyNickname = async (userId: number) => {
        const response = await axios.get('https://api.atsopt-seminar4.site/api/v1/users/me', {
            headers: {
                userId: userId,
            },
        });
        return response.data.data;
    };

    const patchNickName = async () => {
        await axios.patch(
            'https://api.atsopt-seminar4.site/api/v1/users',
            { nickname: inputValue },
            {
                headers: { userId: userId },
            }
        );
    };

    const { data, isLoading } = useQuery({
        queryKey: [userId, 'getNickname'],
        queryFn: () => getMyNickname(userId),
    });

    const { mutate } = useMutation({
        mutationFn: patchNickName,
        onSuccess: () => {
            queryClient.invalidateQueries([userId, 'getNickname']);
        },
    });

    if (isLoading) return <div>로딩 중...</div>;

    return (
        <section>
            내 정보:
            {data && <p> {data.nickname}</p>}
            <div>
                <p>새 닉넴</p>
                <input onChange={(e) => setInputValue(e.target.value)} />
                <button
                    onClick={() => {
                        mutate();
                    }}
                >
                    바꾸기
                </button>
            </div>
        </section>
    );
};

export default Info;
