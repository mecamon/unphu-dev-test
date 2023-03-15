import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers, resetLoadingState } from "../../store/slices/users-slice";
import { Pagination } from "../pagination/pagination";
import { UserCard } from "../user-card/user-card";
import styles from "./users-list.module.scss";

export function UsersList() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);
  const loading = useAppSelector((state) => state.users.loading);
  const totalOfItems = useAppSelector((state) => state.users.totalOfUsers);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetLoadingState());
    dispatch(fetchUsers(page));
  }, []);

  function clickPageHandler(newPage: number) {
    setPage(newPage);
    dispatch(fetchUsers(newPage));
  }

  if (loading === "loading") {
    return (
      <section className={styles.loadingContainer}>
        <span className="loader"></span>
        <span>Cargando usuarios...</span>
      </section>
    );
  }

  if (loading === "failed") {
    return (
      <section className={styles.loadingContainer}>
        <span>Error cargando usuarios</span>
        <span className="material-icons">sentiment_dissatisfied</span>
      </section>
    );
  }

  if (users.length === 0 && loading === "idle") {
    return (
      <section className={styles.loadingContainer}>
        <span>No hay usuarios aun</span>
        <span className="material-icons">sentiment_dissatisfied</span>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2>Usuarios</h2>
      <hr className={styles.hr} />
      <div className={styles.cardsArea}>
        {users.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalOfItems={totalOfItems}
        limit={5}
        onClick={(newPage) => clickPageHandler(newPage)}
      />
    </section>
  );
}
