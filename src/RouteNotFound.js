import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const RouteNotFound = ({ timeoutSeconds }) => {
  const error = useRouteError();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("");
    }, timeoutSeconds * 1000);
  });

  return (
    <div className="container text-center">
      <h1>404</h1>
      <p>Sorry, we couldn't find that page.</p>
      <p>
        Redirecting in {timeoutSeconds}{" "}
        {timeoutSeconds > 1 ? "seconds" : "second"}
        <i>{JSON.parse(error)}</i>
      </p>
    </div>
  );
};

export default RouteNotFound;
