import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { User } from "../../models/models";
import { addUser, resetLoadingState } from "../../store/slices/users-slice";
import * as validators from "../../utils/validators";
import { CustomInput } from "../custom-input/custom-input";
import { CustomRadioInput } from "../custom-radio-input/custom-radio-input";
import styles from "./users-form.module.scss";

export function UsersForm() {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<User>({
    names: "",
    firstLastname: "",
    secondLastname: "",
    cedula: undefined,
    age: undefined,
    gender: "m",
    address: [""],
    phone: undefined,
    email: "",
    status: "single",
    anyKids: "no",
    dateOfBirth: "",
  });

  useEffect(() => {
    dispatch(resetLoadingState());
  }, []);

  const formIsCompleted = useMemo(() => {
    return (
      userData.names !== "" &&
      userData.firstLastname !== "" &&
      userData.secondLastname !== "" &&
      userData.dateOfBirth !== "" &&
      validators.validEmail(userData.email) &&
      userData.cedula !== undefined &&
      userData.age !== undefined &&
      userData.phone !== undefined &&
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
    if (formIsCompleted) {
      dispatch(addUser(userData));
    }
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
                messageErr="Este campo es requerido"
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
            value="Agregar"
            disabled={!formIsCompleted}
          />
        </form>
      </div>
    </section>
  );
}
