import GithubCard from './common/GithubCard';
import Input from './common/Input';
import styled from '@emotion/styled';
import RecentSearchCard from './common/RecentSearchCard';

const Github = () => {
    return (
        <GithubPageWrapper>
            <Input placeholder="깃헙 프로필 검색" />
            <SearchKeyContainer>
                <SearchKeySpan>최근 검색어</SearchKeySpan>
                <ListContainer>
                    <RecentSearchCard></RecentSearchCard>
                </ListContainer>
            </SearchKeyContainer>
            <GithubCard></GithubCard>
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
