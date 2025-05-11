import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
import { Input } from "../../../components/ui/input";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "../../../components/ui/popover";
import { Skeleton } from "../../../components/ui/skeleton";

interface Item<T> {
  value: T;
  label: string;
}
type Props<T extends string> = {
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  items: Item<T>[];
  isLoading: boolean;
  emptyMessage: string;
  placeholder: string;
};

export default function SearchBox<T extends string>({
  selectedValue,
  setSelectedValue,
  inputValue,
  setInputValue,
  items,
  isLoading,
  emptyMessage,
  placeholder,
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(items);

  const labels = useMemo(
    () =>
      items.reduce((acc, item) => {
        acc[item.value] = item.label;
        return acc;
      }, {} as Record<string, string>),
    [items]
  );

  const reset = () => {
    setSelectedValue("" as T);
    setInputValue("");
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !e.relatedTarget?.hasAttribute("cmdk-list") &&
      labels[selectedValue] !== inputValue
    ) {
      reset();
    }
  };

  const onSelectItem = (inputValue: string) => {
    if (inputValue === selectedValue) {
      reset();
    } else {
      setSelectedValue(inputValue as T);
      setInputValue(labels[inputValue] ?? "");
    }
    setOpen(false);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("value is ", e.target.value);
    const newItems = items.filter((item) =>
      item.label
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setItemsToShow(newItems);
  };

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <Command shouldFilter={true}>
          <PopoverAnchor asChild>
            <CommandPrimitive.Input
              asChild
              value={inputValue}
              onValueChange={setInputValue}
              onKeyDown={(e) => setOpen(e.key !== "Escape")}
              onMouseDown={() => setOpen((open) => !!inputValue || !open)}
              onFocus={() => setOpen(true)}
              onBlur={onInputBlur}
              className="bg-black text-white py-3 rounded-full min-w-[250px]"
            >
              <Input placeholder={placeholder} onChange={handleChangeSearch} />
            </CommandPrimitive.Input>
          </PopoverAnchor>
          {!open && <CommandList aria-hidden="true" className="hidden" />}
          <PopoverContent
            asChild
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (
                e.target instanceof Element &&
                e.target.hasAttribute("cmdk-input")
              ) {
                e.preventDefault();
              }
            }}
            className="w-[--radix-popover-trigger-width] min-w-[250px] p-0 text-white bg-black"
          >
            <CommandList className="max-h-60 overflow-y-auto custom-scrollbar">
              {isLoading && (
                <CommandPrimitive.Loading>
                  <div className="p-3 space-y-2">
                    <Skeleton className="h-4 w-full bg-gray-500/30 dark:bg-gray-300/30" />
                    <Skeleton className="h-4 w-[90%] bg-gray-500/30 dark:bg-gray-300/30" />
                    <Skeleton className="h-4 w-[75%] bg-gray-500/30 dark:bg-gray-300/30" />
                  </div>
                </CommandPrimitive.Loading>
              )}
              {itemsToShow.length > 0 && !isLoading ? (
                <CommandGroup>
                  {itemsToShow.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onMouseDown={(e) => e.preventDefault()}
                      onSelect={onSelectItem}
                      className="bg-gray-800 my-[5px] mx-[2px] text-white"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedValue === item.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
              {!isLoading ? <CommandEmpty>{emptyMessage}</CommandEmpty> : null}
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>
    </div>
  );
}
