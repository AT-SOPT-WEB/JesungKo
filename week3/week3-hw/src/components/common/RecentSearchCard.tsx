import styled from '@emotion/styled';

const RecentSearchCard = ({ children, searchKey, onClick, setSearchKeyList }) => {
    const handleRemove = (e) => {
        e.stopPropagation();
        setSearchKeyList((prev) => prev.filter((item) => item !== searchKey));
    };
    return (
        <ItemContainer onClick={() => onClick(searchKey)}>
            <Id>{children}</Id>
            <CloseBtn onClick={handleRemove}>X</CloseBtn>
        </ItemContainer>
    );
};

export default RecentSearchCard;

const ItemContainer = styled.section`
    min-width: 20%;
    height: 30px;
    border-radius: 100px;
    border: 2px solid lightsteelblue;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Id = styled.span``;

const CloseBtn = styled.button`
    background: none;
    border: none;
`;
