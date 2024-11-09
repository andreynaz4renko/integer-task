import { html } from "sinuous";
import styles from "./column.module.sass";
import type { ViewContent } from "@view/view-content.ts";

type Props = {
  content?: ViewContent;
};

const Column = ({ content }: Props) => html`<th class=${styles.table__column}>${content}</th>`;

export default Column;
