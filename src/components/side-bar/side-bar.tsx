import { ReactNode } from "react";
import styles from "./side-bar.module.scss";

export function SideBar({ children }: { children: ReactNode }) {
  return (
    <aside className={styles.container}>
      <h2>Menu</h2>
      {children}
    </aside>
  );
}
