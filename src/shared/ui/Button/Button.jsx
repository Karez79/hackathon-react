import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  shape = 'default',
  fullWidth = false,
  disabled = false,
  loading = false,
  href,
  to,
  target,
  onClick,
  type = 'button',
  className = '',
  ...props
}, ref) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    shape !== 'default' && styles[`btn--${shape}`],
    fullWidth && styles['btn--fullWidth'],
    disabled && styles['btn--disabled'],
    loading && styles['btn--loading'],
    className
  ].filter(Boolean).join(' ');

  const buttonContent = (
    <>
      <span className={styles.btn__content}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        className={classes}
        onClick={disabled || loading ? undefined : onClick}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={classes}
        onClick={disabled || loading ? undefined : onClick}
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary', 
    'outline',
    'ghost',
    'danger',
    'success'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['default', 'rounded', 'square']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;