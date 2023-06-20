import { Button, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import React from "react";
import UserModel from "../models/UserModel";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Signup() {
  const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(4),
  });

  const { register, handleSubmit, watch, formState, reset, control } =
    useForm<UserModel>({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<UserModel> = (data) => {
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((d) => {
        localStorage.setItem("access_token", d.access_token);
        localStorage.setItem("refresh_token", d.refresh_token);
      })
      .catch((e) => {
        alert("tiiit");
        console.log(e);
      });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Email"
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
              required
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Password"
              type="password"
              error={!!formState.errors.password}
              helperText={formState.errors.password?.message}
              required
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
