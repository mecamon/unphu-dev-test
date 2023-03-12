import styles from "./custom-radio-input.module.scss";

export function CustomRadioInput({
  value,
  options,
  fieldName,
  onChange,
}: Props) {
  return (
    <div className={styles.container}>
      {options.map((o) => (
        <label key={o.name} className={styles.radioLabel} htmlFor={o.name}>
          <input
            id={o.name}
            type="radio"
            name={fieldName}
            value={o.value}
            checked={value === o.value}
            onChange={onChange}
          />
          {o.name}
        </label>
      ))}
    </div>
  );
}

interface Props {
  value: any;
  options: any[];
  fieldName: string;
  onChange: (e: any) => void;
}
