"use server";
import { z } from "zod";
import { loginSchema } from "@/validatorSchema";

export const login = async (values: z.infer<typeof loginSchema>) => {
  try {
    console.log("Login values:", values);
  } catch (error) {
    console.error("Login error:", error);
  }
};
