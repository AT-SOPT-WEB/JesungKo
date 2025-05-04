import { useParams } from 'react-router';
import MainContainer from '../components/MainContainer/MainContainer';

const MainPage = () => {
    const { option } = useParams();
    switch (option) {
        case 'info':
            return <MainContainer></MainContainer>;
        case 'search':
            return <MainContainer></MainContainer>;
        default:
            return <div>잘못 찾아오셨어요</div>;
    }
};

export default MainPage;
