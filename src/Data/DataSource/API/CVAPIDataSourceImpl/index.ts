import { CV } from "../../../../Domain";
import CVDataSource from "../../CVDataSource";
import { CVAPIEntity } from "../Entity";

const BASE_URL = "http://localhost:3000/api/v1";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class CVAPIDataSourceImpl implements CVDataSource {
  async getCV(): Promise<CV[]> {
    let response = await myFetch<CVAPIEntity[]>(`${BASE_URL}/cv`);
    let data = await response.json();
    return data;
  }
}
