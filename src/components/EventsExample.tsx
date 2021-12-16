import React, { useRef, useState } from "react";

const EventsExample = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const clickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value, inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDrag(false);
    console.log("drop");
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="управляемый инпут"/>
      <input type="text" placeholder="неуправляемый инпут" ref={inputRef}/>
      <button onClick={clickHandler}>click me</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: "green" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "aqua" : "red",
          marginTop: "40px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
