import { API_BASE_URL, API_HEADERS } from "@model/constants";
import type { GeneratorDto } from "@model/types/generator-dto";

export type TableApi = {
  baseUrl: string;
  headers?: HeadersInit;

  itemsUri: URL;
  fetchItems(): Promise<GeneratorDto>;
};

export class TableApiImpl implements TableApi {
  baseUrl: string = "";
  headers?: HeadersInit;

  itemsUri: URL;

  constructor(baseUrl: string, headers?: HeadersInit) {
    this.baseUrl = baseUrl;
    this.headers = headers;

    this.itemsUri = new URL("templates/z_h06ZT6YwJa/data", this.baseUrl);
  }

  async fetchItems(): Promise<GeneratorDto> {
    return await fetch(this.itemsUri, { headers: this.headers }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status.toString());
    });
  }
}

const tableApi = new TableApiImpl(API_BASE_URL, API_HEADERS);

export default tableApi;
