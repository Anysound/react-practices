import React from "react";
import { useHistory } from "react-router-dom";

export default function Card() {
  const history = useHistory();
  return (
    <>
      <p>Card component</p>
      <button onClick={() => history.goBack()}>back</button>
    </>
  );
}
