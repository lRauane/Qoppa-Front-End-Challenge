import { z } from "zod";

export const schemaForm = z
  .object({
    username: z.string().min(3, "Seu nome deve ter pelo menos 3 caracteres."),
    email: z.string().email("E-mail inválido."),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres."),
  })
  .transform((field) => ({
    username: field.username,
    email: field.email,
    password: field.password,
  }));