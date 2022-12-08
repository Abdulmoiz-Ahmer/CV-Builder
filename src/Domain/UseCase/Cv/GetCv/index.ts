import { Cv } from "../../../Model";
import { CvRepository } from "../../../Repository";

export interface GetCvsUseCase {
  invoke: () => Promise<Cv[]>;
}

export class GetCvs implements GetCvsUseCase {
  private cvRepo: CvRepository;
  constructor(_cvRepo: CvRepository) {
    this.cvRepo = _cvRepo;
  }

  async invoke() {
    return this.cvRepo.getCv();
  }
}
