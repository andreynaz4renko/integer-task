import { html } from "sinuous";
import styles from "./table.module.sass";
import type { ViewContent } from "@view/view-content.ts";

type Props = {
  head?: ViewContent;
  body?: ViewContent;
};

const Table = ({ head, body }: Props) => html`
  <table class=${styles.table}>
    <thead class=${styles.table__head}>
      ${head}
    </thead>
    <tbody class=${styles.table__body}>
      ${body}
    </tbody>
  </table>
`;

export default Table;
