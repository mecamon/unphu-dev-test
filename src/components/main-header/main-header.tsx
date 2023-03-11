import { GenericDropdown } from "../generic-dropdown/generic-dropdown";
import mainHeader from "./main-header.module.scss";

export function MainHeader() {
  return (
    <header className={mainHeader.header}>
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
    </header>
  );
}
