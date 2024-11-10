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
            head={<Row children={[<Column children="ID" />, <Column children="Дата" />, <Column children="Имя" />]} />}
            body={map(appController.tableData, row => (
              <Row
                children={[
                  <Cell children={row.id} />,
                  <Cell children={parseDate(row.date)} />,
                  <Cell children={row.profile.name} />,
                ]}
              />
            ))}
          />
        )
      }
    </div>
  );
};

export default App;
