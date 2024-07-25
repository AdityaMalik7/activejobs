import React from "react";

const Button = ({ variant = "solid", children, ...props }) => {
  const baseClasses = "px-4 py-2 font-semibold rounded-3xl mr-2 ";

  const variantClasses =
    variant === "outlined"
      ? "border-2 h-14 border-black"
      : "bg-black h-14 text-white";

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
