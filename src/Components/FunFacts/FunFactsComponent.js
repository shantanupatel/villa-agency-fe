// import { useState } from "react";
import "./FunFactsComponent.scss";
import FunFactComponent from "./FunFactComponent";

const FunFactsComponent = () => {
  // const [fact, setFact] = useState({});
  const facts = [
    { id: 1, count: 34, summary: "Buildings Finished Now" },
    { id: 2, count: 12, summary: "Years Experience" },
    { id: 3, count: 24, summary: "Awards Won 2023" },
    { id: 4, count: 34, summary: "Buildings Finished Now" },
    { id: 5, count: 12, summary: "Years Experience" },
    { id: 6, count: 24, summary: "Awards Won 2023" },
  ];

  const factsList = facts.map((fact) => (
    <div className="col-lg-4 fun-facts-item" key={fact.id}>
      <FunFactComponent count={fact.count} summary={fact.summary} />
    </div>
  ));

  return (
    <div className="fun-facts">
      <div className="container">
        <div className="row">
          {/* {facts.map((fact) => {
            console.log(fact);

            <div className="col-lg-4 fun-facts-item">
              <FunFactComponent count={fact.count} summary={fact.summary} />
            </div>;
          })} */}

          {/* <div className="col-lg-4 fun-facts-item">
            <FunFactComponent count="34" summary="" />
          </div>

          <div className="col-lg-4 fun-facts-item">
            <FunFactComponent count="12" summary="" />
          </div>

          <div className="col-lg-4 fun-facts-item">
            <FunFactComponent count="24" summary="" />
          </div> */}

          {factsList}
        </div>
      </div>
    </div>
  );
};

export default FunFactsComponent;
