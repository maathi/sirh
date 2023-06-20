import React, { useEffect } from "react";
import StructureModel from "../models/structure";
import { Box, Button } from "@mui/material";
import Header from "../components/Header";
import { Navigate, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import dayjs from "dayjs";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nom", width: 70 },
  { field: "type", headerName: "Type", width: 130 },
  { field: "branch", headerName: "Etablissmeent", width: 130 },
  { field: "unit", headerName: "unite mere", width: 130 },
  { field: "costCenterCode", headerName: "centre de cout", width: 130 },
  { field: "date_0", headerName: "date debut", width: 130 },
  { field: "date_1", headerName: "date fin", width: 130 },
];

export default function Structures() {
  const [rows, setRows] = React.useState<StructureModel[]>([]);
  const navigate = useNavigate();

  const handleEvent: GridEventListener<"rowClick"> = (
    params,
    event,
    details
  ) => {
    navigate(`${params.row.id}`);
  };

  useEffect(() => {
    setRows([
      {
        id: 1,
        name: "n1",
        type: "t1",
        branch: "bbb1",
        unit: "uu1",
        costCenterCode: "ccc1",
        date_0: new Date(),
        date_1: new Date(),
      },
    ]);
  }, []);

  return (
    <Box m="40px">
      <Header title="Structures : " />
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
