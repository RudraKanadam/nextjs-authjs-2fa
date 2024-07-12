import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { loginSchema } from "@/validatorSchema";
import { getUserByEmail, getUserById } from "@/data/user";
import { UserRole, SubscriptionType } from "@prisma/client"; // Ensure these imports

const options = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const validatedFields = loginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            // Fetch subscription details
            const subscription = user.subscriptionId
              ? await db.subscription.findUnique({
                  where: { id: user.subscriptionId },
                })
              : null;

            // Return user with subscription details
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role as UserRole,
              subscriptionId: subscription ? subscription.id : null,
              subscriptionType: subscription ? subscription.type : null,
            };
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.name && session.user) {
        session.user.name = token.name;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      if (token.subscriptionId !== undefined && session.user) {
        session.user.subscriptionId = token.subscriptionId;
      }

      if (token.subscriptionType !== undefined && session.user) {
        session.user.subscriptionType = token.subscriptionType;
      }

      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.role = user.role;
        token.subscriptionId = user.subscriptionId;
        token.subscriptionType = user.subscriptionType;
      } else if (token.sub) {
        const existingUser = await getUserById(token.sub);
        if (existingUser) {
          token.role = existingUser.role;
          token.name = existingUser.name;
          if (existingUser.subscriptionId) {
            const subscription = await db.subscription.findUnique({
              where: { id: existingUser.subscriptionId },
            });
            if (subscription) {
              token.subscriptionId = subscription.id;
              token.subscriptionType = subscription.type;
            }
          }
        }
      }
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);
export default NextAuth(options);
