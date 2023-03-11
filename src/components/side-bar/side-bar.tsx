import { ReactNode } from "react";
import styles from "./side-bar.module.scss";

export function SideBar({ children }: { children: ReactNode }) {
  return (
    <div>
      <aside className={styles.container}>
        <h2>Menu</h2>
        {children}
        <footer>
          <p>
            This is a placeholder for the footer. This is a placeholder for the
            footer. This is a placeholder for the footer. This is a placeholder
            for the footer.
          </p>
        </footer>
      </aside>
    </div>
  );
}
