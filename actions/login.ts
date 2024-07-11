"use server";
import { z } from "zod";
import { loginSchema } from "@/validatorSchema";
import { signIn } from "@/auth";
import {
  DEFAULT_USER_LOGIN_REDIRECT,
  DEFAULT_ADMIN_LOGIN_REDIRECT,
} from "../routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof loginSchema>) => {
  try {
    console.log("Login values:", values);
    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
      console.log("Validation failed:", validatedFields.error);
      return { error: "Invalid Fields" };
    }

    const { email, password } = validatedFields.data;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("Login result:", result);

    if (result?.error) {
      return { error: result.error };
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return { error: "User not found!" };
    }

    const redirectUrl =
      user.role === "admin"
        ? DEFAULT_ADMIN_LOGIN_REDIRECT
        : DEFAULT_USER_LOGIN_REDIRECT;

    return { success: "Login Success", redirect: redirectUrl };
  } catch (error) {
    console.error("Login error:", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    return { error: "Something went wrong!" };
  }
};
