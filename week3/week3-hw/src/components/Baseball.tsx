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

        // 리스트에 띄우기 위한 정보들
        const newAttempt = {
            value: myKey,
            result: `${strikeCnt}스트라이크 ${ballCnt}볼`,
        };

        setGameState((prev) => ({ ...prev, attempts: [newAttempt, ...prev.attempts] }));

        return { strikeCnt, ballCnt };
    };

    /**
     * 입력값 유효성 검사
     * @param {string} value 사용자 입력값
     * @returns {boolean} 유효성 여부
     */
    const validateValue = (value) => {
        // 길이 검사
        if (value.length !== 3) {
            if (value.length > 3) {
                setMessage('최대 3자리의 숫자를 입력해주세요!');
            } else {
                setMessage('3자리 숫자를 입력해주세요!');
            }
            return false;
        }

        // 숫자로만 구성되었는지 검사
        if (!/^\d+$/.test(value)) {
            setMessage('숫자만 입력해주세요!');
            return false;
        }

        // 중복된 숫자가 있는지 검사
        // Set으로 집합 만들어서 중복되는 애들 하나로 합치면 3보다 작아질 거니까
        if (new Set(value.split('')).size !== 3) {
            setMessage('서로 다른 3자리 숫자를 입력해주세요!');
            return false;
        }

        if (value === gameState.randomKey) {
            setMessage('게임 승리!!!!\n 3초 후 게임이 초기화됩니다');
            setTimeout(() => initGame(), 3000);
            return false;
        }
        // 모든 검사 통과
        return true;
    };

    /**
     * Input 함수에 참조 전달할 함수, `checkStrikeBall()` 함수 실행
     */
    const handleKeyDownEnter = () => {
        validateValue(value) ? checkStrikeBall(value) : null;
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
                {gameState.attempts.map((attempt) => (
                    <ListItem>{`${attempt.value} : ${attempt.result}`}</ListItem>
                ))}
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

const Message = styled.h3`
    display: flex;
    justify-content: center;
    white-space: pre-line;
`;

const ListContaeinr = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;
