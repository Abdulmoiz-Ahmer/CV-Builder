import { Cv } from "../../Model";

export interface CvRepository {
  getCv(): Promise<Cv[]>;
  postCv(): Promise<Cv[]>;
}
