import Contact from "./contact";
import Location from "./location";

export default interface CompanyModel {
  id: number;
  name: string;
  businessName: string;
  legalForm: string;
  location: Location;
  contact: Contact;
  nif: string;
  nis: string;
  nrc: string;
  aimp: string;
  date: Date;

  //to remove
  code: string;
  // name: string; //not really 
}
