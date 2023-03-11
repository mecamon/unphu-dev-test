import { ReactNode, useEffect, useState } from "react";
import { progresiveCount } from "../utils/progresive-count";
import { GenericDropdownList } from "./generic-dropdown-list";

export function GenericDropdown({ text, iconText, childrenList }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [triggerID, setTriggerID] = useState<string>(
    progresiveCount().toString()
  );

  return (
    <div>
      <button
        data-testid="trigger-dropdown"
        id={triggerID}
        onClick={() => setIsVisible(!isVisible)}
      >
        <span>{text}</span>
        <span className="material-icons">{iconText}</span>
      </button>
      {isVisible && (
        <GenericDropdownList
          triggerID={triggerID}
          onClickOutsideHandler={() => setIsVisible(false)}
          elements={childrenList}
        />
      )}
    </div>
  );
}

interface Props {
  text?: string;
  iconText?: string;
  childrenList: JSX.Element[];
}
