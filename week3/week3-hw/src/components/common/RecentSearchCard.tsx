import styled from '@emotion/styled';

const RecentSearchCard = () => {
    return (
        <ItemContainer>
            <Id>kojesung</Id>
            <CloseBtn>X</CloseBtn>
        </ItemContainer>
    );
};

export default RecentSearchCard;

const ItemContainer = styled.section`
    min-width: 15%;
    height: 30px;
    border-radius: 100px;
    border: 2px solid lightsteelblue;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
`;

const Id = styled.span``;

const CloseBtn = styled.button`
    background: none;
    border: none;
`;
