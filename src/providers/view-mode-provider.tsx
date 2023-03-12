import React, { ReactNode, useContext } from "react";

const ViewModeContext = React.createContext<ViewModeContextType>(null!);

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [isShowingMobileMenu, setIsShowingMobileMenu] = React.useState(false);

  const contextValue = React.useMemo(
    () => ({
      isMobileView,
      setIsMobileView,
      isShowingMobileMenu,
      setIsShowingMobileMenu,
    }),
    [isMobileView, isShowingMobileMenu]
  );

  return (
    <ViewModeContext.Provider value={contextValue}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewModeContext() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw Error("ViewModeContext has to be initialized before use it!");
  }
  return context;
}

interface ViewModeContextType {
  isMobileView: boolean;
  setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  isShowingMobileMenu: boolean;
  setIsShowingMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
