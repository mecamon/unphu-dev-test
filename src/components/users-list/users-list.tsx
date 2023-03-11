import { UserPreview } from "../../models/models";
import styles from "./users-list.module.scss";

export function UsersList({ users }: { users: UserPreview[] }) {
  return (
    <section className={styles.container}>
      <h2>Usuarios</h2>
      <div className={styles.cardsArea}>
        {users.map((u) => (
          <div key={u.id} className={styles.cards}>
            {/* <span>ID: {u.id}</span> */}
            <div className={styles.head}>
              {u.gender === "m" ? (
                <span className={`material-icons ${styles.genderIcon}`}>
                  face_6
                </span>
              ) : (
                <span className={`material-icons ${styles.genderIcon}`}>
                  face_4
                </span>
              )}
              <span className={styles.name}>{u.completeName}</span>
            </div>
            <hr />
            <div className={styles.mail}>
              <span className="material-icons">email</span>
              <span>{u.email}</span>
            </div>
            <div className={styles.gender}>
              {u.gender === "m" ? (
                <span className="material-icons">male</span>
              ) : (
                <span className="material-icons">female</span>
              )}
              <span>{u.gender === "m" ? "Hombre" : "Mujer"}</span>
            </div>
            <div className={styles.id}>
              <span className="material-icons">fingerprint</span>
              <span>ID:{" " + u.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
