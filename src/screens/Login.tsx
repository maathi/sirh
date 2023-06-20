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
} from "@mui/material"
import * as Yup from "yup"
import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header"

import CompanyModel from "../models/Company"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Close, TimesOneMobiledata } from "@mui/icons-material"
import { login } from "../services/auth.service"
import UserModel from "../models/UserModel"
import { useAuth } from "../context/authContext"

export default function Login() {
  // const { login: storeToken } = useAuth()
  const { token, setToken } = useAuth()
  const [snack, setSnack] = useState(false)

  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<UserModel>({
      mode: "onBlur",
    })

  const onSubmit: SubmitHandler<UserModel> = (data) => {
    login("a@a.com", "a")
      .then((d) => {
        console.log("$$$", d)
      })
      .catch((e) => console.log(">>>", e))
  }

  return (
    <Box
      m="40px"
      // style={{ border: "1px solid green" }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header title={"Login"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          // style={{ maxWidth: "700px", border: "1px solid red" }}
          gap="40px"
          my={8}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(1, 1fr)",
          }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                // style={{ maxWidth: "400px" }}
                label="Email"
                variant="outlined"
                error={!!formState.errors.email}
                helperText={formState.errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                // style={{ maxWidth: "400px" }}
                label="Mot de passe"
                variant="outlined"
                {...register("password")}
                error={!!formState.errors.password}
                helperText={formState.errors.password?.message}
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
                Login
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
  )
}
