import styles from "./column.module.sass";
import type { ViewContent } from "@view/view-content";

type Props = {
  children?: ViewContent;
};

const Column = ({ children }: Props) => <th className={styles.table__column}>{children}</th>;

export default Column;
