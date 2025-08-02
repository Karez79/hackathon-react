import MemberList from "../../../widgets/member-list/ui/MemberList";
import { TeamInfo } from "../../../widgets/team-info";
// import { MemberList } from '../../../widgets/member-list';
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <TeamInfo />
      <section className={styles.teamSection}>
        <h2>Наша команда</h2>
        {<MemberList />}
      </section>
    </div>
  );
};

export default HomePage;
