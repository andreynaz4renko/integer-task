import { html } from "sinuous";
import styles from "./row.module.sass";
import type { ViewContent } from "@view/view-content.ts";

type Props = {
  content?: ViewContent;
};

const Row = ({ content }: Props) =>
  html`<tr class=${styles.table__row}>
    ${content}
  </tr>`;

export default Row;
