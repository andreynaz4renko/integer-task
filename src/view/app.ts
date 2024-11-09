import { html } from "sinuous";
import { map } from "sinuous/map";
import { parseDate } from "@lib/utils";
import Table, { Cell, Column, Row } from "@view/table";
import { appController } from "@/controller";
import styles from "./app.module.sass";

const App = () => {
  appController.fetchItems();

  const head = html`
    ${Row({
      content: html`${Column({ content: "ID" })} ${Column({ content: "Дата" })} ${Column({ content: "Имя" })}`,
    })}
  `;

  const body = html`
    ${map(appController.tableData, row =>
      Row({
        content: html`
          ${Cell({ content: row.id })} ${Cell({ content: parseDate(row.date) })} ${Cell({ content: row.profile.name })}
        `,
      }),
    )}
  `;

  return html`
    <div class=${styles.app}>
      <div
        class=${styles.app__error}
        hidden=${() => !appController.tableDataError()?.length}
      >
        При загрузке данных возникла ошибка ${appController.tableDataError}
      </div>
      <div hidden=${() => appController.tableDataError()?.length}>
        ${Table({
          head,
          body,
        })}
      </div>
    </div>
  `;
};

export default App;
