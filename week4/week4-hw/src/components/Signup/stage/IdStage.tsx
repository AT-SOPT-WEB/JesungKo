import { Dispatch, SetStateAction } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { article, title } from '../Signup.css';
import { SignupStage } from '../Signup';

interface IdStageProps {
    setStage: Dispatch<SetStateAction<SignupStage>>;
}

const IdStage = ({ setStage }: IdStageProps) => {
    return (
        <article className={article}>
            <h3 className={title}>아이디</h3>
            <Input placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)" />
            <Button onClick={() => setStage('NICKNAME')} disabled={false}>
                다음
            </Button>
        </article>
    );
};

export default IdStage;
