import HomePage from "./pages/home";
import { useAuth } from "./context/auth-context";

function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <>
      <HomePage />
      <p onClick={logout}> Log out </p>
    </>
  );
}

export default AuthenticatedApp;
