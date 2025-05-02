import styled from '@emotion/styled';
import { useState } from 'react';

const Input = ({ placeholder, handleKeyDownEnter, setValue, disable = false }) => {
    // Enter 눌렀을 때
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleKeyDownEnter();
        }
    };

    return (
        <InputStyle
            disabled={disable}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
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
