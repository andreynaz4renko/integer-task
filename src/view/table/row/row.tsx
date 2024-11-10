import styles from "./row.module.sass";
import type { ViewContent } from "@view/view-content";

type Props = {
  children?: ViewContent | ViewContent[];
};

const Row = ({ children }: Props) => <tr className={styles.table__row}>{children}</tr>;

export default Row;
