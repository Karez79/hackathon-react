import styles from "./Badge.module.scss";
import PropTypes from "prop-types";

const VARIANT_COLORS = {
  primary: "#0111f6ff",
  secondary: "#757575ff",
  success: "#00d011ff",
  danger: "#be0000ff",
  warning: "#e78700dc",
  info: "#00b0f0ff",
  light: "#f8f9fa",
  dark: "#343a40",
};
export const Badge = ({ children, variant = "primary", color, ...props }) => {
  const badgeColor = color || VARIANT_COLORS[variant] || VARIANT_COLORS.primary;

  const style = { "--badge-bg": badgeColor };

  return (
    <span className={styles.badge} style={style} {...props}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  color: PropTypes.string,
};

Badge.defaultProps = {
  variant: "primary",
  color: null,
};
