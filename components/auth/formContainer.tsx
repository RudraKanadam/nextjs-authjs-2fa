import React, { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full mx-auto rounded-none md:rounded-2xl p-2 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          {title}
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
