import GithubCard from './common/GithubCard';
import Input from './common/Input';
import styled from '@emotion/styled';

const Github = () => {
    return (
        <GithubPageWrapper>
            <Input />
            <GithubCard></GithubCard>
        </GithubPageWrapper>
    );
};

export default Github;

const GithubPageWrapper = styled.main`
    display: flex;
    height: calc(100vh - 50px);
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
