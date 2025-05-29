import React from "react";
import { Image, Info } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { Destination } from "@/type/Destination";

export default function SearchValueBox({
  data,
  isShow,
  setIsShow,
  isLoading,
  destination,
  setDestination,
  setInput,
}: {
  data: Destination[];
  isShow: boolean;
  isLoading: boolean;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (isLoading) {
    return (
      <>
        {isShow && (
          <div className="grid grid-cols-2 top-[4rem] w-full border rounded-2xl shadow-sm bg-white p-3 z-30 gap-3 absolute">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[50px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {isShow && (
        <div className="grid grid-cols-2 top-[4rem] w-full border rounded-2xl shadow-sm bg-white p-3 z-30 gap-3 absolute">
          {data && data.length > 0 ? (
            data.map((item, index) => {
              const exist = item.destination === destination;

              return (
                <Card
                  key={index}
                  className={`py-3 hover:bg-neutral-100 cursor-pointer border-0 shadow-none ${exist && "bg-neutral-800 hover:bg-neutral-800 text-white"}`}
                  onClick={() => {
                    console.log("item", exist ? "" : item.id);
                    setDestination(() => (exist ? "" : item.id));
                    setInput(() => (exist ? "" : item.destination_name));
                    setIsShow(() => exist ?? false);
                  }}
                >
                  <CardHeader className="flex space-x-1 items-center">
                    <div className="grid justify-center items-center rounded-lg h-14 w-14">
                      <Image size={40} className="text-neutral-400" />
                    </div>
                    <div>
                      <CardTitle>{item.destination_name}</CardTitle>
                      <CardDescription>{item.state_region}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })
          ) : (
            <div className="grid col-span-2 p-4 w-full justify-center items-center">
              <div className="flex text-neutral-400 flex-col justify-center items-center">
                <Info />
                <span>Couldn't Find Any</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
