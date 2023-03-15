import { ReactNode } from "react";
import { useViewModeContext } from "../../providers/view-mode-provider";
import styles from "./side-bar.module.scss";

export function SideBar({ children }: { children: ReactNode }) {
  const { isShowingMobileMenu, isMobileView, setIsShowingMobileMenu } =
    useViewModeContext();

  return (
    <div>
      <aside
        className={
          !isMobileView
            ? styles.container
            : isShowingMobileMenu
            ? `${styles.container} + ${styles.visible}`
            : `${styles.container} + ${styles.hidden}`
        }
      >
        <h2 className={styles.title}>Menu</h2>
        <hr className={styles.hr} />
        {isMobileView && (
          <button
            className={styles.close}
            onClick={() => setIsShowingMobileMenu(false)}
          >
            <span className="material-icons">close</span>
          </button>
        )}
        {children}
        <footer>
          <p>
            Esto es una prueba técnica para la posicíon de desarrollador
            Front-end.
          </p>
        </footer>
      </aside>
    </div>
  );
}
