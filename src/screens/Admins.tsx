import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AdminModel from "../models/Admin";
import { Button } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 130 },
  { field: "prenom", headerName: "prenom", width: 130 },
  { field: "email", headerName: "email", width: 130 },
  { field: "role", headerName: "role", width: 130 },
];

export default function DataTable() {
  const [rows, setRows] = React.useState<AdminModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    // fetch("http://localhost:3000/branches")
    //   .then((r) => r.json())
    //   .then((d) =>
    //     setRows(
    //       d.map(
    //         ({
    //           location,
    //           ...branch
    //         }: {
    //           location: Location;
    //           [key: string]: any;
    //         }) => ({
    //           id: branch.name,
    //           ...branch,
    //           ...location,
    //         })
    //       )
    //     )
    //   )
    //   .catch((e) => console.log(e));

    setRows([
      {
        id: 1,
        nom: "david",
        prenom: "brent",
        email: "d@b.com",
        role: "admin",
        password: "doo",
      },
      {
        id: 2,
        nom: "Tim",
        prenom: "Canterbury",
        email: "t@c.com",
        role: "admin",
        password: "doo",
      },
      {
        id: 3,
        nom: "Gareth",
        prenom: "Keenan",
        email: "g@k.com",
        role: "admin",
        password: "doo",
      },
    ]);
  }, []);

  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    // alert(params.row.id);
    // alert(`Movie "${params.row.lastName}" clicked`);
    navigate(`${params.row.id}`);
    // navigate("/")
    // console.log()
  };

  return (
    <Box m="40px">
      <Header title="Admins : " />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("new");
        }}
        style={{ marginBottom: 5 }}
      >
        New
      </Button>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          onRowClick={handleEvent}
          rows={rows}
          columns={columns}
          // pageSize={5}
          pageSizeOptions={[3, 6]}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </Box>
  );
}
