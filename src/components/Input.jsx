import { forwardRef, useId } from "react";

// const Input = forwardRef(({props}, ref) => {})
const Input = forwardRef(function Input(
  { 
    label, 
    type = "text", 
    className = "", 
    ...props 
  },ref) 
  {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
});

export default Input;
