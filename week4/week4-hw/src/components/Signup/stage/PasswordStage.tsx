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
    return (
        <article className={article}>
            <h3 className={title}>비밀번호</h3>
            <Input changeType={setPasswordSee} passwordSee={passwordSee} placeholder="비밀번호를 입력해주세요" />
            <Input placeholder="비밀번호 확인" />
            <Button onClick={() => setStage('NICKNAME')} disabled={false}>
                다음
            </Button>
        </article>
    );
};

export default PasswordStage;
