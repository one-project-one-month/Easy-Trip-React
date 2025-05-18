/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { PuffLoader } from "react-spinners";

import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center !bg-background w-full h-full fixed inset-0",
        className
      )}
    >
      <PuffLoader color='hsl(217, 100%, 59%)' />
    </div>
  );
};

export default Loader;
