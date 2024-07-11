import React from "react";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {title}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {subtitle}
      </p>
    </>
  );
};

export default FormHeader;
