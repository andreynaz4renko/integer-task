import styles from "./cell.module.sass";
import type { ViewContent } from "@view/view-content";

type Props = {
  children?: ViewContent;
};

const Cell = ({ children }: Props) => <td className={styles.table__cell}>{children}</td>;

export default Cell;
