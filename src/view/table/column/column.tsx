import styles from "./column.module.sass";
import type { ViewContent } from "@view/view-content";

const Column = (props: object, ...children: ViewContent[]) => (
  <th
    {...props}
    className={styles.table__column}
  >
    {children}
  </th>
);

export default Column;
