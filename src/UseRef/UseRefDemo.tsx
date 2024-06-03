import React, { useRef } from "react";

const UseRefDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const useRefFunctions = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }
  };
  const useRefReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const animateInput = () => {
    if (inputRef.current) {
      inputRef.current.style.transition = "color 4s linear 3s";
      inputRef.current.style.transform = "scale(1.0)";
      inputRef.current.style.color = "red";
      inputRef.current.style.fontSize = "16px";
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => console.log(e.target.value)}
      />
      <button onClick={useRefFunctions}>Focus</button>
      <button onClick={useRefReset}>Reset</button>
      <button onClick={animateInput}>Animate input</button>
    </div>
  );
};

export default UseRefDemo;
