import { useState } from "react";
import { User } from "../../models/models";
import * as validators from "../../utils/validators";
import { CustomInput } from "../custom-input/custom-input";
import { CustomRadioInput } from "../custom-radio-input/custom-radio-input";
import styles from "./users-form.module.scss";

export function UsersForm() {
  const [userData, setUserData] = useState<User>({
    names: "",
    firstLastname: "",
    secondLastname: "",
    cedula: 0,
    age: 0,
    gender: "m",
    address: [""],
    phone: 0,
    email: "",
    status: "single",
    anyKids: false,
    dateOfBirth: "",
  });

  function changeHandler(e: any) {
    const field = e.target.name;
    const value = e.target.value;

    setUserData((u) => ({
      ...u,
      [field]: value,
    }));
  }

  function addAnotherAddress() {
    setUserData((u) => ({
      ...u,
      address: [...u.address, ""],
    }));
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Agregar nuevo usuario</h2>
        <form action="">
          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="names">Nombres</label>
              <CustomInput
                fieldName="names"
                messageErr="Este campo es requerido"
                type="text"
                onChange={(e) => changeHandler(e)}
                value={userData?.names}
                validateFunc={validators.required}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="firstLastname">Primer apellido</label>
              <CustomInput
                fieldName="firstLastname"
                messageErr="Este campo es requerido"
                type="text"
                onChange={(e) => changeHandler(e)}
                value={userData?.firstLastname}
                validateFunc={validators.required}
              />
            </div>
          </div>
          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="secondLastname">Segundo apellido</label>
              <CustomInput
                fieldName="secondLastname"
                messageErr="Este campo es requerido"
                type="text"
                onChange={(e) => changeHandler(e)}
                value={userData?.secondLastname}
                validateFunc={validators.required}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <CustomInput
                fieldName="email"
                messageErr="Formato de correo inválido"
                type="email"
                onChange={(e) => changeHandler(e)}
                value={userData?.email}
                validateFunc={validators.validEmail}
              />
            </div>
          </div>
          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="cedula">Cédula</label>
              <CustomInput
                fieldName="cedula"
                messageErr="Este campo es requerido"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={userData?.cedula}
                validateFunc={validators.required}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <CustomInput
                fieldName="phone"
                messageErr="Formato de correo inválido"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={userData?.phone}
                validateFunc={validators.required}
              />
            </div>
          </div>

          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
              <CustomInput
                fieldName="dateOfBirth"
                messageErr="Este campo es requerido"
                type="date"
                onChange={(e) => changeHandler(e)}
                value={userData?.dateOfBirth}
                validateFunc={validators.required}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="age">Edad</label>
              <CustomInput
                fieldName="age"
                messageErr="Este campo es requerido"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={userData?.age}
                validateFunc={validators.required}
              />
            </div>
          </div>

          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="gender">Género</label>
              <CustomRadioInput
                value={userData.gender}
                options={[
                  { name: "Masculino", value: "m" },
                  { name: "Femenino", value: "f" },
                ]}
                fieldName="gender"
                onChange={changeHandler}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="status">Estado civil</label>
              <CustomRadioInput
                value={userData.status}
                options={[
                  { name: "Soltero", value: "single" },
                  { name: "Casado", value: "maried" },
                ]}
                fieldName="status"
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label className={styles.addressLabel} htmlFor="">
                Dirección
                <div>
                  <button
                    type="button"
                    className={styles.addAddressButton}
                    onClick={() => addAnotherAddress()}
                  >
                    <span className="material-icons">add</span>
                  </button>
                </div>
              </label>
              {userData.address.map((a, i) => (
                <CustomInput
                  key={i}
                  type="text"
                  value={a[i]}
                  fieldName={a[i]}
                  placeholder={`dirección ${i + 1}`}
                  messageErr="Este campo es requerido"
                  onChange={changeHandler}
                  validateFunc={validators.required}
                />
              ))}
            </div>
          </div>

          <div className={styles.formDoubleGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="anyKids">Tiene hijos</label>
              <CustomRadioInput
                value={userData.anyKids}
                options={[
                  { name: "No", value: false },
                  { name: "Sí", value: true },
                ]}
                fieldName="anyKids"
                onChange={changeHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
