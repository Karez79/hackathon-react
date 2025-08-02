import styles from "./Button.module.scss";
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
export const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(styles.button, styles[variant])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propsTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
  disabled: false,
  type: "button",
};
