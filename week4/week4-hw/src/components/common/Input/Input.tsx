import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { inputArticleStyle, inputBtn, inputStyle } from './Input.css';

interface InputProps {
    placeholder: string;
    passwordSee?: boolean;
    changeType?: Dispatch<SetStateAction<boolean>>;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, passwordSee = true, changeType, onChange }: InputProps) => {
    return (
        <article className={inputArticleStyle}>
            <input
                onChange={onChange}
                type={passwordSee ? 'text' : 'password'}
                placeholder={placeholder}
                className={inputStyle}
            />
            {changeType && (
                <button className={inputBtn} onClick={() => changeType((prev) => !prev)}>
                    👀
                </button>
            )}
        </article>
    );
};

export default Input;
