import { useState } from "react";
import "./FunFactComponent.scss";

const FunFactComponent = (props) => {
  const [fact] = useState(props);

  return (
    <div className="fun-fact">
      <div className="fun-fact-count">{fact.count}</div>
      <div className="fun-fact-summary">{fact.summary}</div>
      <div className="abs-circle"></div>
    </div>
  );
};

export default FunFactComponent;
