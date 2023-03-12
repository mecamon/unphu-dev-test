import { useState } from "react";
import styles from "./custom-input.module.scss";

export function CustomInput({
  type,
  fieldName,
  messageErr = "",
  onChange,
  value,
  validateFunc,
}: Props) {
  const [isValid, setIsvalid] = useState(true);
  return (
    <div className={styles.container}>
      <input
        type={type}
        name={fieldName}
        className={!isValid ? styles.invalid : styles.valid}
        value={value}
        onChange={onChange}
        onBlur={() => setIsvalid(validateFunc(value))}
      />
      <span
        className={
          isValid ? `${styles.danger} hidden` : `${styles.danger} visible`
        }
      >
        {!messageErr ? "" : messageErr}
      </span>
    </div>
  );
}

interface Props {
  type: "text" | "email" | "number";
  value: any;
  fieldName: string;
  messageErr: string;
  onChange: (e: any) => void;
  validateFunc: (input: any) => boolean;
}
