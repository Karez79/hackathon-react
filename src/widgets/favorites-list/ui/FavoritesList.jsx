import { useMemo } from "react";
import { getAllMembers, MemberCard } from "../../../entities/member";
import styles from "./FavoritesList.module.scss";
import PropTypes from "prop-types";

export const FavoritesList = ({
    selectedUsers,
    toggleFavorite,
    isUserSelected,
}) => {
    const favotireList = useMemo(() => {
        return getAllMembers().filter((member) =>
            selectedUsers.includes(member.id)
        );
    }, [selectedUsers]);

    return (
        <div className="contianer">
            <div className={styles["favorite-grid"]}>
                {favotireList &&
                    favotireList.map((member) => (
                        <MemberCard
                            key={member.id}
                            member={member}
                            toggleFavorite={() => toggleFavorite(member.id)}
                            isUserSelected={isUserSelected(member.id)}
                        />
                    ))}
            </div>
        </div>
    );
};

FavoritesList.propTypes = {
    selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    isUserSelected: PropTypes.func.isRequired,
};
