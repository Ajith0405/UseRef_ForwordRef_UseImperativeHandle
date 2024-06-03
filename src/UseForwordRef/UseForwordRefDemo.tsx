import React, { useRef } from "react";
import CustomInputComponent from "./CustomInputComponent";

const UseForwordRefDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const refFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <CustomInputComponent ref={inputRef} />
      <button onClick={refFocus}>Focus</button>
    </>
  );
};

export default UseForwordRefDemo;
