import styled from '@emotion/styled';

const ListItem = ({ children }) => {
    return <ListItemContainer>{children}</ListItemContainer>;
};

export default ListItem;

const ListItemContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    border: 2px solid steelblue;
    height: 40px;
`;
