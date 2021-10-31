import React from "react";
import { getPagesArray } from "../../utils/pages";
import { MyBtn } from "../btn/MyBtn";

export const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);

  return (  
    <div className="pagination-wrapper">
      {pagesArray.map((it) => (
        <MyBtn
          key={it}
          className={it === page ? "page page-current" : null}
          onClick={() => changePage(it)}
        >
          {it}
        </MyBtn>
      ))}
    </div>
  );
};
