import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div className="bgError"></div>;
}

export default ErrorPage;
