// MemberCard.jsx
import PropTypes from "prop-types";
import styles from "./MemberCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Badge } from "../../../shared/ui/Badge/Badge";
import { technologies } from "../../team";
import FavouriteBtn from "../../../shared/ui/FavouriteBtn/FavouriteBtn";

const MemberCard = ({ member, toggleFavorite, isUserSelected }) => {
    const navigate = useNavigate();
    const [showAllTech, setShowAllTech] = useState(false);

    const toggleTech = () => {
        setShowAllTech(!showAllTech);
    };

    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={member.avatar} alt={member.initials} />

            <div className={styles.content}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.description}>{member.description}</p>

                <div className={styles.techStack}>
                    {technologies
                        .slice(0, showAllTech ? technologies.length : 3)
                        .map((tech, index) => (
                            <Badge key={index} variant="primary">
                                {tech}
                            </Badge>
                        ))}

                    {technologies.length > 3 && (
                        <button
                            onClick={toggleTech}
                            className={styles.toggleTech}
                        >
                            {showAllTech
                                ? "Свернуть"
                                : `+${technologies.length - 3}`}
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.button}>
                <Button onClick={() => navigate(`/member/${member.id}`)}>
                    Подробнее
                </Button>
                <FavouriteBtn
                    isFavorite={isUserSelected}
                    toggleFavorite={toggleFavorite}
                />
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
    isFavorite: PropTypes.bool.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
};

export default MemberCard;
