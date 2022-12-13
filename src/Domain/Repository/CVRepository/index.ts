import { CV } from "../../";

export interface CVRepository {
  getCV(): Promise<CV[]>;
}
