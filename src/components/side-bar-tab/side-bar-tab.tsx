import styles from "./side-bar-tab.module.scss";

export function SideBarTab({
  text,
  iconText,
  isSelected = false,
  onClick,
}: Props) {
  return (
    <button
      data-testid="tab-button"
      className={isSelected ? styles.containerSelected : styles.container}
      onClick={() => onClick()}
    >
      <span className={isSelected ? styles.textSelected : styles.text}>
        {text}
      </span>
      <span
        className={`material-icons button-icon ${
          isSelected ? styles.iconSelected : styles.icon
        }`}
      >
        {iconText}
      </span>
    </button>
  );
}

interface Props {
  text: string;
  iconText: string;
  isSelected?: boolean;
  onClick: () => void;
}
