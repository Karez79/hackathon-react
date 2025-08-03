import PropTypes from 'prop-types';
import styles from './MemberCard.module.scss';

const MemberCard = ({ member }) => {
  return (
    <div className={styles.card}>
      <div className={styles.initials}>{member.initials}</div>
      <div className={styles.content}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.description}>{member.description}</p>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MemberCard;
