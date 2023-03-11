import React, { useEffect, useState } from "react";
import { makeClickOutside } from "../utils/click-outside-element";
import { progresiveCount } from "../utils/progresive-count";

export function GenericDropdownList({
  triggerID,
  onClickOutsideHandler,
  elements,
}: Props) {
  const [containerID, setContainerID] = useState(progresiveCount().toString());

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
    <div id={containerID} data-testid="dropdown-list">
      {elements}
    </div>
  );
}

interface Props {
  triggerID: string;
  onClickOutsideHandler: () => void;
  elements: JSX.Element[];
}
