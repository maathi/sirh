import {
  Autocomplete,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Header from "../components/Header";
import BranchModel from "../models/Branch";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Routes, Route, useParams } from "react-router-dom";
import AdminModel from "../models/Admin";

const schema = yup
  .object()
  .shape({
    nom: yup.string().required("rrrrrrrr"),
    prenom: yup
      .string()
      .required("prenom required")
      .length(5, "should be 5 cars length"),
    email: yup.string().email(),
    role: yup.string(),
    // date: yup.date("should bedate"),
  })
  .required();

const roles = ["Admin", "RH", "Manager"];

export default function Admin() {
  const { id } = useParams();
  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<AdminModel>({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  useEffect(() => {
    // const response = fetch("http://localhost:3000/branches/4")
    //   .then((response) => response.json())
    //   .then((data) => reset(data))
    //   .catch((error) => console.log(error))
    // return () => {
    // }
  }, []);

  const onSubmit: SubmitHandler<AdminModel> = (data) => console.log(">>", data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Box m="40px">
      <Header title={`${id} :`} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="40px"
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          my={8}
        >
          <TextField
            label="Nom"
            {...register("nom")}
            error={!!formState.errors.nom}
            helperText={formState.errors.nom?.message}
          />

          <Controller
            name="prenom"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="prenom"
                {...register("prenom")}
                error={!!formState.errors.prenom}
                helperText={formState.errors.prenom?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="email"
                {...register("email")}
                error={!!formState.errors.email}
                helperText={formState.errors.email?.message}
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={roles}
                getOptionLabel={(option) => option}
                renderOption={(props, option, state) => (
                  <li {...props} key={option}>
                    {/* {option.emoji} &nbsp; {option.name} */}
                    {option}
                  </li>
                )}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => <TextField label="role" {...params} />}
              />
            )}
          />
        </Box>

        {formState.isDirty && (
          <Box display="flex" justifyContent="end" mt="50px">
            <Button onClick={() => reset()} color="primary" variant="contained">
              Annuler
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              sauvegarder
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
}
