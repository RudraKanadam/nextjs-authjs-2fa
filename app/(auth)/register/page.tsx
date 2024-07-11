"use client";
import React, { useState, ChangeEvent, useTransition } from "react";
import Link from "next/link";
import { Label } from "@/components/auth/label";
import { Input } from "@/components/auth/input";
import FormContainer from "@/components/auth/formContainer";
import SocialButtons from "@/components/auth/socialButtons";
import SubmitButton from "@/components/auth/submitButton";
import LabelInputContainer from "@/components/auth/labelInputContainer";
import PasswordInput from "@/components/auth/passwordInput";
import { registerSchema } from "@/validatorSchema";
import FormError from "@/components/auth/formError";
import FormSuccess from "@/components/auth/formSuccess";
import { Checkbox } from "@/components/ui/checkbox";
// import { register } from "@/actions/register";

export default function SignupForm() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | undefined>("");
  const [serverSuccess, setServerSuccess] = useState<string | undefined>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setServerError("");
    setServerSuccess("");
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        name: fieldErrors.name?._errors[0] || "",
        email: fieldErrors.email?._errors[0] || "",
        password: fieldErrors.password?._errors[0] || "",
      });
      return;
    }

    // Clear errors if validation passes
    setErrors({ name: "", email: "", password: "" });

    // Proceed with form submission logic
    startTransition(() => {
      // register(formData).then((data) => {
      //   setServerError(data.error);
      //   setServerSuccess(data.success);
      // });
      console.log("REGISTER FUNCTION");
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
      title="Join Boilerplate"
      subtitle="May the force be with you 🖖"
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Wick"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={isPending}
            />
            <FormError message={errors.name} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="your-email@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isPending}
          />
          <FormError message={errors.email} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            disabled={isPending}
          />
          <FormError message={errors.password} />
        </LabelInputContainer>
        <SubmitButton disabled={isPending} type="submit">
          Register &rarr;
        </SubmitButton>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        {serverError && <FormError message={serverError} />}
        {serverSuccess && <FormSuccess message={serverSuccess} />}
        <SocialButtons />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="mt-4 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
