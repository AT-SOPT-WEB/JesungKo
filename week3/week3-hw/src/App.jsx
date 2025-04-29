import { useState } from 'react';
import Github from './components/Github';
import Baseball from './components/Baseball';
import Header from './components/Header';
import styled from '@emotion/styled';

function App() {
    const [uiMode, setUiMode] = useState('github');
    return (
        <PageWrapper>
            <Header setMode={setUiMode} />
            {uiMode === 'github' ? <Github /> : <Baseball />}
        </PageWrapper>
    );
}

export default App;

const PageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
