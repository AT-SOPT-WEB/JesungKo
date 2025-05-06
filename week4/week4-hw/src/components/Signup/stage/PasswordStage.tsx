import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { article, title } from '../Signup.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordStage = () => {
    const navigate = useNavigate();
    const [passwordSee, setPasswordSee] = useState(false);
    return (
        <article className={article}>
            <h3 className={title}>비밀번호</h3>
            <Input changeType={setPasswordSee} passwordSee={passwordSee} placeholder="비밀번호를 입력해주세요" />
            <Input placeholder="비밀번호 확인" />
            <Button onClick={() => navigate('/')} disabled={false}>
                다음
            </Button>
        </article>
    );
};

export default PasswordStage;
