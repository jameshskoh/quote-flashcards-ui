import { Link, useRouteError } from "react-router-dom";
import { routes } from "../invariants/Constants.ts";

type RouteErrorType = {
  statusText?: string;
  message: string;
};

export const ErrorPage = () => {
  const error = useRouteError() as RouteErrorType;
  console.error(error);

  return (
    <div className="mt-[70%] w-full flex-col justify-center text-center align-middle">
      <div className="roblock h-32">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="font-bold">Sorry, an unexpected error has occurred.</p>
        <p className="italic">
          Error message: {error.statusText || error.message}
        </p>
      </div>
      <div>
        <p>
          Click{" "}
          <Link to={routes.main} className="underline">
            here
          </Link>{" "}
          to go home
        </p>
      </div>
    </div>
  );
};
