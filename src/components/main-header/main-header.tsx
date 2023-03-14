import { useAppDispatch } from "../../hooks/redux";
import { useViewModeContext } from "../../providers/view-mode-provider";
import { logout } from "../../store/slices/auth-slice";
import { GenericDropdown } from "../generic-dropdown/generic-dropdown";
import styles from "./main-header.module.scss";

export function MainHeader() {
  const dispath = useAppDispatch();
  const { isMobileView, isShowingMobileMenu, setIsShowingMobileMenu } =
    useViewModeContext();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div id="logo">
          <img src="/fav.png" alt="logo" />
          <span>Quick forms</span>
        </div>
        <div>
          {isMobileView && (
            <button
              className={styles.menu}
              onClick={() => setIsShowingMobileMenu(!isShowingMobileMenu)}
            >
              <span className="material-icons">menu</span>
            </button>
          )}
          <GenericDropdown
            icon={<span className="material-icons user-icon">person</span>}
            childrenList={[
              <button
                className="list-button-item"
                key="logout-button"
                onClick={() => dispath(logout())}
              >
                Cerrar sesión
              </button>,
            ]}
          />
        </div>
      </div>
    </header>
  );
}
