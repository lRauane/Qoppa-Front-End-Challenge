import { schemaForm } from "../schema/registerSchema";

export type FormProps = Zod.infer<typeof schemaForm>;