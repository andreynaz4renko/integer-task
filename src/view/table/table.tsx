import styles from "./table.module.sass";
import type { ViewContent } from "@view/view-content";

type Props = {
  head?: ViewContent;
  body?: ViewContent;
};

const Table = ({ head, body }: Props) => (
  <table className={styles.table}>
    <thead className={styles.table__head}>{head}</thead>
    <tbody className={styles.table__body}>{body}</tbody>
  </table>
);

export default Table;
