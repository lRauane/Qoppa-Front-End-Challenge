"use client";

import api from "@/api/api";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { ErrorMessage } from "@/components/ErrorMessage";
import TextInput from "@/components/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const validation = z.object({
  username: z.string().min(1, { message: "Nome é obrigatório." }),
  email: z
  .string()
  .min(1, { message: "E-mail é obrigatório" })
  .email({ message: "Forneça um E-mail válido." }),
  password: z
        .string()
        .min(8, { message: "A senha deve ter no minímo 8 caracteres." }),
});


type registrationSchema = z.infer<typeof validation>;

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<registrationSchema>({
    resolver: zodResolver(validation),
  });

  const onSubmit = async (data: registrationSchema) => {
    try {
      const response = await api.post("/singUp", data);

      if (response.status === 200) {
        toast.success("Cadastro bem sucedido!!");
        reset();
      } else {
        toast.error("Erro ao cadastrar o usuário.");
      }
    } catch (error) {
      console.error("Erro ao enviar a solicitação POST:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen-navbar">
      <Card>
        <h1 className="font-bold text-xl">Cadastre-se</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInput
              type="text"
              {...register("username")}
              placeholder="Nome"
              iconLeft="uil:user"
            />
            {errors.username && (
              <span>{errors.username.message}</span>
            )}
          </div>

          <div>
            <TextInput
              type="email"
              {...register("email")}
              placeholder="E-mail"
              iconLeft="uil:envelope-alt"
            />
            {errors.email && (
              <span>{errors.email.message}</span>
            )}
          </div>

          <div>
            <TextInput
              type="password"
              {...register("password")}
              placeholder="Senha"
              iconLeft="uil:key-skeleton-alt"
            />
            {errors.password && (
              <span>{errors.password.message}</span>
            )}
          </div>

          <div className="mt-[24px]">
            <Button type="submit" className="w-[100%]">
              Cadastrar
            </Button>
            <ToastContainer />
          </div>
        </form>
      </Card>
    </main>
  );
}
