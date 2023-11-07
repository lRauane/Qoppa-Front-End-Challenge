import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FormProps } from "../types/register";
import { useForm } from "react-hook-form";
import { schemaForm } from "../schema/registerSchema";
import axios from "axios";
import React from "react";

export const useRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleFetchApi = React.useCallback(async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/singUp");
      console.log(data);
    } catch (error) {
      console.error("Erro na chamada da API:", error);
    }
  }, []);

  React.useEffect(() => {
    handleFetchApi();
  }, [handleFetchApi]);
  
  return{
    errors,
    register,
    handleSubmit,
    handleFormSubmit
  }
}