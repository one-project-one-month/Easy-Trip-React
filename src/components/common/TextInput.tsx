import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Control } from "react-hook-form";
import { EyeClosed, Eye } from "lucide-react";

type TextInput = {
  name: string;
  label: string;
  type: "TEXT" | "PASSWORD";
  control: Control<any>;
};

const TextInput = (props: TextInput) => {
  const { control, name, type, label } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleViewPassword = () => {
    setShowPassword(prev => (prev ? false : true));
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-700 font-medium">{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder="Enter your password"
                {...field}
                className="border-gray-300 rounded-lg transition-all pr-10"
                type={
                  type === "PASSWORD"
                    ? showPassword
                      ? "text"
                      : "password"
                    : "text"
                }
              />
              {type === "PASSWORD" && (
                <span
                  onClick={handleViewPassword}
                  className="absolute z-10 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeClosed className="w-5 h-5" />
                  )}
                </span>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
