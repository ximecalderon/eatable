import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors } from "./styles/colors";
import Logo from "../src/assets/logo-eatable.png";
import { typography } from "./styles/typography";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageLogo = styled.img`
  margin: auto;
  display: block;
  margin-top: 100px;
`;

const TextDecorated = styled.p`
  margin-top: 1rem;
  ${typography.size.caption}
  ${typography.weigth.semibold}
  color: ${colors.orange};
`;

// const CustomButton = styled.button`
//   height: 40px;
//   width: 134px;
//   border: none;
//   border-bottom: 3px solid ${colors.orange};
//   cursor: pointer;
//   background-color: transparent;
//   ${typography.size.m}
//   ${typography.weigth.semibold};
//   margin-bottom: 0.25rem;
// `;

const LinkNavigate = styled.div`
  display: flex;
  gap: 5rem;
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);
  const [status, setStatus] = useState(true);

  const CustomButton = styled.button`
    height: 40px;
    width: 134px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    ${typography.size.m}
    ${typography.weigth.semibold};
    margin-bottom: 0.25rem;
  `;

  function handleButtonClick(event) {
    event.preventDefault();
    setShowLogin(event.target.textContent === "Login");
  }

  return (
    <ContainerLogin>
      <CardLogin>
        <LogoCard>
          <ImageLogo src={Logo} alt="logo" />
          <TextDecorated>Food for Everyone</TextDecorated>
        </LogoCard>
        <LinkNavigate>
          <CustomButton onClick={handleButtonClick}>Login</CustomButton>
          <CustomButton onClick={handleButtonClick}>Sign-up</CustomButton>
        </LinkNavigate>
      </CardLogin>
      {showLogin ? <LoginForm /> : <SignupForm />}
    </ContainerLogin>
  );
}

export default UnauthenticatedApp;
