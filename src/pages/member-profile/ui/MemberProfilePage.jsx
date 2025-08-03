import {useParams, Link, useNavigate} from 'react-router-dom';
import {getMemberById} from '../../../entities/member';
import styles from './MemberProfilePage.module.scss';
import {Badge, Button, Progress} from '../../../shared/ui';
import FavouriteBtn from '../../../shared/ui/FavouriteBtn/FavouriteBtn';

/** Mock data */
const skills = [
  {name: 'React', level: 90},
  {name: 'JavaScript', level: 85},
  {name: 'TypeScript', level: 80},
  {name: 'SCSS', level: 75},
  {name: 'Node.js', level: 70},
];
/***/

export const MemberProfilePage = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const member = getMemberById(id);
  const contacts = member.contacts || {};

  return (
    <div className={styles.memberProfilePage}>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          {/** Breadcrumbs - todo */}
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
              <div className={styles.role}>
                {member.role}
                {member.badges &&
                  member.badges.length > 0 &&
                  member.badges.map((badge, i) => (
                    <Badge key={i}>{badge}</Badge>
                  ))}
              </div>
              <p className={styles.description}>{member.description}</p>

              <FavouriteBtn />

              <Button onClick={() => navigate('/')}>← Назад к команде</Button>
            </div>
          </div>

          <div className={styles.profileCardSkills}>
            <h3>Навыки и технологии</h3>
            <div className={styles.profileCardSkillsList}>
              {skills.map((skill, i) => (
                <Progress key={i} label={skill.name} percent={skill.level} />
              ))}
            </div>
          </div>

          <div className={styles.profileCardContacts}>
            <h3>Контакты</h3>
            <div className={styles.profileCardContactsList}>
              {Object.keys(contacts).map((contact) => (
                <div key={contact} className={styles.contactItem}>
                  <Button
                    onClick={() => window.open(contacts[contact], '_blank')}
                    style={{textTransform: 'capitalize'}}
                  >
                    {contact}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.funFact}>{member.funFact}</div>
        </div>
      </div>
    </div>
  );
};
