import BranchModel from "./Branch";
import EmploiModel from "./Emploi";


export default interface PosteModel {
  id: number;
  code: string;
  name: string;
  branch: string;
  unit: string;
  emploi: string;
  date_0: Date;
  date_1: Date;
}
