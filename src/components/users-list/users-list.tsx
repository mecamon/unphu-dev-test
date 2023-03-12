import { UserPreview } from "../../models/models";
import { UserCard } from "../user-card/user-card";
import styles from "./users-list.module.scss";

export function UsersList({ users }: { users: UserPreview[] }) {
  return (
    <section className={styles.container}>
      <h2>Usuarios</h2>
      <div className={styles.cardsArea}>
        {users.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </section>
  );
}
