import { Component, ReactNode } from "react";
import { StatusCode } from "@/ulits/status";
import ErrorHandler from "./ErrorHandler";

interface AppErrorBoundaryWithChildren {
  children: ReactNode;
}

class AppErrorBoundary extends Component<AppErrorBoundaryWithChildren> {
  state: {
    hasError: boolean;
    error: null | Error;
  };

  constructor(props: AppErrorBoundaryWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error): void {
    this.setState({ error });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.state.error) {
        if (this.state.error instanceof Error) {
          console.log(this.state.error, "error ==>");
          //   return <ErrorHandler statusCode={this.state.error.statusCode} />;
          return <ErrorHandler statusCode={StatusCode.InternalServerError} />;
        }
      }

      return <>error</>;
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
