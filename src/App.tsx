import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useViewModeContext } from "./providers/view-mode-provider";
import { checkLoginState } from "./store/slices/auth-slice";

function App() {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const dispath = useAppDispatch();
  const { setIsMobileView } = useViewModeContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispath(checkLoginState());
  }, []);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [isLogged]);

  useEffect(() => {
    handleMobileView(window.innerWidth);
    window.addEventListener("resize", onWindowsResize);
    return () => {
      window.removeEventListener("resize", onWindowsResize);
    };
  }, []);

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

  return <Outlet />;
}

export default App;
