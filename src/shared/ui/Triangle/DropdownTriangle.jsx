import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './DropdownTriangle.module.scss';

export const DropdownTriangle = ({
  children,
  onClick,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick(e);
  };

  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={styles.header} onClick={handleClick}>
        <div className={`${styles.triangle} ${isOpen ? styles.open : ''}`} />
      </div>

      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

DropdownTriangle.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
