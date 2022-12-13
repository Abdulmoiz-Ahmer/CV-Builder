import { CV } from "../../../Model";
import { CVRepository } from "../../../Repository";

export interface GetCVsUseCase {
  invoke: () => Promise<CV[]>;
}

export class GetCVs implements GetCVsUseCase {
  private CVRepo: CVRepository;
  constructor(_CVRepo: CVRepository) {
    this.CVRepo = _CVRepo;
  }

  async invoke() {
    return this.CVRepo.getCV();
  }
}
