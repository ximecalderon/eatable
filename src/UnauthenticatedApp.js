import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const Section = styled.div`
  margin: 96px auto;
`;

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }

  return (
    <Section>
      <Container>
        <h1>Eatable</h1>
        {showLogin ? <LoginForm /> : <SignupForm />}
        {/* <p onClick={handleLinkClick}>
          {showLogin ? "Create Account" : "Login"}
        </p> */}
      </Container>
    </Section>
  );
}

export default UnauthenticatedApp;
