import { CV } from "../../../Domain";

export default interface CVDataSource {
  getCV(): Promise<CV[]>;
}
