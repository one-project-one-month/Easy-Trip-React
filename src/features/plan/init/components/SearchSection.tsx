import { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";
import SearchValueBox from "./SearchValueBox";
import { useSearchPlace } from "../../hooks/usePlan";
import useAppSettingStore from "@/store/appSettingStore";
import { useNavigate } from "react-router";

function SearchSection() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setDestinationSetting } = useAppSettingStore();
  const navigate = useNavigate();

  const { data, refetch, isLoading } = useSearchPlace(
    searchValue ? searchValue.toLowerCase() : ""
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(input);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    if (searchValue.toLowerCase().trim()) {
      refetch();
    }
  }, [searchValue, refetch]);

  const handleSearch = () => {
    setDestinationSetting({ destination_id: destination });
    navigate("/plan/setup");
  };

  return (
    <>
      <header>
        <h1 className="text-5xl mb-2 font-extrabold text-center text-neutral-800 leading-tight drop-shadow-md">
          Where do you want to go?
        </h1>

        <p className="text-lg text-center text-neutral-600 max-w-xl">
          Start your journey through the beauty of Myanmar. Choose a destination
          and let's explore!
        </p>
      </header>

      <section
        ref={wrapperRef}
        className="flex flex-col relative md:flex-row items-center gap-3 w-full md:w-2/3 lg:w-1/2"
      >
        <SearchValueBox
          destination={destination}
          setDestination={setDestination}
          setInput={setInput}
          isLoading={isLoading}
          data={data?.content}
          isShow={isShow}
          setIsShow={setIsShow}
        />
        <div className="relative w-full">
          <Input
            className="rounded-full pl-12 pr-4 py-4 h-12 shadow-md text-base focus:ring-2 focus:ring-primary"
            type="text"
            value={input}
            onFocus={() => setIsShow(true)}
            onChange={e => setInput(e.target.value)}
            placeholder="Search destinations, cities, or landmarks"
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500"
            size={20}
          />
        </div>
        <Button
          onClick={handleSearch}
          disabled={!(destination.length > 0)}
          className="rounded-full h-12 text-base px-8 shadow-md bg-primary text-white hover:bg-primary/90 transition"
        >
          Confirm
        </Button>
      </section>
    </>
  );
}

export default SearchSection;
