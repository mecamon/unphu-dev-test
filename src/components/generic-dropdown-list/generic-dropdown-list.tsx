import { useEffect, useState } from "react";
import { makeClickOutside } from "../../utils/click-outside-element";
import { progresiveCount } from "../../utils/progresive-count";
import styles from "./generic-dropdown-list.module.scss";

export function GenericDropdownList({
  triggerID,
  onClickOutsideHandler,
  elements,
}: Props) {
  const [containerID] = useState(progresiveCount().toString());

  useEffect(() => {
    const clickOutside = makeClickOutside(
      containerID,
      triggerID,
      onClickOutsideHandler
    );
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div
      className={styles.container}
      id={containerID}
      data-testid="dropdown-list"
    >
      {elements}
    </div>
  );
}

interface Props {
  triggerID: string;
  onClickOutsideHandler: () => void;
  elements: JSX.Element[];
}
