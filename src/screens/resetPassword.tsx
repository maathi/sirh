import {
  Alert,
  AlertTitle,
  Autocomplete,
  Box,
  Button,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import CompanyModel from "../models/Company";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Close, TimesOneMobiledata } from "@mui/icons-material";

const checkoutSchema = Yup.object().shape({
  name: Yup.string().min(4),
  currency: Yup.string(),
  sector: Yup.string(),
  rc: Yup.string(),
  nif: Yup.string(),
});

export default function Reset() {
  const [snack, setSnack] = useState(false);
  // const [defaultValues, setDefaultValues];
  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<CompanyModel>({
      mode: "onBlur",
    });

  useEffect(() => {
    const response = fetch("http://localhost:3000/company")
      .then((response) => response.json())
      .then((data) => reset(data))
      .catch((error) => console.log(error));
  }, []);

  const update = async (id: number, company: CompanyModel) => {
    return await fetch("http://localhost:3000/company/33", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    });
  };

  const onSubmit: SubmitHandler<CompanyModel> = (data) => {
    update(data.id, data)
      .then((response) => response.json())
      .then((data) => {
        reset(data);
        // setSnack(true);
      })
      .catch((error) => {
        console.log(error);
        setSnack(true);
      });
  };

  return (
    <Box
      m="40px"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header title={"Réinitialisez votre mot de passe : "} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          style={{ margin: "auto" }}
          alignItems="center"
          justifyContent="center"
          display="grid"
          gap="40px"
          my={8}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(1, 1fr)",
          }}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                style={{ maxWidth: "400px" }}
                label="Votre email"
                variant="outlined"
                error={!!formState.errors.name}
                helperText={formState.errors.name?.message}
              />
            )}
          />

          {formState.isDirty && (
            <Box
              display="flex"
              alignItems="center"
              //   justifyContent="end"
              //   mt="50px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{ width: "100%" }}
              >
                Confirmer
              </Button>
            </Box>
          )}
        </Box>

        <Snackbar
          open={snack}
          autoHideDuration={3000}
          // message="hello !"
          // action={<Close onClick={() => setSnack(false)} />}
          onClose={() => setSnack(false)}
        >
          <Alert
            onClose={() => setSnack(false)}
            severity="error"
            elevation={6}
            sx={{ width: "100%" }}
          >
            {/* Les informations ont été enregistrées avec succès! */}
            there was an error! try again!
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
}
