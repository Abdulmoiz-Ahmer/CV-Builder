import { CV } from "../../";

export interface CVRepository {
  getCV(): Promise<CV[]>;
  postCV(): Promise<CV[]>;
}
