import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import StructureModel from "../models/structure";
import { Autocomplete, Box, Divider, TextField } from "@mui/material";
import Header from "../components/Header";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function Structure() {
  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<StructureModel>({
      mode: "onChange",
      //   resolver: yupResolver(schema),
    });
  const onSubmit: SubmitHandler<StructureModel> = (data) => console.log(data);

  return (
    <Box m="40px">
      <Header title={`structure:`} />
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
            name="type"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={["EURL", "SARL", "EIRL"]}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => <TextField label="Type" {...params} />}
              />
            )}
          />

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
                renderInput={(params) => (
                  <TextField label="unite mere" {...params} />
                )}
              />
            )}
          />

          <Controller
            name="costCenterCode"
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                options={["EURL", "SARL", "EIRL"]}
                onChange={(e, data) => onChange(data)}
                renderInput={(params) => (
                  <TextField label="Centre de cout" {...params} />
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
