import styled from '@emotion/styled';

const Header = ({ setMode }) => {
    return (
        <HeaderWrapper>
            <h1>숫자야구 || 깃허브 검색</h1>
            <article>
                <Button onClick={() => setMode('github')}>깃허브페이지로</Button>
                <Button onClick={() => setMode('baseball')}>숫자야구페이지로</Button>
            </article>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    width: 100vw;
    display: flex;
    background-color: lightsteelblue;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    border: none;
    width: 150px;
    height: 50px;
    margin: 10px;
    border-radius: 10px;
    :hover {
        background-color: lightgray;
    }
`;
