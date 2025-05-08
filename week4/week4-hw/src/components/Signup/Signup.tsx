import { useState } from 'react';
import IdStage from './stage/IdStage';
import NicknameStage from './stage/NicknameStage';
import PasswordStage from './stage/PasswordStage';

export type SignupStage = 'ID' | 'NICKNAME' | 'PASSWORD';

const Signup = () => {
    const [stage, setStage] = useState<SignupStage>('ID');

    switch (stage) {
        case 'ID':
            return <IdStage setStage={setStage} />;
        case 'PASSWORD':
            return <PasswordStage setStage={setStage} />;
        case 'NICKNAME':
            return <NicknameStage />;
    }
};

export default Signup;
