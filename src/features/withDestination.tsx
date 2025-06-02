import React from "react";
import { Navigate, useLocation } from "react-router";

import useAppSettingStore from "@/store/appSettingStore";

const withDestination = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return function DestinationComponent(props: P) {
    const destination = useAppSettingStore(s => s.destination);
    const location = useLocation();

    if (!destination?.destination_id) {
      return (
        <Navigate to="/plan/init" state={{ from: location.pathname }} replace />
      );
    }

    const hasAnySetupData = [
      "budget",
      "attendentsType",
      "startDate",
      "endDate",
      "destination_id",
    ].some(key => Boolean((destination as Record<string, any>)?.[key]));

    if (!hasAnySetupData) {
      return (
        <Navigate
          to="/plan/setup"
          state={{ from: location.pathname }}
          replace
        />
      );
    }

    return <Component {...(props satisfies object)} />;
  };
};

export default withDestination;
