import React from "react";
import "./card.scss";

const Card = ({ title, figure, chart, value }) => {


  return (
    <div className="card">
      <div className="up">
      <div className="left">
      
      <p>{title}</p>
      <h6>{figure}</h6>
      </div>
      <h4>
      {value}
      </h4>
      </div>
      <div className="bottom">
        {chart}
      </div>
    </div>
  );
};

export default Card;
