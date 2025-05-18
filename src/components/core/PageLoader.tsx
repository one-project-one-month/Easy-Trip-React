import React, { JSX, Suspense } from "react";
import { Loader } from "@/components/core/layout";

export default function PageLoader<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...(props as P)} />
      </Suspense>
    );
  };
}
