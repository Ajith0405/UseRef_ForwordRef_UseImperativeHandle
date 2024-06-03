import React, { forwardRef, useImperativeHandle, useRef } from "react";
export interface ICustomImperativeHandleInput {
  focusInput: () => void;
}
const CustomImperativeHandleInput = forwardRef<
  ICustomImperativeHandleInput,
  {}
>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focusInput() {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));
  return <input ref={inputRef} type="text" />;
});

export default CustomImperativeHandleInput;
