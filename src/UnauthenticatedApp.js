import styled from '@emotion/styled';
import { useState } from 'react';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';
import { colors } from './styles/colors';
import Logo from '../src/assets/logo-eatable.png';

const ContainerLogin = styled.div`
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const CardLogin = styled.div`
    width: 100%;
    height: 382px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white};
    border-radius: 30px;
`;

const LogoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageLogo = styled.img`
    margin: auto;
    display: block;
    margin-top: 100px;
`;

const LinkNavigate = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8rem;
`;

function UnauthenticatedApp() {
    const [showLogin, setShowLogin] = useState(true);

    function handleLinkClick(event) {
        event.preventDefault();
        setShowLogin(!showLogin);
    }

    return (
        <ContainerLogin>
            <CardLogin>
                <LogoCard>
                    <ImageLogo src={Logo} alt='logo' />
                </LogoCard>
                <LinkNavigate>
                    <p onClick={handleLinkClick}>
                        {showLogin ? 'Login' : 'Signup'}
                    </p>
                    <p onClick={handleLinkClick}>
                        {showLogin ? 'Signup' : 'Login'}
                    </p>
                </LinkNavigate>
            </CardLogin>
            {showLogin ? <LoginForm /> : <SignupForm />}
        </ContainerLogin>
    );
}

export default UnauthenticatedApp;
