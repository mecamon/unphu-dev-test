import { useState } from "react";
import { User } from "../../models/models";
import { required } from "../../utils/validators";
import { CustomInput } from "../custom-input/custom-input";
import styles from "./users-form.module.scss";

export function UsersForm() {
  const [userData, setUserData] = useState<User>({
    names: "",
    firstLastname: "",
    secondLastname: "",
    cedula: 0,
    age: 0,
    gender: "m",
    address: [],
    phone: 0,
    email: "",
    status: "",
    anyKids: false,
    dateOfBirth: "",
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Agregar nuevo usuario</h2>
        <form action="">
          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="">Nombres</label>
              <CustomInput
                fieldName="names"
                messageErr="Este campo es requerido"
                type="text"
                onChange={(e) => null}
                value={userData?.names}
                validateFunc={required}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Primer apellido</label>
              <CustomInput
                fieldName="firstLastname"
                messageErr="Este campo es requerido"
                type="text"
                onChange={(e) => null}
                value={userData?.firstLastname}
                validateFunc={required}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
