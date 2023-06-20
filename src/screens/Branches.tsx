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
import BranchModel from "../models/Branch";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nom", width: 130 },
  { field: "code", headerName: "Code", width: 130 },
  { field: "legalForm", headerName: "Form juridique", width: 130 },
  { field: "date_0", headerName: "date eff", width: 130 },
  // { field: "country", headerName: "Pays", width: 130 },
  // { field: "wilaya", headerName: "Wilaya", width: 130 },
  // { field: "city", headerName: "Ville", width: 130 },
];

export default function DataTable() {
  const [rows, setRows] = React.useState<BranchModel[]>([]);
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
    const data = [
      {
        id: 1,
        name: "Branch 1",
        legalForm: "LLC",
        code: "001",
        location: {
          city: "New York",
          country: "USA",
        },
        contact: {
          mail: "branch1@example.com",
          phone_1: "+1 123-456-7890",
        },
        date_0: new Date("2022-01-01"),
        date_1: new Date("2022-06-30"),
      },
      {
        id: 2,
        name: "Branch 2",
        legalForm: "Corporation",
        code: "002",
        location: {
          city: "London",
          country: "UK",
        },
        contact: {
          mail: "branch2@example.com",
          phone_1: "+44 987-654-3210",
        },
        date_0: new Date("2022-03-15"),
        date_1: new Date("2022-12-31"),
      },
      {
        id: 3,
        name: "Branch 3",
        legalForm: "Sole Proprietorship",
        code: "003",
        location: {
          city: "Tokyo",
          country: "Japan",
        },
        contact: {
          mail: "branch3@example.com",
          phone_1: "+81 123-456-7890",
        },
        date_0: new Date("2022-06-01"),
        date_1: new Date("2022-11-30"),
      },
      {
        id: 4,
        name: "Branch 4",
        legalForm: "Partnership",
        code: "004",
        location: {
          city: "Sydney",
          country: "Australia",
        },
        contact: {
          mail: "branch4@example.com",
          phone_1: "+61 987-654-3210",
        },
        date_0: new Date("2022-09-01"),
        date_1: new Date("2023-02-28"),
      },
    ];
    setRows(data);
  }, []);

  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    // alert(`Movie "${params.row.lastName}" clicked`);
    navigate(params.row.name);
  };

  return (
    <Box m="40px">
      <Header title="Sites " />
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
