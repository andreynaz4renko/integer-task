import { o } from "sinuous";
import { GeneratorDto } from "@model/types/generator-dto";
import { TableApi, tableApi } from "@/model";

export class AppController {
  tableDataError = o<string | undefined>(undefined);
  tableData = o<GeneratorDto>([]);
  tableApi: TableApi;

  constructor(tableApi: TableApi) {
    this.tableApi = tableApi;
  }

  fetchItems() {
    this.tableApi
      .fetchItems()
      .then(data => {
        this.tableData(data);
      })
      .catch((error: Error) => {
        this.tableData([]);
        this.tableDataError(error.message);
        console.error(error.message);
      });
  }
}

const appController = new AppController(tableApi);

export default appController;
