import styled from '@emotion/styled';
import Input from './common/Input';
import ListItem from './common/ListItem';
import { useEffect, useState } from 'react';

const Baseball = () => {
    const [myKey, setMyKey] = useState('');
    const [randomKey, setRandomKey] = useState('');
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);

    // 무작위 3자리 수 만들고
    const getNewRandomKey = () => {
        const numbers = Array.from({ length: 10 }, (_, i) => i);

        // 배열을 섞고 앞에서 3개 선택
        const shuffled = numbers.sort(() => Math.random() - 0.5).slice(0, 3);

        // 문자열로 변환하여 반환
        return shuffled.join('');
    };

    /**
     *
     * @param randomKey 랜덤으로 생성된 정답
     * @param myKey 사용자가 입력한 값
     * @returns 결과 ex) 0스트라이크 1볼
     */
    const checkStrikeBall = (randomKey, myKey) => {
        let strikeCnt = 0;
        let ballCnt = 0;

        for (let i = 0; i < randomKey.length; i++) {
            if (randomKey[i] === myKey[i]) {
                strikeCnt++;
            }
            // 볼 카운트(다른 위치에라도 포함)
            else if (randomKey.includes(myKey[i])) {
                ballCnt++;
            }
        }

        setStrike(strikeCnt);
        setBall(ballCnt);
    };

    useEffect(() => {
        setRandomKey(getNewRandomKey());
    }, []);

    /**
     * Input 함수에 참조 전달할 함수, `checkStrikeBall()` 함수 실행
     */
    const handleKeyDownEnter = () => {
        checkStrikeBall(randomKey, myKey);
    };

    return (
        <BaseballPageWrapper>
            <Input placeholder="3자리 숫자 입력" handleKeyDownEnter={handleKeyDownEnter} setValue={setMyKey} />
            <Message>{`${strike}스트라이크${ball}볼`}</Message>
            <ListContaeinr>
                <ListItem></ListItem>
            </ListContaeinr>
        </BaseballPageWrapper>
    );
};

export default Baseball;

const BaseballPageWrapper = styled.main`
    width: 25vw;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Message = styled.h3``;

const ListContaeinr = styled.article`
    width: 100%;
`;
