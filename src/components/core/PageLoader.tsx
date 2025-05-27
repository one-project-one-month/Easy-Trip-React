import React, { JSX, Suspense } from "react";

export default function PageLoader<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={<></>}>
        <Component {...(props as P)} />
      </Suspense>
    );
  };
}
