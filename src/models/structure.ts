import BranchModel from "./Branch";


export default interface StructureModel {
  id: number;
  name: string;
  type: string;
  branch: string;
  unit: string;
  costCenterCode: string;
  date_0: Date;
  date_1: Date;
}
