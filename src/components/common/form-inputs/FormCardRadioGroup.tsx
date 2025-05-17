import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { CircleCheck } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export type RadioOptions = {
  value: string | number | Date | boolean;
  label: React.ReactNode;
  info?: React.ReactNode;
}[];

export type FormCardRadioGroupProps<TValues extends FieldValues> = Omit<
  React.ComponentProps<"input">,
  "form" | "name"
> & {
  form: UseFormReturn<TValues>;
  name: Path<TValues>;
  label: string;
  wrapperClassName?: string;
  labelClassName?: string;
  radioClassName?: string;
  options: RadioOptions;
};

const FormCardRadioGroup = <TValues extends FieldValues>({
  label,
  form,
  name,
  wrapperClassName,
  labelClassName,
  radioClassName,
  options,
  ...props
}: FormCardRadioGroupProps<TValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", wrapperClassName)}>
          <FormLabel
            className={cn("text-gray-700 font-medium", labelClassName)}
          >
            {label}
            {props.required && <span className='text-red-500'>*</span>}
          </FormLabel>

          <FormControl className='w-full'>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn('flex items-center gap-2', radioClassName)}
            >
              {options.map((item) => (
                <FormItem key={item.value.toLocaleString()}>
                  <FormControl>
                    <RadioGroupItem
                      value={item.value.toLocaleString()}
                      className='hidden'
                    />
                  </FormControl>

                  <FormLabel className='font-normal cursor-pointer'>
                    <Card
                      className={cn(
                        "w-40 flex items-center transition-all justify-center space-y-0 relative",
                        props.className,
                        {
                          "ring ring-neutral-800": field.value === item.value,
                        }
                      )}
                    >
                      <div className='flex flex-col items-center justify-center gap-1'>
                        <p className='text-base font-semibold'>{item.label}</p>

                        {item.info && (
                          <span className='text-xs text-neutral-600'>
                            {item.info}
                          </span>
                        )}
                      </div>

                      <CircleCheck
                        size={16}
                        className={cn(
                          "absolute right-2 top-1 opacity-0 transition-all",
                          {
                            "opacity-100": field.value === item.value,
                          }
                        )}
                      />
                    </Card>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className='text-xs' />
        </FormItem>
      )}
    />
  );
};

export default FormCardRadioGroup;
