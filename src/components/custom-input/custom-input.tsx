import { useState } from "react";
import styles from "./custom-input.module.scss";

export function CustomInput({
  type,
  id,
  fieldName,
  messageErr,
  placeholder,
  onChange,
  value,
  validateFunc,
}: Props) {
  const [isValid, setIsvalid] = useState(true);
  return (
    <div className={styles.container}>
      <input
        id={id ? id : fieldName}
        type={type}
        name={fieldName}
        placeholder={placeholder}
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
  type: "text" | "email" | "number" | "date";
  value: any;
  id?: string;
  placeholder?: string;
  fieldName: string;
  messageErr: string;
  onChange: (e: any) => void;
  validateFunc: (input: any) => boolean;
}
