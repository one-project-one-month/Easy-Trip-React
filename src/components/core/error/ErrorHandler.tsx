import { StatusCode } from "@/ulits/status";

const ErrorHandler = ({ statusCode }: { statusCode: StatusCode }) => {
  switch (statusCode) {
    case StatusCode.Unauthorized:
      return <div>You Are Not Authorized</div>;
    case StatusCode.Forbidden:
      return <div>Access Denied</div>;
    case StatusCode.NotFound:
      return <div>Resource Not Found</div>;
    case StatusCode.InternalServerError:
      return <div>Internal Server Error</div>;
    default:
      return <div>Internal Server Error</div>;
  }
};

export default ErrorHandler;
