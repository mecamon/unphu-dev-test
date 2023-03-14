import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "./hooks/redux";
import { useViewModeContext } from "./providers/view-mode-provider";

function App() {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const { setIsMobileView } = useViewModeContext();
  const navigate = useNavigate();

  function onWindowsResize(e: any) {
    handleMobileView(e.target.innerWidth);
  }

  function handleMobileView(innerWidth: number) {
    if (innerWidth <= 1240) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }

  useEffect(() => {
    handleMobileView(window.innerWidth);
    window.addEventListener("resize", onWindowsResize);
    return () => {
      window.removeEventListener("resize", onWindowsResize);
    };
  }, []);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [isLogged]);
  return <Outlet />;
}

export default App;
