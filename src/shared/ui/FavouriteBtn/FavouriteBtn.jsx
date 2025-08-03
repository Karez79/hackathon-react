import PropTypes from "prop-types";
import styles from "./FavoriteBtn.module.scss";

const FavouriteBtn = ({ isFavorite, toggleFavorite }) => {
    return (
        <button
            onClick={toggleFavorite}
            className={`${styles.favoriteButton} ${
                isFavorite ? styles.favoriteActive : ""
            }`}
            aria-label={
                isFavorite ? "Удалить из избранного" : "Добавить в избранное"
            }
        >
            ♥
        </button>
    );
};
FavouriteBtn.propTypes = {
    isFavorite: PropTypes.bool.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
};
export default FavouriteBtn;
