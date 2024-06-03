import React, { forwardRef } from "react";

const CustomInputComponent = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default CustomInputComponent;
