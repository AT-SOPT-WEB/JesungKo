import styled from '@emotion/styled';

const Input = () => {
    return <InputStyle placeholder="Github 프로필을 검색해보세요." />;
};

export default Input;

const InputStyle = styled.input`
    width: 100%;
    height: 60px;
    border: 3px solid steelblue;
    border-radius: 20px;
    background-color: lightsteelblue;
    padding-left: 20px;
`;
