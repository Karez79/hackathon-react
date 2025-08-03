import styles from "./Button.module.scss";
import PropTypes from "prop-types";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  ...props
}) => {
  const className = `${styles.button} ${styles[variant] || ""}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
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
