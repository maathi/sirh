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
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"

import CompanyModel from "../models/Company"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Close, TimesOneMobiledata } from "@mui/icons-material"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { getCurrentUser, login } from "../services/auth.service"

const checkoutSchema = Yup.object().shape({
  name: Yup.string().min(4),
  currency: Yup.string(),
  sector: Yup.string(),
  rc: Yup.string(),
  nif: Yup.string(),
})

export default function Company() {
  const [snack, setSnack] = useState(false)
  // const [defaultValues, setDefaultValues];
  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<CompanyModel>({
      // defaultValues: {
      //   name: "CMC",
      //   businessName: "3ilk23",
      //   code: "sldhfj",
      //   legalForm: "23h232",
      //   sector: "AGHHHA",
      //   contact: { fax: "23453", mail: "cmc@gmail.com" },
      //   location: { city: "alger", country: "algerie" },
      //   rc: "3223j",
      //   nif: "23242",
      //   nis: "098098",
      //   art: "iiheii",
      //   date: new Date(""),
      // },
      mode: "onBlur",
    })

  useEffect(() => {
    // const response = fetch("http://localhost:3000/company")
    //   .then((response) => response.json())
    //   .then((data) => reset(data))
    //   .catch((error) => console.log(error));
    // const user = getCurrentUser()
    // console.log(user)
  }, [])

  const update = async (id: number, company: CompanyModel) => {
    return await fetch("http://localhost:3000/company/33", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    })
  }

  const onSubmit: SubmitHandler<CompanyModel> = (data) => {
    update(data.id, data)
      .then((response) => response.json())
      .then((data) => {
        reset(data)
        // setSnack(true);
      })
      .catch((error) => {
        console.log(error)
        setSnack(true)
      })
  }

  return (
    <Box m="40px">
      <Header title={"Informations de la societe :"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="40px"
          my={8}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Nom"
                variant="outlined"
                error={!!formState.errors.name}
                helperText={formState.errors.name?.message}
              />
            )}
          />
          <Controller
            name="businessName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Raison sociale"
                variant="outlined"
                error={!!formState.errors.businessName}
                helperText={formState.errors.businessName?.message}
              />
            )}
          />
          {/* <Controller
            name="code"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Code"
                variant="outlined"
                {...register("code")}
                error={!!formState.errors.code}
                helperText={formState.errors.code?.message}
              />
            )}
          />

          {/* <TextField
            label="Raison sociale"
            {...register("businessName")}
            error={!!formState.errors.businessName}
            helperText={formState.errors.businessName?.message}
          /> */}

          {/* <TextField
            label="Secteur d'activité"
            {...register("sector")}
            error={!!formState.errors.sector}
            helperText={formState.errors.sector?.message}
          /> */}

          <Controller
            name="legalForm"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={["EURL", "SARL", "EIRL"]}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => (
                  <TextField label="Forme juridique" {...params} />
                )}
              />
            )}
          />
        </Box>
        <Divider />
        <Box
          display="grid"
          gap="40px"
          my={8}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <TextField
            label="NIF"
            {...register("nif")}
            error={!!formState.errors.nif}
            helperText={formState.errors.nif?.message}
          />
          <TextField
            label="NIS"
            {...register("nis")}
            error={!!formState.errors.nis}
            helperText={formState.errors.nis?.message}
          />
          <TextField
            label="NRC"
            {...register("nrc")}
            error={!!formState.errors.nrc}
            helperText={formState.errors.nrc?.message}
          />
          <TextField
            label="AIMP"
            {...register("aimp")}
            error={!!formState.errors.aimp}
            helperText={formState.errors.aimp?.message}
          />
        </Box>
        <Divider />
        <Box
          display="grid"
          gap="40px"
          my={8}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <TextField
            label="URL"
            {...register("contact.url")}
            error={!!formState.errors.contact?.url}
            helperText={formState.errors.contact?.url?.message}
          />
          <TextField
            label="Mail"
            {...register("contact.mail")}
            error={!!formState.errors.contact?.mail}
            helperText={formState.errors.contact?.mail?.message}
          />
          <TextField
            label="Fax"
            {...register("contact.fax")}
            error={!!formState.errors.contact?.fax}
            helperText={formState.errors.contact?.fax?.message}
          />
          <TextField
            label="Telephone 1"
            {...register("contact.phone_1")}
            error={!!formState.errors.contact?.phone_1}
            helperText={formState.errors.contact?.phone_1?.message}
          />
          <TextField
            label="Telephone 2"
            {...register("contact.phone_2")}
            error={!!formState.errors.contact?.phone_2}
            helperText={formState.errors.contact?.phone_2?.message}
          />
        </Box>
        <Divider />
        <Box
          display="grid"
          gap="40px"
          my={8}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <TextField
            label="Pays"
            {...register("location.country")}
            error={!!formState.errors.location?.country}
            helperText={formState.errors.location?.country?.message}
          />
          <TextField
            label="Wilaya"
            {...register("location.wilaya")}
            error={!!formState.errors.location?.wilaya}
            helperText={formState.errors.location?.wilaya?.message}
          />
          <TextField
            label="Ville"
            {...register("location.city")}
            error={!!formState.errors.location?.city}
            helperText={formState.errors.location?.city?.message}
          />
          <TextField
            label="Code postale"
            {...register("location.postalCode")}
            error={!!formState.errors.location?.postalCode}
            helperText={formState.errors.location?.postalCode?.message}
          />
          <TextField
            label="Adresse"
            {...register("location.address")}
            error={!!formState.errors.location?.address}
            helperText={formState.errors.location?.address?.message}
          />
        </Box>
        <Divider />
        <Box
          display="grid"
          gap="40px"
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          my={8}
        >
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="date debut"
                onChange={onChange}
                value={dayjs(value)}
              />
            )}
          ></Controller>
        </Box>
        {formState.isDirty && (
          <Box display="flex" justifyContent="end" mt="50px">
            <Button onClick={() => reset()} color="primary" variant="contained">
              cancel
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              save
            </Button>
          </Box>
        )}

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
