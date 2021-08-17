import React from "react";
import Card from "./Card";

export default function CardWrapper() {
  return (
    <div className="card">
      <div className="d-flex flex-row justify-content-center">
        <Card number={3} />
        <Card number={5} />
        <Card number={7} />
        <Card number={9} />
      </div>
    </div>
  );
}
