import { inputStyle } from './Input.css';

interface InputProps {
    placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
    return <input placeholder={placeholder} className={inputStyle} />;
};

export default Input;
