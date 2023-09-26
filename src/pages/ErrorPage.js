import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <p>{error.message}</p>;
}

export default ErrorPage;
