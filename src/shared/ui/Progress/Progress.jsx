import PropTypes from 'prop-types';
import styles from './Progress.module.scss';

export const Progress = ({
  percent = 0,
  label = '',
  color = '#4a00e0',
  type = 'bar',
}) => {
  const safePercent = Math.min(Math.max(percent, 0), 100);

  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (safePercent / 100) * circumference;
  if (type === 'circle') {
    return (
      <div
        className={styles.circleContainer}
        style={{ '--progress-color': color }}
      >
        <svg height={radius * 2} width={radius * 2}>
          <circle
            className={styles.circleBg}
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className={styles.circleProgress}
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className={styles.circleLabel}>
          <div className={styles.percent}>{safePercent}%</div>
          <div className={styles.text}>{label}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.barContainer}>
      <span className={styles.label}>{label}</span>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${safePercent}%`, backgroundColor: color }}
        />
      </div>
      <span className={styles.percentLabel}>{safePercent}%</span>
    </div>
  );
};

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.oneOf(['bar', 'circle']),
};
