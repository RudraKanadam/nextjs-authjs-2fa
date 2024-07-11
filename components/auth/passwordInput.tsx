import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/auth/input";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface PasswordInputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; // Add disabled prop
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        disabled={disabled} // Pass disabled prop to Input
        className="pr-10"
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <IconEyeOff className="h-5 w-5 text-gray-500" />
        ) : (
          <IconEye className="h-5 w-5 text-gray-500" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
