import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { login } from "../../store/slices/auth-slice";
import { required } from "../../utils/validators";
import { CustomInput } from "../custom-input/custom-input";
import { MaskedInput } from "../masked-input/masked-input";
import styles from "./login-form.module.scss";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useAppDispatch();

  function submitHandler(e: any) {
    e.preventDefault();
    dispath(login());
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./fav.png" alt="logo" />
      <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuario</label>
          <CustomInput
            type="text"
            value={username}
            fieldName={"username"}
            messageErr={"El campo es requerido"}
            onChange={(e) => setUsername(e.target.value)}
            validateFunc={required}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <CustomInput
            type="text"
            value={password}
            fieldName={"password"}
            messageErr={"El campo es requerido"}
            onChange={(e) => setPassword(e.target.value)}
            validateFunc={required}
          />
        </div>
        <div className={styles.submitContainer}>
          <input
            className="submit"
            type="submit"
            disabled={!username || !password}
            value="Entrar"
          />
        </div>
      </form>
    </div>
  );
}
