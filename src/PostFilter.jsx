import React from "react";
import { MyInput } from "./UI/input/MyInput";
import { Select } from "./UI/select/Select";

export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder="search..."
        value={filter.search}
        onChange={(e) => setFilter({...filter, search: e.target.value})}
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "по названию" },
          { value: "body", name: "по описанию" },
        ]}
      />
    </div>
  );
};
