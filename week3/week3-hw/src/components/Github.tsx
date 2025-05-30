import Input from './common/Input';
import styled from '@emotion/styled';
import RecentSearchCard from './common/RecentSearchCard';
import { useEffect, useState } from 'react';
import GithubCardStateManager from './common/GithubCardStateManager';

const Github = () => {
    const [value, setValue] = useState('');
    const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
    const [searchKeyList, setSearchKeyList] = useState([]);
    const [cardState, setCardState] = useState(false);

    // 로컬 스토리지에 있으면 가져오기(있을 때만)
    useEffect(() => {
        const savedList = localStorage.getItem('search-list');
        if (savedList) {
            const parsedList = JSON.parse(savedList);
            setSearchKeyList(parsedList);
        }
    }, []);

    // 최근 검색어 배열이 빈 배열이 아닐 때만 로컬 스토리지에 저장
    // 빈 배열일 땐 뺸 이유는 첫 렌더링일 때 빈 배열 상태인데 이때 넣으면 [] 상태로 스토리지에 저장됨!
    useEffect(() => {
        if (searchKeyList.length > 0) {
            localStorage.setItem('search-list', JSON.stringify(searchKeyList));
        }
    }, [searchKeyList]);

    const getUserInfo = async (user) => {
        setUserInfo({ status: 'pending', data: null });
        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setUserInfo({ status: 'resolved', data });
        } catch {
            setUserInfo({ status: 'rejected', data: null });
        }
    };

    // 리스트 업데이트 하는데 가장 최근 항목이 오른쪽으로! + 3개 제한
    const updateSearchList = (value) => {
        if (!searchKeyList.includes(value)) {
            if (searchKeyList.length >= 3) {
                setSearchKeyList((prev) => {
                    const tmpList = [...prev].slice(1);
                    return [...tmpList, value];
                });
            } else {
                setSearchKeyList((prev) => [...prev, value]);
            }
        }
    };

    // 엔터 키 누르면 작동시킬 함수
    const handleInputKeyDown = () => {
        updateSearchList(value); // 최근 검색어 배열 최신화하고
        getUserInfo(value); // 카드에 띄울 유저 정보 바꾸고
        setCardState(true); // 카드 띄우기
    };

    const handleClickCard = (url) => {
        window.open(`${url}`, '_blank');
    };

    return (
        <GithubPageWrapper>
            <Input setValue={setValue} handleKeyDownEnter={handleInputKeyDown} placeholder="깃헙 프로필 검색" />
            <SearchKeyContainer>
                <SearchKeySpan>최근 검색어</SearchKeySpan>
                <ListContainer>
                    {searchKeyList.map((searchKey) => (
                        <RecentSearchCard
                            key={searchKey}
                            searchKey={searchKey}
                            onClick={getUserInfo}
                            setSearchKeyList={setSearchKeyList}
                        >
                            {searchKey}
                        </RecentSearchCard>
                    ))}
                </ListContainer>
            </SearchKeyContainer>
            <GithubCardStateManager
                userInfo={userInfo}
                cardState={cardState}
                setCardState={setCardState}
                handleClickCard={handleClickCard}
            />
        </GithubPageWrapper>
    );
};

export default Github;

const GithubPageWrapper = styled.main`
    width: 25vw;
    display: flex;
    height: calc(100vh - 50px);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const SearchKeyContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SearchKeySpan = styled.span`
    justify-content: flex-start;
`;

const ListContainer = styled.section`
    display: flex;
    width: 100%;
    gap: 8px;
`;
