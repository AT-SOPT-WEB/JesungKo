import { useParams } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Info from '../components/Info/Info';
import Search from '../components/Search/Search';

const MainPage = () => {
    const { option } = useParams();
    switch (option) {
        case 'info':
            return (
                <MainContainer>
                    <Info />
                </MainContainer>
            );
        case 'search':
            return (
                <MainContainer>
                    <Search />
                </MainContainer>
            );
        default:
            return <div>잘못 찾아오셨어요</div>;
    }
};

export default MainPage;
