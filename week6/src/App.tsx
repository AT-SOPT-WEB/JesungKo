import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Info from './Info';

function App() {
    const [isFetched, setIsFetched] = useState<boolean>(false);

    const getUsers = async () => {
        const response = await axios.get('https://api.atsopt-seminar4.site/api/v1/users');
        setIsFetched(false);
        return response.data.data;
    };

    const useGetUsers = () => {
        const { data, isLoading, isError } = useQuery({
            queryKey: ['user-list'],
            queryFn: getUsers,
            enabled: isFetched,
        });

        return { data, isLoading, isError };
    };

    const { data, isLoading, isError } = useGetUsers();

    if (isLoading) {
        return <p>로딩중</p>;
    }
    if (isError) {
        return <p>에러</p>;
    }
    return (
        <div>
            <button
                onClick={() => {
                    setIsFetched(true);
                }}
            >
                데이터 가져오기
            </button>
            {data && (
                <ul>
                    {data.nicknameList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            <Info />
        </div>
    );
}

export default App;
