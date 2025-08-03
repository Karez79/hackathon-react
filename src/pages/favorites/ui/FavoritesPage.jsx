import { useStorageFavorite } from "../../../shared/hooks";
import { FavoritesList } from "../../../widgets/favorites-list/ui";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
    const { selectedUsers, toggleFavorite, isUserSelected } =
        useStorageFavorite();
    return (
        <div className={styles.favoritesPage}>
            {selectedUsers.length > 0 ? (
                <FavoritesList
                    selectedUsers={selectedUsers}
                    toggleFavorite={toggleFavorite}
                    isUserSelected={isUserSelected}
                />
            ) : (
                <div className={styles.container}>
                    <h1>Избранное</h1>
                    <p className={styles.subtitle}>
                        Здесь будут отображаться ваши избранные участники
                        команды
                    </p>

                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon}>⭐</div>
                        <p className={styles.emptyText}>
                            Пока нет избранных участников.
                            <br />
                            Добавьте их из списка команды!
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
