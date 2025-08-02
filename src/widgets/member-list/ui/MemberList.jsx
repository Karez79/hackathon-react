import { members } from "../../../entities/member/model/member";
import MemberCard from "../../../entities/member/ui/MemberCard";
import styles from "./MemberList.module.scss";

const MembersGrid = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersGrid;
