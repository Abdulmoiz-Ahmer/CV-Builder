import { useState } from "react";
import { CVRepositoryImpl } from "../../../Data";
import CVAPIDataSourceImpl from "../../../Data/DataSource/API/CVAPIDataSourceImpl";
import { CV } from "../../../Domain";
import { GetCV } from "../../../Domain";

export default function TodoListViewModel() {
  const [cv, setCV] = useState<CV[]>([]);

  const UseCase = new GetCV(new CVRepositoryImpl(new CVAPIDataSourceImpl()));

  async function getCV() {
    setCV(await UseCase.invoke());
  }

  return {
    getCV,
    cv,
  };
}
