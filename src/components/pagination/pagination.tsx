import styles from "./pagination.module.scss";

export function Pagination({
  currentPage,
  totalOfItems,
  limit,
  onClick,
}: Props) {
  function generatePages(): number[] {
    const max = Math.ceil(totalOfItems / limit);
    const pagesArr: number[] = [];
    for (let i = 0; i < max; i++) {
      pagesArr.push(i + 1);
    }
    return pagesArr;
  }

  return (
    <div className={styles.container}>
      <button
        data-testid="previous"
        className={styles.cornerButtons}
        disabled={currentPage === 1}
        onClick={() => onClick(currentPage - 1)}
      >
        Previa
      </button>
      {generatePages().map((p) => (
        <button
          key={p}
          data-testid="page"
          className={styles.pageButton}
          disabled={p === currentPage}
          onClick={() => onClick(p)}
        >
          {p}
        </button>
      ))}
      <button
        data-testid="next"
        className={styles.cornerButtons}
        disabled={currentPage === generatePages().length}
        onClick={() => onClick(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

interface Props {
  currentPage: number;
  totalOfItems: number;
  limit: number;
  onClick: (page: number) => void;
}
