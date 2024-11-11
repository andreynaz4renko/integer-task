import { map } from "sinuous/map";
import { parseDate } from "@lib/utils";
import Table, { Cell, Column, Row } from "@view/table";
import { appController } from "@/controller";
import styles from "./app.module.sass";

const App = () => {
  appController.fetchItems();

  return (
    <div className={styles.app}>
      {() =>
        appController.tableDataError()?.length ? (
          <div className={styles.app__error}>При загрузке данных возникла ошибка {appController.tableDataError()}</div>
        ) : (
          <Table
            head={
              <Row>
                <Column>ID</Column>
                <Column>Дата</Column>
                <Column>Имя</Column>
              </Row>
            }
            body={map(appController.tableData, row => (
              <Row>
                <Cell>{row.id}</Cell>
                <Cell>{parseDate(row.date)}</Cell>
                <Cell>{row.profile.name}</Cell>
              </Row>
            ))}
          />
        )
      }
    </div>
  );
};

export default App;
