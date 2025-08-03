import {useParams, Link} from 'react-router-dom';
import {getMemberById} from '../../../entities/member';
import styles from './MemberProfilePage.module.scss';

/** Mock data */
const skills = [
  {name: 'React', level: 90},
  {name: 'JavaScript', level: 85},
  {name: 'TypeScript', level: 80},
  {name: 'SCSS', level: 75},
  {name: 'Node.js', level: 70},
];
const contacts = {
  Telegram: 'https://t.me/username',
  Email: '',
  GitHub: '',
};
/***/

const MemberProfilePage = () => {
  const {id} = useParams();
  const member = getMemberById(id);

  return (
    <div className={styles.memberProfilePage}>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          {/** Breadcrumbs */}
          <nav className={styles.breadcrumbs} title='В разработке'>
            <Link to='/' className={styles.breadcrumb}>
              Главная
            </Link>
            <span className={styles.separator}>&nbsp;/&nbsp;</span>
            <span className={styles.current}>{member.name}</span>
          </nav>
          {/***/}

          <div className={styles.profileCardHeader}>
            <div className={styles.avatar}>{member.initials}</div>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{member.name}</h1>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.description}>{member.description}</p>
              {/** Add to favorites */}
              <button title='В разработке'>♡</button>
              {/** Button */}
              <Link to='/' title='В разработке'>
                ← Назад к команде
              </Link>
            </div>
          </div>

          <div className={styles.profileCardSkills}>
            <h3>Навыки и технологии</h3>
            <div className={styles.profileCardSkillsList}>
              {skills.map((skill, i) => (
                /** Progress */
                <div key={i} className={styles.skillItem} title='В разработке'>
                  <span className={styles.skillItemName}>{skill.name}</span>
                  <span className={styles.skillItemLevel}>{skill.level}</span>
                </div>
                /***/
              ))}
            </div>
          </div>

          <div class={styles.profileCardContacts}>
            <h3>Контакты</h3>
            <div class={styles.profileCardContactsList}>
              {Object.keys(contacts).map((contact) => (
                <div key={contact} className={styles.contactItem}>
                  {/** Button */}
                  <a href={contacts[contact]} title='В разработке'>
                    <span>{contact}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfilePage;
