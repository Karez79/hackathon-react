import PropTypes from "prop-types";
import styles from "./Progress.module.scss";

export const Progress = ({ percent, label, color = "blue", type = "bar" }) => {
  const safePercent = Math.min(Math.max(percent, 0), 100);

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (safePercent / 100) * circumference;
  if (type === "circle") {
    return (
      <div className={styles.circleWrapper}>
        <svg height="120" width="120">
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="60"
            cy="60"
          />
          <circle
            stroke={`var(--${color})`}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="60"
            cy="60"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className={styles.text}
          >
            {safePercent}%
          </text>
        </svg>
        <p className={styles.label}>{label}</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>{label}</span>
        <span>{safePercent}</span>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          styles={{
            width: `${safePercent}%`,
            backgroundColor: `var(--${color})`,
          }}
        />
      </div>
    </div>
  );
};

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.oneOf(["bar", "circle"]),
};
