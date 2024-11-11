import styles from "./cell.module.sass";
import type { ViewContent } from "@view/view-content";

const Cell = (props: object, ...children: ViewContent[]) => (
  <td
    {...props}
    className={styles.table__cell}
  >
    {children}
  </td>
);

export default Cell;
