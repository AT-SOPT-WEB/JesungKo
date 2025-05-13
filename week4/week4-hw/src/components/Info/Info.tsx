import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { infoArticle } from './Info.css';

const Info = () => {
    return (
        <article className={infoArticle}>
            <h3>내 정보 수정하기</h3>
            <Input placeholder="새 닉네임을 입력하세요" />
            <Button onClick={() => {}} disabled={false}>
                수정
            </Button>
        </article>
    );
};

export default Info;
