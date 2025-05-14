import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { searchArticle } from './Search.css';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../../fetching/axios';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const { data: userListData, refetch } = useQuery({
        queryKey: ['user-list', searchKeyword],
        queryFn: async () => {
            const endpoint = searchKeyword ? `/api/v1/users?keyword=${searchKeyword}` : '/api/v1/users';
            const response = await apiRequest.get(endpoint);
            return response.data.data.nicknameList;
        },
        enabled: false,
    });

    const handleSearch = () => {
        setSearchKeyword(searchKeyword);
        refetch();
    };

    const userList = userListData || [];

    return (
        <article className={searchArticle}>
            <h3>유저 찾기</h3>
            <Input placeholder="새 닉네임을 입력하세요" onChange={(e) => setSearchKeyword(e.target.value)} />
            <Button onClick={handleSearch} disabled={false}>
                수정
            </Button>
            {userList.length > 0 ? (
                <ul>
                    {userList.map((user: string) => (
                        <li>{user}</li>
                    ))}
                </ul>
            ) : userListData ? (
                <p>검색 결과가 없습니다.</p>
            ) : null}
        </article>
    );
};

export default Search;
