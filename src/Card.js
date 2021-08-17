import React, {useContext} from "react";
import Context from "./Context";

export default function Card({number}) {
  const value = useContext(Context);
  const handlerClick = () => {
    value.count(number);
  }
  return (
    <div className="card m-2">
      <div className="card-body">
        <p>Купите наши книги:</p>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={handlerClick}
        >
          Купить книгу
        </button>
      </div>
    </div>
  );
}
