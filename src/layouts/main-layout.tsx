import { ReactNode } from "react";
import { MainHeader } from "../components/main-header/main-header";
import styles from "./main-layout.module.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
