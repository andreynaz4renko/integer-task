import { API_BASE_URL, API_HEADERS } from "@model/constants";
import type { GeneratorDto } from "@model/types/generator-dto";

export class TableApi {
  baseUrl: string = "";
  headers?: HeadersInit;
  itemsUrl: URL;

  constructor(baseUrl: string, headers?: HeadersInit) {
    this.baseUrl = baseUrl;
    this.headers = headers;

    this.itemsUrl = new URL("templates/z_h06ZT6YwJa/data", this.baseUrl);
  }

  async fetchItemsApi(): Promise<GeneratorDto> {
    return await fetch(this.itemsUrl, { headers: this.headers }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status.toString());
    });
  }
}

const tableApi = new TableApi(API_BASE_URL, API_HEADERS);

export default tableApi;
