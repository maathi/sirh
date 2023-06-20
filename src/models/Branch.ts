import Contact from "./contact";
import Location from "./location";

export default interface BranchModel {
  id: number;
  name: string;
  legalForm: string;
  manager?: string;
  location: Location;
  contact: Contact;
  date_0: Date;
  date_1: Date;

  //to remove
  code: string;
}
