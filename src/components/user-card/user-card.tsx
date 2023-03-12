import { UserPreview } from "../../models/models";
import styles from "./user-card.module.scss";

export function UserCard({ user }: { user: UserPreview }) {
  return (
    <div data-testid="card" className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.head}>
          {user.gender === "m" ? (
            <span className={`material-icons ${styles.genderIcon}`}>
              face_6
            </span>
          ) : (
            <span className={`material-icons ${styles.genderIcon}`}>
              face_4
            </span>
          )}
          <span data-testid="complete-name" className={styles.name}>
            {user.completeName}
          </span>
        </div>
        <hr />
        <div className={styles.mail}>
          <span className="material-icons">email</span>
          <span data-testid="email">{user.email}</span>
        </div>
        <div className={styles.gender}>
          {user.gender === "m" ? (
            <span className="material-icons">male</span>
          ) : (
            <span className="material-icons">female</span>
          )}
          <span data-testid="gender">
            {user.gender === "m" ? "Hombre" : "Mujer"}
          </span>
        </div>
        <div className={styles.id}>
          <span className="material-icons">fingerprint</span>
          <span data-testid="id">ID:{" " + user.id}</span>
        </div>
      </div>
    </div>
  );
}
