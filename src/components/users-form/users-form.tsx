import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { User } from "../../models/models";
import { addUser, resetLoadingState } from "../../store/slices/users-slice";
import * as validators from "../../utils/validators";
import { CustomInput } from "../custom-input/custom-input";
import { CustomRadioInput } from "../custom-radio-input/custom-radio-input";
import styles from "./users-form.module.scss";

export function UsersForm() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.users.loading);
  const [userData, setUserData] = useState<User>({
    names: "",
    firstLastname: "",
    secondLastname: "",
    cedula: "",
    age: "",
    gender: "m",
    address: [""],
    phone: "",
    email: "",
    status: "single",
    anyKids: "no",
    dateOfBirth: "",
  });

  useEffect(() => {
    dispatch(resetLoadingState());
  }, []);

  const formIsCompleted = useMemo(() => {
    let strCedula = userData.cedula as string;
    let strPhone = userData.phone as string;
    return (
      userData.names !== "" &&
      userData.firstLastname !== "" &&
      userData.dateOfBirth !== "" &&
      validators.validEmail(userData.email) &&
      !strCedula.includes("_") &&
      userData.age &&
      !strPhone.includes("_") &&
      userData.address.every((a) => a !== "")
    );
  }, [userData]);

  function changeHandler(e: any) {
    const field = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    if (field === "address") {
      updateAddress(e);
    } else {
      setUserData((u) => ({
        ...u,
        [field]: type === "number" ? Number(value) : value,
      }));
    }
  }

  function updateAddress(e: any) {
    const pos = Number(e.target.id);
    const addresses = [...userData.address];
    addresses[pos] = e.target.value;
    setUserData((u) => ({
      ...u,
      address: [...addresses],
    }));
  }

  function addAnotherAddress() {
    setUserData((u) => ({
      ...u,
      address: [...u.address, ""],
    }));
  }

  function deleteOneAddress() {
    const addresses = [...userData.address];
    addresses.pop();
    setUserData((u) => ({
      ...u,
      address: [...addresses],
    }));
  }

  function inputHandler(e: any) {
    e.preventDefault();
    const cleanUser = getCleanUserData();
    if (formIsCompleted) {
      dispatch(addUser(cleanUser));
    }
  }

  function getCleanUserData(): User {
    const phoneStr = userData.phone as string;
    const cedulaStr = userData.cedula as string;
    const cleanPhone = phoneStr.replace(/\D/g, "");
    const cleanCedula = cedulaStr.replace(/\D/g, "");

    const cleanUser = { ...userData };
    cleanUser.phone = Number(cleanPhone);
    cleanUser.cedula = Number(cleanCedula);

    return cleanUser;
  }

  function calculateAge() {
    if (!userData.dateOfBirth) {
      return undefined;
    }
    let diff = (new Date(userData.dateOfBirth).getTime() - Date.now()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Agregar nuevo usuario</h2>
        <hr className={styles.hr} />
        <form onSubmit={(e) => inputHandler(e)}>
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
              <label htmlFor="secondLastname">
                Segundo apellido{" "}
                <span className={styles.notRequired}>(Opcional)</span>
              </label>
              <CustomInput
                fieldName="secondLastname"
                messageErr="Este campo es requerido"
                type="text"
                onChange={(e) => changeHandler(e)}
                value={userData?.secondLastname}
                validateFunc={() => true}
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
                messageErr={"Rellene todos los carateres restantes"}
                type="number"
                mask="cedula"
                onChange={(e) => changeHandler(e)}
                value={userData?.cedula}
                validateFunc={(input: string) => !input.includes("_")}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <CustomInput
                fieldName="phone"
                messageErr={"Rellene todos los carateres restantes"}
                type="number"
                mask="phone"
                onChange={(e) => changeHandler(e)}
                value={userData?.phone}
                validateFunc={(input: string) => !input.includes("_")}
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
                value={userData.age}
                validateFunc={validators.required}
                placeholder={calculateAge()?.toString()}
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
                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.addAddressButton}
                    onClick={() => addAnotherAddress()}
                  >
                    <span className="material-icons">add</span>
                  </button>
                  <button
                    type="button"
                    className={styles.removeAddressButton}
                    disabled={userData.address.length === 1}
                    onClick={() => deleteOneAddress()}
                  >
                    <span className="material-icons">remove</span>
                  </button>
                </div>
              </label>
              {userData.address.map((a, i) => (
                <CustomInput
                  id={i.toString()}
                  key={i}
                  type="text"
                  value={a}
                  fieldName="address"
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
                  { name: "No", value: "no" },
                  { name: "Sí", value: "si" },
                ]}
                fieldName="anyKids"
                onChange={changeHandler}
              />
            </div>
          </div>
          <input
            className="submit"
            type="submit"
            value="Guardar"
            disabled={!formIsCompleted || loading === "loading"}
          />
        </form>
      </div>
    </section>
  );
}
