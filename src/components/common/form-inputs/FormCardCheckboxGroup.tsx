/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CircleCheck } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export type CheckboxOptions = {
  value: string | number;
  label: React.ReactNode;
  info?: React.ReactNode;
}[];

export type FormCardCheckboxGroupProps<TValues extends FieldValues> = Omit<
  CheckboxProps,
  "form" | "name"
> & {
  form: UseFormReturn<TValues>;
  name: Path<TValues>;
  label: string;
  options: CheckboxOptions;
  wrapperClassName?: string;
  labelClassName?: string;
};

const FormCardCheckboxGroup = <TValues extends FieldValues>({
  form,
  name,
  label,
  options,
  wrapperClassName,
  labelClassName,
  ...props
}: FormCardCheckboxGroupProps<TValues>) => {
  return (
    <div className={cn("flex flex-col gap-2", wrapperClassName)}>
      <FormLabel className={cn("text-gray-700 font-medium", labelClassName)}>
        {label} {props.required && <span className='text-red-500'>*</span>}
      </FormLabel>

      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          {options.map((item) => (
            <FormField
              key={String(item.value)}
              control={form.control}
              name={name}
              defaultValue={form.getValues(name)}
              render={({ field }) => {
                return (
                  <FormItem
                    key={String(item.value)}
                    className='flex flex-row items-start space-x-3 space-y-0 [&_[data-slot="form-item"]>button:first-child]:!hidden'
                  >
                    <FormControl className="[&_[data-slot='form-item']>button:first-child]:!hidden">
                      <Checkbox
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          const currentValue = field.value || [];

                          return checked
                            ? field.onChange([...currentValue, item.value])
                            : field.onChange(
                                currentValue.filter(
                                  (v: typeof item.value) => v !== item.value
                                )
                              );
                        }}
                        className='hidden'
                        {...props}
                      />
                    </FormControl>

                    <FormLabel className='font-normal cursor-pointer'>
                      <Card
                        className={cn(
                          "w-40 flex items-center transition-all justify-center space-y-0 relative",
                          props.className,
                          {
                            "ring ring-neutral-800": (
                              field.value || []
                            ).includes(String(item.value) as never),
                          }
                        )}
                      >
                        <div className='flex flex-col items-center justify-center gap-1'>
                          <p className='text-base font-semibold'>
                            {item.label}
                          </p>

                          {item.info && (
                            <span className='text-xs text-neutral-600'>
                              {item.info}
                            </span>
                          )}
                        </div>

                        <CircleCheck
                          size={16}
                          className={cn(
                            "absolute right-2 top-1 opacity-0 transition-all text-green-500",
                            {
                              "opacity-100": (field.value || []).includes(
                                String(item.value) as never
                              ),
                            }
                          )}
                        />
                      </Card>
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
        </div>

        {form.formState.errors[name] && (
          <FormMessage className='text-xs'>
            {form?.formState?.errors?.[name]?.message as string}
          </FormMessage>
        )}
      </div>
    </div>
  );
};

export default FormCardCheckboxGroup;
