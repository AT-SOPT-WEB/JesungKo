import styled from '@emotion/styled';
import loadingImg from '../../assets/Spinner@1x-1.0s-200px-200px.gif';

const Loading = () => {
    return (
        <LoadingArticleWrapper>
            <img src={loadingImg} />
        </LoadingArticleWrapper>
    );
};

export default Loading;

const LoadingArticleWrapper = styled.article``;
