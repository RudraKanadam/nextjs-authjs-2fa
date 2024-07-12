import { db } from "../lib/db";
import bcrypt from "bcryptjs";
import { UserRole, SubscriptionType } from "@prisma/client";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      include: { subscription: true },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: { subscription: true },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by id:", error);
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany({
      include: { subscription: true },
    });
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
};
