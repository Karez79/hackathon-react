import { members } from './member';

// Получить участника по ID
export const getMemberById = (id) => {
  return (
    members[id] || {
      name: 'Участник не найден',
      role: 'Неизвестная роль',
      initials: '?',
      description: 'Информация об участнике не найдена.',
    }
  );
};

// Получить всех участников как массив
export const getAllMembers = () => {
  return Object.values(members);
};

// Получить количество участников
export const getMembersCount = () => {
  return Object.keys(members).length;
};
