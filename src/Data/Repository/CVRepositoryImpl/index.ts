import { CV } from "../../../Domain";
import { CVRepository } from "../../../Domain";
import CVDataSource from "../../DataSource/CVDataSource";

export class CVRepositoryImpl implements CVRepository {
  dataSource: CVDataSource;

  constructor(_datasource: CVDataSource) {
    this.dataSource = _datasource;
  }

  async getCV(): Promise<CV[]> {
    return this.dataSource.getCV();
  }
}
