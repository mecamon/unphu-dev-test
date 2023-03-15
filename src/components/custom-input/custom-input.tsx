import { useRef, useState } from "react";
import styles from "./custom-input.module.scss";
import InputMask from "react-input-mask";

export function CustomInput({
  type,
  id,
  fieldName,
  messageErr,
  placeholder,
  onChange,
  value,
  validateFunc,
  mask,
}: Props) {
  const [isValid, setIsvalid] = useState(true);
  const ref = useRef(null);

  function getInput() {
    switch (mask) {
      case "phone":
        return (
          <InputMask
            mask="999 999 9999"
            alwaysShowMask={true}
            autoComplete="off"
            id={id ? id : fieldName}
            name={fieldName}
            placeholder={placeholder}
            className={!isValid ? styles.invalid : styles.valid}
            value={value}
            onChange={onChange}
            onBlur={() => setIsvalid(validateFunc(value))}
          ></InputMask>
        );
      case "cedula":
        return (
          <InputMask
            mask="999 9999999 9"
            alwaysShowMask={true}
            autoComplete="off"
            id={id ? id : fieldName}
            name={fieldName}
            placeholder={placeholder}
            className={!isValid ? styles.invalid : styles.valid}
            value={value}
            ref={ref}
            onChange={onChange}
            onBlur={() => setIsvalid(validateFunc(value))}
          ></InputMask>
        );
      default:
        return (
          <input
            autoComplete="off"
            id={id ? id : fieldName}
            type={type}
            name={fieldName}
            placeholder={placeholder}
            className={!isValid ? styles.invalid : styles.valid}
            value={value}
            onChange={onChange}
            onBlur={() => setIsvalid(validateFunc(value))}
          />
        );
    }
  }

  return (
    <div className={styles.container}>
      {getInput()}
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
  type: "text" | "email" | "number" | "date" | "password";
  value: any;
  id?: string;
  mask?: "cedula" | "phone";
  placeholder?: string;
  fieldName: string;
  messageErr: string;
  onChange: (e: any) => void;
  validateFunc: (input: any) => boolean;
}
