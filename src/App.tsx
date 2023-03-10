import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "./providers/auth-provider";

function App() {
  const { isLogged } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login", { replace: true });
    }
  }, []);
  return <Outlet />;
}

export default App;
