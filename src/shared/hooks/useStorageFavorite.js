import { useState, useEffect } from 'react';

const STORAGE_KEY = 'saved_member_ids';

export const useStorageFavorite = () => {
    const [selectedUsers, setSelectedUsers] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            try {
                return saved ? JSON.parse(saved) : [];
            } catch (e) {
                console.error('Error parsing saved members', e);
                return [];
            }
        }
        return [];
    });

    useEffect(() => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedUsers));
    }, [selectedUsers]);


    const addUser = (userId) => {
        setSelectedUsers((prevUsers) => {
            const userIdStr = String(userId);
            if (!prevUsers.includes(userIdStr)) {
                
                return [...prevUsers, userIdStr];
            }
            return prevUsers; 
        });
    };

    const removeUser = (userId) => {
        setSelectedUsers((prevUsers) => {
            const userIdStr = String(userId);
            return prevUsers.filter((id) => String(id) !== userIdStr);
        });
    };

    const isUserSelected = (userId) => {
        const userIdStr = String(userId);
        return selectedUsers.some(id => String(id) === userIdStr);
    };

    const toggleFavorite = (userId) => {
        const userIdStr = String(userId);

        if (isUserSelected(userIdStr)) {
            removeUser(userIdStr);
        } else {
            addUser(userIdStr);
        }
    };
    return { selectedUsers, addUser, removeUser, toggleFavorite, isUserSelected };
};  