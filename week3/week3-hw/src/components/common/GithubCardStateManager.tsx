import GithubCard from './GithubCard';
import Loading from './Loading';

const GithubCardStateManager = ({ userInfo, cardState, setCardState, handleClickCard }) => {
    if (userInfo.status === 'resolved' && cardState) {
        return (
            <GithubCard
                bio={userInfo.data.bio}
                img={userInfo.data.avatar_url}
                name={userInfo.data.name}
                id={userInfo.data.login}
                follower={userInfo.data.followers}
                following={userInfo.data.following}
                setCardState={setCardState}
                url={userInfo.data.html_url}
                handleClickCard={handleClickCard}
            />
        );
    } else if (userInfo.status === 'pending') {
        return <Loading></Loading>;
    } else if (userInfo.status === 'rejected') {
        return <div>없슈</div>;
    } else {
        return null;
    }
};

export default GithubCardStateManager;
