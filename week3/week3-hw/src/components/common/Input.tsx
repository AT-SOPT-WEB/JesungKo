import styled from '@emotion/styled';

const Input = ({ placeholder }) => {
    return <InputStyle placeholder={placeholder} />;
};

export default Input;

const InputStyle = styled.input`
    width: 100%;
    height: 60px;
    border: 3px solid steelblue;
    border-radius: 25px;
    background-color: lightsteelblue;
    padding-left: 20px;
`;
