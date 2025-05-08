import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { article, title } from '../Signup.css';
import { useNavigate } from 'react-router-dom';

const NicknameStage = () => {
    const navigate = useNavigate();
    return (
        <article className={article}>
            <h3 className={title}>닉네임</h3>
            <Input placeholder="닉네임을 입력해주세요" />
            <Button onClick={() => navigate('/')} disabled={false}>
                회원가입 하기
            </Button>
        </article>
    );
};

export default NicknameStage;
