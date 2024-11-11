import styles from "./row.module.sass";
import type { ViewContent } from "@view/view-content";

const Row = (props: object, ...children: ViewContent[]) => (
  <tr
    {...props}
    className={styles.table__row}
  >
    {children}
  </tr>
);

export default Row;
