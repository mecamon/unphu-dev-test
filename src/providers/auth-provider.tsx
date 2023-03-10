import React, { ReactNode, useContext } from "react";

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  const contextValue = React.useMemo(
    () => ({
      isLogged,
      setIsLogged,
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
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}
