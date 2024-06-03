import React, { useRef } from "react";
import CustomImperativeHandleInput, {
  ICustomImperativeHandleInput,
} from "./CustomImperativeHandleInput";

const UseImperativeHandleDemo = () => {
  const inputRef = useRef<ICustomImperativeHandleInput>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focusInput();
    }
  };
  return (
    <>
      <CustomImperativeHandleInput ref={inputRef} />{" "}
      <button onClick={handleClick}>Focus Input</button>{" "}
    </>
  );
};

export default UseImperativeHandleDemo;
