import { html } from "sinuous";
import styles from "./cell.module.sass";
import type { ViewContent } from "@view/view-content.ts";

type Props = {
  content?: ViewContent;
};

const Cell = ({ content }: Props) => html`<td class=${styles.table__cell}>${content}</td>`;

export default Cell;
