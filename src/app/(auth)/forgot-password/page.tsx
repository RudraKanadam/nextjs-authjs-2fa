"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { Label } from "@/components/auth/label";
import { Input } from "@/components/auth/input";
import FormContainer from "@/components/auth/formContainer";
import SubmitButton from "@/components/auth/submitButton";
import LabelInputContainer from "@/components/auth/labelInputContainer";
import { forgotPasswordSchema } from "@/validatorSchema"; // Ensure this path is correct
import FormError from "@/components/auth/formError"; // Ensure this path is correct
import FormSuccess from "@/components/auth/formSuccess"; // Ensure this path is correct

export default function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({ email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse({ email: formData.email });

    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors({
        email: fieldErrors.email?._errors[0] || "",
      });
      setSuccessMessage("");
      return;
    }

    // Clear errors if validation passes
    setErrors({ email: "" });

    // Set success message
    setSuccessMessage(
      "Password reset instructions have been sent to your email address."
    );

    // Proceed with form submission logic
    console.log("Password reset link sent", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <FormContainer
      title="Forgot Password"
      subtitle="Enter your email to reset your password"
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="your-email@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormError message={errors.email} />
        </LabelInputContainer>
        <SubmitButton type="submit">Send Reset Link &rarr;</SubmitButton>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <FormSuccess message={successMessage} />
        <div className="mt-4 text-center">
          <span className="text-gray-600">Remember your password? </span>
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
