import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "../../store/slices/users-slice";
import { UserCard } from "../user-card/user-card";
import styles from "./users-list.module.scss";

export function UsersList() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);
  const loading = useAppSelector((state) => state.users.loading);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, []);

  if (loading === "loading") {
    //placeholder
    return <span>Loading....</span>;
  }
  if (users.length === 0 && loading === "idle") {
    //placeholder
    return <span>Nada</span>;
  }
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
