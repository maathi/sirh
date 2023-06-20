import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";

export default function Types() {
  const [typesList, setTypesList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  return (
    <Box m="40px">
      <Header title={`Types :`} />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Nom"
            style={{ width: "100%" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            // {...register("nom")}
            // error={!!formState.errors.nom}
            // helperText={formState.errors.nom?.message}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{ height: "100%" }}
            onClick={() => {
              setTypesList([...typesList, value]);
              setValue("");
            }}
            color="secondary"
            variant="contained"
          >
            Ajouter
          </Button>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {typesList?.map((t) => (
            <TableRow>
              <TableCell>{t}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Add table rows here */}
      </Table>
    </Box>
  );
}
