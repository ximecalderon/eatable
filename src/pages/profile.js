import styled from "@emotion/styled";
import Button from "../components/button";
import { useAuth } from "../context/auth-context";

const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function ProfilePage() {
  const { logout } = useAuth();
  return (
    <ContainerProfile>
      <Button onClick={logout}>Logout</Button>
    </ContainerProfile>
  );
}

export default ProfilePage;
