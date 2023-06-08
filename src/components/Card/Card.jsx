import React from "react";
import "./card.scss";
import Line from "../LineChart/Line";
import { LineData } from "../../Data/SidebarData";

const Card = ({ title, figure, chart, graph }) => {

    const data = graph;

  return (
    <div className="card">
      <div className="up">
        <p>{title}</p>
        <h6>{figure}</h6>
      </div>
      <div className="bottom">
        {chart}
      </div>
    </div>
  );
};

export default Card;
