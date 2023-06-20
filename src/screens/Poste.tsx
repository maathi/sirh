import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import StructureModel from "../models/structure";
import { Autocomplete, Box, Divider, TextField } from "@mui/material";
import Header from "../components/Header";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import EmploiModel from "../models/Emploi";
import PosteModel from "../models/Poste";

export default function Poste() {
  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<PosteModel>({
      mode: "onChange",
      //   resolver: yupResolver(schema),
    });
  const onSubmit: SubmitHandler<PosteModel> = (data) => console.log(data);

  return (
    <Box m="40px">
      <Header title={`Poste:`} />
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
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Nom"
                {...register("name")}
                error={!!formState.errors.name}
                helperText={formState.errors.name?.message}
              />
            )}
          />
          <Controller
            name="code"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Code"
                {...register("code")}
                error={!!formState.errors.code}
                helperText={formState.errors.code?.message}
              />
            )}
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
            name="branch"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={["EURL", "SARL", "EIRL"]}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => (
                  <TextField label="Etablissement" {...params} />
                )}
              />
            )}
          />

          <Controller
            name="unit"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={["EURL", "SARL", "EIRL"]}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => <TextField label="BU" {...params} />}
              />
            )}
          />

          <Controller
            name="emploi"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={["EURL", "SARL", "EIRL"]}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => (
                  <TextField label="Empoloi" {...params} />
                )}
              />
            )}
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
            name="date_0"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="date debut"
                onChange={onChange}
                value={dayjs(value)}
              />
            )}
          ></Controller>
          <Controller
            name="date_1"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="date fin"
                onChange={onChange}
                value={dayjs(value)}
              />
            )}
          ></Controller>
        </Box>
      </form>
    </Box>
  );
}
