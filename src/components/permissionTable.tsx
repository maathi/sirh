import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PermissionTable() {
  const navigate = useNavigate();

  const permissions = [
    {
      text: "Change weeks per month configuration",
      admin: true,
      rh: false,
      manager: false,
    },
    {
      text: "Create a banking account",
      admin: false,
      rh: true,
      manager: true,
    },
    {
      text: "Delete shifts and breaks",
      admin: true,
      rh: true,
      manager: true,
    },
    {
      text: "See shift version history",
      admin: true,
      rh: false,
      manager: false,
    },
    {
      text: "See time tracking data",
      admin: false,
      rh: true,
      manager: false,
    },
    {
      text: "Review and approve timesheets",
      admin: true,
      rh: false,
      manager: true,
    },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>permissions</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>RH</TableCell>
          <TableCell>Manager</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {permissions.map((p) => (
          <TableRow>
            <TableCell>{p.text}</TableCell>
            <TableCell>
              <input type="checkbox" checked={p.admin} />
            </TableCell>
            <TableCell>
              <input type="checkbox" checked={p.rh} />
            </TableCell>
            <TableCell>
              <input type="checkbox" checked={p.manager} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* Add table rows here */}
    </Table>
  );
}
