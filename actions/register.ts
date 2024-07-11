"use server";
import { z } from "zod";
import { registerSchema } from "@/validatorSchema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = values;

  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already registered! Please Login" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user with a Basic subscription
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        subscription: {
          create: {
            type: "Basic",
          },
        },
      },
    });

    // TODO SEND VERIFICATION EMAIL

    return { success: "Registration success! Check your Email" };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred during registration" };
  }
};
