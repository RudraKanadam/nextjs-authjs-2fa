"use client";
import React, { ChangeEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation"; // Ensure we're importing from 'next/navigation'
import Link from "next/link";
import { Label } from "@/components/auth/label";
import { Input } from "@/components/auth/input";
import FormContainer from "@/components/auth/formContainer";
import SocialButtons from "@/components/auth/socialButtons";
import SubmitButton from "@/components/auth/submitButton";
import LabelInputContainer from "@/components/auth/labelInputContainer";
import PasswordInput from "@/components/auth/passwordInput";
import { loginSchema } from "@/validatorSchema";
import FormError from "@/components/auth/formError";
import FormSuccess from "@/components/auth/formSuccess";
// import { login } from "@/actions/login";

export default function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | undefined>("");
  const [serverSuccess, setServerSuccess] = useState<string | undefined>("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setServerError("");
    setServerSuccess("");
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.format();

      setErrors({
        email: fieldErrors.email?._errors[0] || "",
        password: fieldErrors.password?._errors[0] || "",
      });

      return;
    }

    // Clear errors if validation passes
    setErrors({ email: "", password: "" });

    // Proceed with form submission logic
    startTransition(() => {
      console.log("LOGIN FUNCTION EXECUTION");
      //   login(formData).then((data) => {
      //     if (data) {
      //       setServerError(data.error);
      //       setServerSuccess(data.success);
      //       if (data.success && data.redirect) {
      //         router.push(data.redirect);
      //       }
      //     }
      //   });
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <FormContainer
      title="Welcome Back!"
      subtitle="May the force be with you 🖖"
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="your-email@example.com"
            type="email"
            disabled={isPending}
            value={formData.email}
            onChange={handleChange}
          />
          <FormError message={errors.email} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            placeholder="••••••••"
            disabled={isPending}
            value={formData.password}
            onChange={handleChange}
          />
          <FormError message={errors.password} />
        </LabelInputContainer>
        <div className="mt-4 mb-2 text-right">
          <Link
            href="/forgot-password"
            className="text-blue-500 hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>
        <SubmitButton disabled={isPending} type="submit">
          Login &rarr;
        </SubmitButton>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        {serverError && <FormError message={serverError} />}
        {serverSuccess && <FormSuccess message={serverSuccess} />}
        <SocialButtons />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link href="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
