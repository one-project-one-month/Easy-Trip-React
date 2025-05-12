import React, { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

export type FormInputProps<TValues extends FieldValues> = Omit<
  React.ComponentProps<"input">,
  "form" | "name"
> & {
  form: UseFormReturn<TValues>;
  name: Path<TValues>;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  labelClassName?: string;
  wrapperClassName?: string;
};

const FormInput = <TValues extends FieldValues>({
  form,
  name,
  label,
  type = "text",
  labelClassName,
  wrapperClassName,
  ...props
}: FormInputProps<TValues>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleViewPassword = () => {
    setShowPassword((prev) => (prev ? false : true));
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(wrapperClassName)}>
          <FormLabel
            className={cn("text-gray-700 font-medium", labelClassName)}
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </FormLabel>

          <FormControl>
            <div className='relative'>
              <Input
                type={type === "password" && showPassword ? "text" : type}
                {...field}
                {...props}
                className={cn(
                  "border-gray-300 rounded-lg transition-all pr-10",
                  props.className
                )}
              />

              {type === "password" && (
                <span
                  onClick={handleViewPassword}
                  className='absolute z-10 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all'
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </span>
              )}
            </div>
          </FormControl>
          <FormMessage className='text-xs' />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
