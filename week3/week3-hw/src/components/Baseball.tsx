import styled from '@emotion/styled';
import Input from './common/Input';
import ListItem from './common/ListItem';

const Baseball = () => {
    return (
        <BaseballPageWrapper>
            <Input placeholder="3자리 숫자 입력" />
            <Message>n스트라이크 n볼</Message>
            <ListContaeinr>
                <ListItem></ListItem>
            </ListContaeinr>
        </BaseballPageWrapper>
    );
};

export default Baseball;

const BaseballPageWrapper = styled.main`
    width: 25vw;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Message = styled.h3``;

const ListContaeinr = styled.article`
    width: 100%;
`;
