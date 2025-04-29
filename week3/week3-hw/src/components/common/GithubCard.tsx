import styled from '@emotion/styled';
import img from '../../assets/f_1.webp';

const GithubCard = () => {
    return (
        <CardWrapper>
            <Closebtn>X</Closebtn>
            <ImgContainer>
                <Img src={img} />
            </ImgContainer>
            <TextContainer>
                <Name>고제성</Name>
                <GitId>kojesung</GitId>
                <GitBio>안녕</GitBio>
            </TextContainer>
            <BottomContainer>
                <FFContainer>
                    <FButtonTitle>follower</FButtonTitle>
                    <FButtonContent>2</FButtonContent>
                </FFContainer>
                <FFContainer>
                    <FButtonTitle>following</FButtonTitle>
                    <FButtonContent>5</FButtonContent>
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
    width: 100%;
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
