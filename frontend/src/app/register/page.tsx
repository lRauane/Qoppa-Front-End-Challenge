"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import React, { useCallback, useEffect } from "react";
import { useRegister } from "../hook/useRegister";

export default function Register() {
  const {errors, handleSubmit, handleFormSubmit, register} = useRegister();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen-navbar">
      <Card>
        <h1 className="font-bold text-xl">Cadastre-se</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <TextInput
            {...register("username")}
            type="text"
            placeholder="Nome"
            iconLeft="uil:user"
          />
          {errors.username?.message && (
            <p className="text-red-600">{errors.username?.message}</p>
          )}

          <TextInput
            {...register("email")}
            type="email"
            placeholder="E-mail"
            iconLeft="uil:envelope-alt"
          />
          {errors.email?.message && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}

          <TextInput
            {...register("password")}
            type="password"
            placeholder="Senha"
            iconLeft="uil:key-skeleton-alt"
          />
          {errors.password?.message && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}

          <div className="mt-[24px]">
            <Button type="submit" className=" w-[100%]">
              Cadastrar
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
}
