import GithubCard from './common/GithubCard';
import Input from './common/Input';
import styled from '@emotion/styled';
import RecentSearchCard from './common/RecentSearchCard';
import { useState } from 'react';
import Loading from './common/Loading';

const Github = () => {
    const [value, setValue] = useState('');
    const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
    const [searchKeyList, setSearchKeyList] = useState([]);
    const [cardState, setCardState] = useState(false);

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

    const updateSearchList = (value) => {
        if (!searchKeyList.includes(value)) {
            setSearchKeyList((prev) => [value, ...prev]);
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
            {userInfo.status === 'resolved' && cardState && (
                <GithubCard
                    bio={userInfo.data.bio}
                    img={userInfo.data.avatar_url}
                    name={userInfo.data.name}
                    id={userInfo.data.login}
                    follower={userInfo.data.followers}
                    following={userInfo.data.following}
                    setCardState={setCardState}
                    url={userInfo.data.html_url}
                    handleClickCard={handleClickCard}
                ></GithubCard>
            )}
            {userInfo.status === 'rejected' && <div>없슈</div>}
            {userInfo.status === 'pending' && <Loading></Loading>}
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
`;
