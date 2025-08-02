import { getTeamInfo, getTechnologies } from '../../../entities/team';
// import { MemberList } from '../../../widgets/member-list';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const teamInfo = getTeamInfo();
  const technologies = getTechnologies();

  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1>{teamInfo.name}</h1>
        <p className={styles.subtitle}>
          {teamInfo.description}
        </p>
        
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{teamInfo.stats.members}</span>
            <span className={styles.statLabel}>Участников</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{teamInfo.stats.technologies}</span>
            <span className={styles.statLabel}>Технологий</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>{teamInfo.stats.days}</span>
            <span className={styles.statLabel}>Дня</span>
          </div>
        </div>

        <div className={styles.technologies}>
          <div className={styles.techList}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.teamSection}>
          <h2>Наша команда</h2>
          {/* <MemberList /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;