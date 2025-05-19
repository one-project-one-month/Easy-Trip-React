import React from "react";
import { Navigate } from "react-router";

import { useGetUser } from "@/features/auth/hooks/useAuth";
import { Loader } from "@/components/core/layout";

import { User } from "@/type/Auth";

export type WithAuthProps = {
  user?: User;
};

const withAuth = <T extends WithAuthProps>(
  Component: React.ComponentType<T>
) => {
  return function AuthenticatedComponent(props: Omit<T, keyof WithAuthProps>) {
    const { data, isError, isLoading } = useGetUser();

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return (
        <Navigate to={"/auth"} state={{ from: location.pathname }} replace />
      );
    }

    return <Component {...(props as T)} user={data?.user} />;
  };
};

export default withAuth;
