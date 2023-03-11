export function makeClickOutside(
  elId: string,
  triggerID: string,
  handler: () => void
) {
  return function (e: any) {
    const container = document.getElementById(elId);
    const trigger = document.getElementById(triggerID);
    let targetElement = e.target;

    do {
      if (targetElement == container || targetElement == trigger) {
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);

    handler();
  };
}
