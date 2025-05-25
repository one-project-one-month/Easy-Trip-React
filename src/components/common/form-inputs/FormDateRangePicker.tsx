import React from "react";
import { format as dateFormat } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { DayPicker } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

export type FormDateRangePickerProps<TValues extends FieldValues> = Omit<
  React.ComponentProps<typeof DayPicker>,
  "onSelect" | "selected" | "mode" | "numberOfMonths"
> & {
  form: UseFormReturn<TValues>;
  name: Path<TValues>;
  label: string;
  format?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
};

const FormDateRangePicker = <TValues extends FieldValues>({
  form,
  name,
  label,
  format = "yyyy-MM-dd",
  labelClassName,
  placeholder = "Pick a date",
  className,
  ...props
}: FormDateRangePickerProps<TValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          <FormLabel
            className={cn("text-gray-700 font-medium", labelClassName)}
          >
            {label}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "pl-3 text-left font-normal",
                    !field?.value && "text-muted-foreground"
                  )}
                >
                  {field?.value?.from ? (
                    field?.value?.to ? (
                      <>
                        {field?.value.from} ~ {field?.value.to}
                      </>
                    ) : (
                      dateFormat(field?.value.from, format)
                    )
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                numberOfMonths={2}
                selected={field.value}
                onSelect={newRange => {
                  const fromStr = newRange?.from
                    ? dateFormat(newRange.from, format)
                    : "";

                  const toStr = newRange?.to
                    ? dateFormat(newRange.to, format)
                    : "";

                  field.onChange({ from: fromStr, to: toStr });
                }}
                {...props}
              />
            </PopoverContent>
          </Popover>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default FormDateRangePicker;
