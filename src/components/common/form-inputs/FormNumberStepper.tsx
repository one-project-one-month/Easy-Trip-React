import React, { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Minus, Plus } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export type FormNumberStepper<TValues extends FieldValues> = Omit<
  React.ComponentProps<"input">,
  "form" | "name"
> & {
  form: UseFormReturn<TValues>;
  name: Path<TValues>;
  label: string;
  labelClassName?: string;
  wrapperClassName?: string;
  min?: number;
  max?: number;
  step?: number;
};

const FormNumberStepper = <TValues extends FieldValues>({
  form,
  name,
  label,
  labelClassName,
  wrapperClassName,
  min = 1,
  max = Infinity,
  step = 1,
  ...props
}: FormNumberStepper<TValues>) => {
  const [inputValue, setInputValue] = useState<number>();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-fit", wrapperClassName)}>
          <FormLabel
            className={cn("text-gray-700 font-medium", labelClassName)}
          >
            {label}
          </FormLabel>

          <FormControl>
            <div className="flex items-center gap-1 border rounded-md w-fit">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                disabled={!(field.value > min)}
                onClick={() =>
                  field.value > min && field.onChange(field.value - step)
                }
              >
                <Minus size={16} />
              </Button>

              <Input
                {...field}
                {...props}
                onBlur={() => {
                  if (inputValue) {
                    setInputValue(undefined);

                    field.onChange(Math.max(min, Math.min(max, inputValue)));
                  }
                }}
                value={inputValue || String(field.value ?? min)}
                onChange={e => {
                  field.onChange(0);
                  const formattedValue = Number(
                    e.target.value.replace(/[^0-9]/g, "")
                  );

                  setInputValue(formattedValue);
                }}
                className={cn(
                  "focus-visible:ring-0 w-auto max-w-20 px-0 border-none outline-none shadow-none text-center",
                  props.className
                )}
              />

              <Button
                variant="ghost"
                size="icon"
                type="button"
                disabled={!((field.value ?? 0) < max)}
                onClick={() =>
                  (field.value ?? 0) < max &&
                  field.onChange((field.value ?? min) + step)
                }
              >
                <Plus size={16} />
              </Button>
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default FormNumberStepper;
