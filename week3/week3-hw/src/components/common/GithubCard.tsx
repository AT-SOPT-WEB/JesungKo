import styled from '@emotion/styled';

const GithubCard = ({ userInfo, setCardState, handleClickCard }) => {
    /**
     *
     * @param e 이벤트
     * @param func 실행시킬 함수
     * @param args 실행시킬 함수에 들어가는 인자들
     */
    const handleClickEvent = (e, func, ...args) => {
        e.stopPropagation(); // 이벤트 버블링 방지가 중복되니까 그냥 한 번에 처리!
        func(...args);
    };
    return (
        <CardWrapper onClick={(e) => handleClickEvent(e, handleClickCard, userInfo.data.html_url)}>
            <Closebtn onClick={(e) => handleClickEvent(e, setCardState, false)}>X</Closebtn>
            <ImgContainer>
                <Img src={userInfo.data.avatar_url} />
            </ImgContainer>
            <TextContainer>
                <Name>{userInfo.data.name}</Name>
                <GitId>{userInfo.data.ogin}</GitId>
                <GitBio>{userInfo.data.bio}</GitBio>
            </TextContainer>
            <BottomContainer>
                <FFContainer>
                    <FButtonTitle>follower</FButtonTitle>
                    <FButtonContent>{userInfo.data.followers}</FButtonContent>
                </FFContainer>
                <FFContainer>
                    <FButtonTitle>following</FButtonTitle>
                    <FButtonContent>{userInfo.data.following}</FButtonContent>
                </FFContainer>
            </BottomContainer>
        </CardWrapper>
    );
};

export default GithubCard;

const CardWrapper = styled.article`
    border: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: steelblue;
    width: 105%;
    height: 50vh;
    position: relative;
    align-items: center;
    justify-content: space-around;
`;

const Closebtn = styled.button`
    border-radius: 50%;
    border: none;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    justify-content: flex-end;
    right: 10px;
    z-index: 50;
`;

const ImgContainer = styled.section`
    margin-top: 10px;
`;

const Img = styled.img`
    object-fit: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid lightsteelblue;
`;

const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: black;
`;

const Name = styled.span`
    font-size: 25px;
    font-weight: 500;
`;

const GitId = styled.span``;

const GitBio = styled.span``;

const BottomContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const FFContainer = styled.button`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 50px;
    justify-content: center;
    background-color: lightsteelblue;
    border: none;
    border-radius: 10px;
    color: black;
`;

const FButtonTitle = styled.span`
    font-size: 15px;
`;

const FButtonContent = styled.span``;
