import { useEffect, useState } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const RouteNotFound = ({ timeoutSeconds }) => {
  const error = useRouteError();
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(5);

  useEffect(() => {
    /* setTimeout(() => {
      navigate("");
    }, timeoutSeconds * 1000); */

    const countdownInterval = setInterval(() => {
      updateTimer();

      if (timeRemaining === 0) {
        navigate("");
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  });

  const updateTimer = () => {
    setTimeRemaining((prevValue) => prevValue - 1);
  };

  return (
    <div className="container text-center">
      <h1>404</h1>
      <p>Sorry, we couldn't find that page.</p>
      <p>
        Redirecting in {timeRemaining}{" "}
        {timeRemaining > 1 ? "seconds" : "second"}
        <i>{JSON.parse(error)}</i>
      </p>
    </div>
  );
};

export default RouteNotFound;
