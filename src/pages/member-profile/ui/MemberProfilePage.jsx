import { useParams, Link } from 'react-router-dom';
import { getMemberById } from '../../../entities/member';
import styles from './MemberProfilePage.module.scss';

const MemberProfilePage = () => {
  const { id } = useParams();
  const member = getMemberById(id);

  return (
    <div className={styles.memberProfilePage}>
      <div className={styles.container}>
        <Link to="/" className={styles.backButton}>
          ← Назад к команде
        </Link>
        
        <div className={styles.profileCard}>
          <div className={styles.avatar}>
            {member.initials}
          </div>
          
          <h1>{member.name}</h1>
          <p className={styles.role}>{member.role}</p>
          <p className={styles.description}>{member.description}</p>
          
          <div className={styles.memberId}>
            ID участника: {id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfilePage;