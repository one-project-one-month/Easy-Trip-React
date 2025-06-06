import { StatusCode } from "@/ulits/status";
import InternalServerErrorScreen from "./InternalServerError";

const ErrorHandler = ({ statusCode }: { statusCode: StatusCode }) => {
  switch (statusCode) {
    case StatusCode.Unauthorized:
      return <div>You Are Not Authorized</div>;
    case StatusCode.Forbidden:
      return <div>Access Denied</div>;
    case StatusCode.NotFound:
      return <div>Resource Not Found</div>;
    case StatusCode.InternalServerError:
      return <InternalServerErrorScreen />;
    default:
      return <InternalServerErrorScreen />;
  }
};

export default ErrorHandler;
