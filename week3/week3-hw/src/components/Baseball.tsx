import styled from '@emotion/styled';
import Input from './common/Input';
import ListItem from './common/ListItem';
import { useEffect, useState } from 'react';

const GAME_STATUS = {
    PLAYING: 'playing',
    WON: 'won',
    LOSE: 'LOSE',
};

const Baseball = () => {
    // 게임 상태 관리
    const [gameState, setGameState] = useState({
        randomKey: '',
        attempts: [],
        status: GAME_STATUS.PLAYING,
    });

    const [message, setMessage] = useState('');
    const [value, setValue] = useState('');

    /**
     * 무작위 세자리 숫자를 만들고 반환하는 함수
     * @returns 문자열로 된 세자리 숫자
     * @example '123'
     */
    const getNewRandomKey = () => {
        const numbers = Array.from({ length: 10 }, (_, i) => i);
        const shuffled = numbers.sort(() => Math.random() - 0.5).slice(0, 3);
        return shuffled.join('');
    };

    /**
     * 게임 초기화 시키는 함수
     */
    const initGame = () => {
        setGameState({
            randomKey: getNewRandomKey(),
            attempts: [],
            status: GAME_STATUS.PLAYING,
        });

        setMessage('');
    };

    /**
     *
     * @param randomKey 랜덤으로 생성된 정답
     * @param myKey 사용자가 입력한 값
     * @returns setStrike(스트라이크 카운트), setBall(볼 카운트)
     */
    const checkStrikeBall = (myKey) => {
        const { randomKey } = gameState;
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

        setMessage(`${strikeCnt}스트라이크 ${ballCnt}볼`);

        return { strikeCnt, ballCnt };
    };

    /**
     * Input 함수에 참조 전달할 함수, `checkStrikeBall()` 함수 실행
     */
    const handleKeyDownEnter = () => {
        checkStrikeBall(value);
    };

    // 첫 렌더링 때 게임 초기화 시키기
    useEffect(() => {
        initGame();
    }, []);

    return (
        <BaseballPageWrapper>
            <Input placeholder="3자리 숫자 입력" handleKeyDownEnter={handleKeyDownEnter} setValue={setValue} />
            <Message>{message}</Message>
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
