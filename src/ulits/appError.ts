import { StatusCode } from "./status";

class AppError extends Error {
  public statusCode: StatusCode = StatusCode.InternalServerError;
  errorMessage: string | undefined = undefined;
  constructor(status: StatusCode, message: string) {
    super(message + " : " + status);
    this.errorMessage = message + " : " + status;
    this.name = "AppError";
    this.statusCode = status;

    (Error as any).captureStackTrace(this, this.constructor);
  }
}

export default AppError;
