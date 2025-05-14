import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { article, title } from '../Signup.css';

import { Dispatch, SetStateAction, useState } from 'react';
import { SignupStage } from '../Signup';

interface PasswordProps {
    setStage: Dispatch<SetStateAction<SignupStage>>;
}

const PasswordStage = ({ setStage }: PasswordProps) => {
    const [passwordSee, setPasswordSee] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordValueCheck, setPasswordValueCheck] = useState('');

    const isBtnDisabled = () => {
        if (passwordValue === passwordValueCheck) {
            if (passwordValue === '') {
                return true;
            }
            return false;
        }
        return true;
    };

    const setPasswordtoStorage = () => {
        sessionStorage.setItem('signup-pw', passwordValue);
    };

    const handleButtonClick = () => {
        setPasswordtoStorage();
        setStage('NICKNAME');
    };

    return (
        <article className={article}>
            <h3 className={title}>비밀번호</h3>
            <Input
                onChange={(e) => setPasswordValue(e.target.value)}
                changeType={setPasswordSee}
                passwordSee={passwordSee}
                placeholder="비밀번호를 입력해주세요"
            />
            <Input placeholder="비밀번호 확인" onChange={(e) => setPasswordValueCheck(e.target.value)} />
            <Button onClick={handleButtonClick} disabled={isBtnDisabled()}>
                다음
            </Button>
        </article>
    );
};

export default PasswordStage;
