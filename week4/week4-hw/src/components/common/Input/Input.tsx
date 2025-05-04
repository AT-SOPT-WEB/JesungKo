import { Dispatch, SetStateAction } from 'react';
import { inputArticleStyle, inputBtn, inputStyle } from './Input.css';

interface InputProps {
    placeholder: string;
    passwordSee?: boolean;
    changeType?: Dispatch<SetStateAction<boolean>>;
}

const Input = ({ placeholder, passwordSee, changeType }: InputProps) => {
    return (
        <article className={inputArticleStyle}>
            <input type={passwordSee ? 'text' : 'password'} placeholder={placeholder} className={inputStyle} />
            {changeType && (
                <button className={inputBtn} onClick={() => changeType((prev) => !prev)}>
                    👀
                </button>
            )}
        </article>
    );
};

export default Input;
