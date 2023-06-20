import React from "react";
import PermissionTable from "../components/permissionTable";
import { Box, Grid, TextField, Typography } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

export default function Roles() {
  return (
    <Box m="40px">
      <Grid container gap={4}>
        <Grid
          item
          xs={3}
          style={{
            // border: "1px solid white",
            display: "flex",
            flexDirection:"column",
            height: "150px",
            borderRadius: "15px",
            background: "#22114544",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <PeopleOutlinedIcon fontSize="large" />
          <Typography>Administrateurs</Typography>

        </Grid>
        <Grid
          item
          xs={3}
          style={{
            // border: "1px solid white",
            display: "flex",
            flexDirection: "column",
            height: "150px",
            borderRadius: "15px",
            background: "#ff22ee07",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <PeopleOutlinedIcon fontSize="large" />
          <Typography>organisation</Typography>
        </Grid>
      </Grid>
      <PermissionTable />
    </Box>
  );
}
