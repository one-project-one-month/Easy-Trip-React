import { Suspense } from "react";
import { Loader } from "@/components/core/layout";

export default function PageLoader(Component: any) {
  return (props: any) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}
