import { useState } from "react";
import SearchBox from "./search-box/SearchBox";
import DatePicker from "./date-picker/DatePicker";
import { Button } from "@/components/ui/button";

export const places = [
  { value: "mandalay", label: "Mandalay" },
  { value: "naypyidaw", label: "Naypyidaw" },
  { value: "bago", label: "Bago" },
  { value: "mawlamyine", label: "Mawlamyine" },
  { value: "taunggyi", label: "Taunggyi" },
  { value: "sittwe", label: "Sittwe" },
  { value: "pathein", label: "Pathein" },
  { value: "yangon", label: "Yangon" },
  { value: "bagan", label: "Bagan" },
  { value: "kalaw", label: "Kalaw" },
  { value: "chaung thar", label: "Chaung Thar" },
  { value: "naapli", label: "Ngapli" },
  { value: "ngwe saung", label: "Ngwe Saung" },
  { value: "bate tha noe", label: "Bate Tha Noe" },
  { value: "hsipaw", label: "Hsipaw" },
];

export default function SearchInputs() {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [date, setDate] = useState<Date | null>();
  const [chooseDate, setChooseDate] = useState<Date>();
  const [showDestination, setShowDestination] = useState(false);

  const isLoading = false; // နေရာတွေက api ကနေတောင်းမယ်။ အဲမှာ loading ဖြစ်နေရင် loading ပြမယ်။

  const enableSearchButton = !!selectedValue.length && !!inputValue.length;

  const handleSearch = () => {
    setShowDestination(true);
    setSearchedValue(selectedValue);
    setChooseDate(date as Date);
    setInputValue("");
    setSelectedValue("");
    setDate(null);
  };
  return (
    <div>
      <div className="flex items-center flex-row justify-center m-8 p-4 gap-1">
        <SearchBox
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          setInputValue={setInputValue}
          inputValue={inputValue}
          items={places ?? []}
          isLoading={isLoading}
          emptyMessage="No place found."
          placeholder="Type your destination (e.g.Bagan)"
        />
        <DatePicker date={date as Date} setDate={setDate} />
        <Button
          className="rounded-full cursor-pointer"
          disabled={!enableSearchButton}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {showDestination && (
        <div className="flex items-center flex-col justify-center m-8 p-4 gap-1">
          <h1> Destination is {searchedValue}</h1>
          <h1>
            Date is {chooseDate?.getDate()} ,{chooseDate?.getMonth()},
            {chooseDate?.getFullYear()}
          </h1>
        </div>
      )}
    </div>
  );
}
