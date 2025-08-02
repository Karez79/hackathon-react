import { members } from "../../../entities/member/model/member";
import MemberCard from "../../../entities/member/ui/MemberCard";
import PropTypes from "prop-types";

const MemberList = () => {
  return (
    <>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </>
  );
};

MembersList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      initials: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MemberList;
