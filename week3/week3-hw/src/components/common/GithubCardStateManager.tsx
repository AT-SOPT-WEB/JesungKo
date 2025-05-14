import GithubCard from './GithubCard';
import Loading from './Loading';

const GithubCardStateManager = ({ userInfo, cardState, setCardState, handleClickCard }) => {
    if (userInfo.status === 'resolved' && cardState) {
        return <GithubCard userInfo={userInfo} setCardState={setCardState} handleClickCard={handleClickCard} />;
    } else if (userInfo.status === 'pending') {
        return <Loading></Loading>;
    } else if (userInfo.status === 'rejected') {
        return <div>없슈</div>;
    } else {
        return null;
    }
};

export default GithubCardStateManager;
