export default interface AdminModel {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: "admin" | "rh" | "manager";
}
