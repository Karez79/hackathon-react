import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  type = 'rounded',
  size = 'medium',
  onClick,
  disabled = false,
  ...props 
}) => {
  const className = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${type}`],
    styles[`btn--${size}`],
    disabled && styles['btn--disabled']
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
      aria-disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  type: PropTypes.oneOf(['rounded', 'square']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
