import React, { ReactNode, useContext, useEffect } from "react";

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  function login() {
    //hardcoding a token in absence of a proper backend
    localStorage.setItem("token", "q2134qwedadassdasdafa");
    setIsLogged(true);
  }

  function logout() {
    localStorage.removeItem("token");
    setIsLogged(false);
  }

  const contextValue = React.useMemo(
    () => ({
      isLogged,
      login,
      logout,
    }),
    [isLogged]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("AuthContext has to be initialized before use it!");
  }
  return context;
}

interface AuthContextType {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}
