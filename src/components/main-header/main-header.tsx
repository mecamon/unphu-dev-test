import { GenericDropdown } from "../generic-dropdown/generic-dropdown";
import styles from "./main-header.module.scss";

export function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div id="logo">
          <img src="/fav.png" alt="logo" />
          <span>Quick forms</span>
        </div>
        <GenericDropdown
          icon={<span className="material-icons user-icon">person</span>}
          childrenList={[
            <button className="list-button-item" key="logout-button">
              Log out
            </button>,
          ]}
        />
      </div>
    </header>
  );
}
