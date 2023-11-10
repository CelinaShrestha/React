import React from "react";
import classNames from "classnames";

function Button({
  children,
  type = "submit",
  variant = "edit",
  width = "block",
  ...rest
}) {
  const buttonClasses = classNames("btn", {
    "btn-edit": variant === "edit",
    "btn-delete": variant === "delete",
    "btn-add": variant === "add",
    [width]: width !== "block",
  });
  return (
    <button type={type} className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
