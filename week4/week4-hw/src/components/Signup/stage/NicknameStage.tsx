import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { article, title } from '../Signup.css';
import { Dispatch, SetStateAction } from 'react';
import { SignupStage } from '../Signup';

interface NicknameProps {
    setStage: Dispatch<SetStateAction<SignupStage>>;
}

const NicknameStage = ({ setStage }: NicknameProps) => {
    return (
        <article className={article}>
            <h3 className={title}>닉네임</h3>
            <Input placeholder="닉네임을 입력해주세요" />
            <Button onClick={() => setStage('PASSWORD')} disabled={false}>
                회원가입 하기
            </Button>
        </article>
    );
};

export default NicknameStage;
